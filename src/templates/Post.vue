<template>
    <Layout>
        <section>
            <header class="my-10">
                <h2 class="text-3xl">
                    {{ $page.post.title }}
                </h2>
                <p class="font-body text-lg mb-3">
                    {{ $page.post.excerpt }}
                </p>
                <span>
                    {{ $page.post.timeToRead }} minutes read
                </span>
                <g-link :to="$page.post.category.path">{{ $page.post.category.title }}</g-link>
            </header>
            <g-image class="absolute left-0 right-0 w-full" :src="$page.post.cover"></g-image>
        </section>
        <section v-html="$page.post.content"></section>

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
    excerpt
    date (format: "D. MMMM YYYY")
    timeToRead
    category{
        id
        title
        path
    }
    author {
        id
        title
        path
    }
    excerpt
    content
    cover (width: 860, blur: 10)
  }
}
</page-query>