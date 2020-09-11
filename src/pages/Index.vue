<template>
  <Layout>
    <div class="container flex flex-col flex-column justify-center h-screen">
      <h1 class="font-bold leading-none text-4xl">
        Hi, my name is <br/>Samuel Ola-e-gbe
      </h1>
      <!-- Short bio -->
      <div class="container mt-10 sm:w-128">
        <p class="text-xl font-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! 
          Dolores, aperiam non officia eos quod asperiores
        </p>
      </div>
    </div>

    <!-- Projects section -->
    <div class="container h-screen">
      <h4 class="heading text-2xl leading-tight">Projects</h4>
      <span class="font-body">See some of my recent projects</span>

      <div class="grid grid-cols-2 gap-6 mt-10">
        <!-- Expense NG Project -->
        <div class="w-full h-96">
          <g-image src="~/media/expenseng-project-header.png"/>
          <p class="font-body leading-relaxed mt-5">
            <a href="https://expenseng.com" target="_blank">ExpenseNG</a> is an expense tracking app developed to monitor the
            the expenses of the Federal Government of Nigeria.
          </p>
          <div class="flex flex-row justify-items-start mt-3">
            <a href="https://github.com/expenseng/expenseng" target="_blank"  class="hover:border-b-2 font-body hover:text-black mr-2 text-base text-gray-500">Github</a>
            <a href="https://expenseng.com" target="_blank" class="hover:border-b-2 font-body hover:text-black mr-2 text-base text-gray-500">expenseng.com</a>
          </div>
        </div>
        <!-- ... -->
        <div class="bg-grey h-20 w-20"></div>
      </div>
    </div>
    
    <!-- Contact section -->
    <div class="container h-screen">

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
