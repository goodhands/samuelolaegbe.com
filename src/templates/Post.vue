<template>
    <Layout>
        <section class="flex flex-col sm:flex-row sm:space-x-10">
            <section class="article relative">
                <div>
                    <header class="my-10">
                        <g-link to="/blog/" class="flex flex-row items-center">
                            <svg class="flex h-4 inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg> Go back
                        </g-link>

                        <h2 class="leading-10 my-8 text-3xl">
                            {{ $page.post.title }}
                        </h2>

                        <g-link :to="$page.post.category.path" class="flex flex-row items-center"> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            {{ $page.post.category.title }}
                        </g-link>

                        <p class="font-body text-lg mb-3">
                            {{ $page.post.excerpt }}
                        </p>

                        <span>
                            {{ $page.post.timeToRead }} minutes read
                        </span>
                    </header>

                    <g-image class="left-0 right-0 w-full" :src="$page.post.cover"></g-image>
                
                </div>
                <div v-html="$page.post.content"></div>
            </section>
            <section class="sidebar w-full sm:w-6/12 sticky sm:mt-96 h-128">
                <header class="my-10">
                    <h2 class="text-lx">Recent Articles</h2>
                </header>
            </section>
        </section>
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

<style>
    .sticky{
        top: 50px;
    }
</style>