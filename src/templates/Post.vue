<template>
    <Layout>
        <section class="flex flex-col sm:flex-row sm:space-x-10 w-full">
            <section class="article relative sm:w-12/12">
                <div>
                    <header class="my-10">
                        <g-link to="/blog/" class="flex flex-row items-center">
                            <svg class="flex h-4 inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg> Go back
                        </g-link>

                        <h2 class="leading-10 mt-8 mb-4 text-2xl sm:text-3xl break-words">
                            {{ $page.post.title }}
                        </h2>

                        <span>
                            {{ $page.post.timeToRead }} minutes read
                        </span>

                        <p class="font-body text-lg mb-3">
                            {{ $page.post.excerpt }}
                        </p>

                        <g-link :to="$page.post.category.path" class="flex flex-row items-center"> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            {{ $page.post.category.title }}
                        </g-link>
                    </header>

                    <g-image class="left-0 right-0 w-full" :src="$page.post.cover"></g-image>
                
                </div>
                <div v-html="$page.post.content" class="prose prose-xl mt-10"></div>
            </section>
            <section class="h-128 sidebar sm:mt-90 sm:w-5/12 sticky w-full">
                <header class="sm:mt-0 mt-20 mb-2">
                    <h2 class="sm:text-lg text-2xl underline">Recent Articles</h2>
                </header>
                <PostSidebar />
            </section>
        </section>
    </Layout>
</template>

<script>
import PostSidebar from '@/components/PostSidebar.vue';

export default {
    data() {
        return {
            
        }
    },
    components:{
        PostSidebar
    },
    
    metaInfo () {
        return {
            title: this.$page.post.title + ' by ' + this.$page.post.author.title,
            meta: [
                {
                    name: 'description',
                    content: this.$page.post.excerpt
                },
                {
                    name: 'author',
                    content: this.$page.post.author.title
                },
                {
                    name: 'canonical',
                    content: this.$page.post.canonical
                }
            ],
        }
    }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    title
    excerpt
    date (format: "D. MMMM YYYY")
    timeToRead
    canonical
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
    cover
  }
}
</page-query>

<style>
    .sticky{
        top: 50px;
    }

    p{
       @apply font-body;
    }

    a {
        word-break: break-word;
    }

    code[class*="language-"], pre[class*="language-"] {
        text-shadow: unset !important;
    }

    .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
        color: #ffa740;
        background: transparent !important;
    }

</style>