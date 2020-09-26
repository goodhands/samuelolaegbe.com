<template>
    <Layout>
        {{ $page.post.title }}
        {{ $page.post.id }}
        {{ $page.post.timeToRead }}
    </Layout>
</template>

<script>
export default {
    
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    title
    slug
    date (format: "D. MMMM YYYY")
    timeToRead
    excerpt
    content
    cover (width: 860, blur: 10)
  }
}
</page-query>