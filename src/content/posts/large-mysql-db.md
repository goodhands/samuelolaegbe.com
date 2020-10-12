---
title: Optimizing Database Queries in large applications
date: 2020-10-12
category: MySQL
tags: ["php", "mysql", "performance"]
author: Samuel Olaegbe
cover: ./media/large-mysql-db.jpg
excerpt: Static analysis is the method of testing your code for basic logical, runtime or typographical exceptions without actually executing the code.
---
### Background

In this article we will take a look at how to optimize database queries in a Laravel or PHP application with a MySQL database. At [ExpenseNG](https://expenseng.com), our database keeps growing quickly as we record more government expenses from the Nigerian Open Treasury website. For an app that started at a bootcamp, we weren't prepared for the impact a growing database would have on the website. 

With these amount of records we had the responsibility of visualizing these data on our website in the way that has most meaningful impact and passed across the right information, which is **Where is the government spending most money?**

If you visit the [contractors](https://expenseng.com/contractors) page on ExpenseNG, you will see the list of everyone that has received money from the government sorted by the contractor who got the most money in the last completed month and you can also see the total amount they got for that month. The data looks like this:

```json
Contractor name: "",
Total Amount Received: "",
Month Ended: ""
```

 

### The Challenge

Now that we know what the data we need looks like, let's take a look at what it takes to retrieve this data from the database.

Two tables are involved in this operation and they are the `contractors` and `payments` table. The contractors table holds the records of all everyone that has received money from the government and the payments table holds the records of every payment ever made and a reference to their recipients.

The tables schema looks like this:

```json
payments:
	- amount (double)
	- date (DATE)
	- recipient (string)

contractors:
	- name (string)
	...
```

To sort the results from getting all the records from the contractors table by the total amount received by a contractor from the past month, that already sounds like a query involving two tables and we can achieve that with something like this:

```sql
SELECT contractors.*, (SELECT SUM(amount) from payments WHERE 
recipient = contractors.name) as total from contractors 
order by total desc
```

From the query above, we have a sub-select statement which helps us to calculate the total money received by all recipients and we can use the result from that sub-query to create a new column in our query which we can now use to sort our final result. The new column created by this sub-query is given an alias of `total`. 

The query above doesn't include the logic for fetching only results from the month ended, so we will modify the query further below:

```sql
SELECT contractors.*, (SELECT SUM(amount) from payments 
WHERE recipient = contractors.name 
AND date BETWEEN(2020-09-01, 2020-09-31) ) as total 
from contractors 
order by total desc
```

In the above query, we have added a new constraint to the sub-query which is `BETWEEN`. As you know this allows us to select only results that start from the first value and end on the second value.

### New problem

The query above works fine when you have a few records in your database, but when working with a database with thousands of records this can easily result in the query taking several minutes to execute or even resulting in a request timeout error on the server as the server doesn't receive a response for too long.

We can easily solve this problem by adding an index to the columns that are pivotal to our query, from the above query the columns we should add an index to are:

- `contractors.name`
- `payments.recipient`
- `payments.date`
- `payments.amout`

The query to add an index to our columns will look like this:

```sql
ALTER TABLE contractors ADD INDEX name_index (name)
```

Or if you are using Laravel migrations:

```php
//database/migrations/2020_09_20_102101_add_index_to_payments_table.php
Schema::table('payments', function (Blueprint $table) {
	$table->index('recipient');
	$table->index('amount');
	$table->index('date');
});
```

Now we can reduce our query execution time greatly by adding indexes. On ExpenseNG, our queries went from timing out after several minutes to a about 0.02 seconds with a pagination of 20 results per page.

We can further improve our query execution time by only selecting the columns that we need, we will change this line to look like this:

```sql
SELECT contractors.name, contractors.date, (SELECT SUM(amount) from payments 
....
```

### Using Laravel's Eloquent

We can achieve the same queries as we did above in Eloquent by using the `addSelect` method to create a sub-query to our original query:

```php
Contractor::select(['name', 'shortname', 'id'])
		->addSelect(['total' => Payment::selectRaw('SUM(amount)')
		    ->whereColumn('recipient', 'contractors.name')
		    ->whereBetween('date', [$monthStart, $monthEnd])
    ])->orderBy('total', 'desc')->paginate(20);
```

Here we are using Eloquent's advanced sub-queries which gives us a nice and comprehensive API to retrieve results from our model. If we wanted, we could lazy load our `Contractor` model relationships by chaining the the select method with `with('payments')->paginate(20)`.

And that is how you optimize database queries on a large MySQL database.  

> Adding an index to a table makes `UPDATE` queries run for a longer time, so you should not use them on tables that will get update frequently.

### Resources

- [https://dzone.com/articles/how-to-optimize-mysql-queries-for-speed-and-perfor](https://dzone.com/articles/how-to-optimize-mysql-queries-for-speed-and-perfor)
- [https://laravel.com/docs/8.x/migrations#indexes](https://laravel.com/docs/8.x/migrations#indexes)
- [https://laravel.com/docs/8.x/eloquent#advanced-subqueries](https://laravel.com/docs/8.x/eloquent#advanced-subqueries)