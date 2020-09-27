<template>
    <Layout>
        <section class="gap-16 grid grid-cols-1 sm:grid-cols-2 mt-10 mb-10">
            <div v-for="edge in $page.posts.edges" :key="edge.node.id" class="h-auto border-indigo-400">
                    <header class="flex flex-row justify-between mb-5">
                        <!-- Authour -->
                        <g-image src="~/media/Sam.jpg" class="h-12 w-12 sm:w-16 sm:h-16 rounded"></g-image>

                        <!-- Excerpt -->
                        <div class="excerpts flex flex-col ml-5 sm:ml-2 justify-between">
                            <p class="h-12 overflow-hidden leading-4 text-tiny font-base sm:leading-snug sm:h-16 sm:text-base font-body">
                                {{ edge.node.excerpt }}    
                            </p>
                            <span class="hidden sm:flex flex-row items-baseline justify-between">
                                <g-link class="active font-body text-blue-800 text-tiny" :to="edge.node.category.path">{{ edge.node.category.title }}</g-link>
                                <small class="font-body text-green-900 text-tiny">{{ edge.node.date }}</small>
                            </span>
                        </div>
                    </header>
                    <!-- Cover -->
                    <g-link :to="edge.node.path">
                        <g-image :src="edge.node.cover"></g-image>
                    </g-link>

                    <div>
                        <g-link :to="edge.node.path">
                            <h2 class="font-display leading-none mt-6 text-2xl">
                                {{ edge.node.title }}
                            </h2>
                        </g-link>
                    </div>
            </div>
        </section>
    </Layout>
</template>

<script>
    export default {
        
    }
</script>

<page-query>
    query{
        posts: allPost{
            edges{
                node{
                    id
                    path
                    cover
                    excerpt
                    category{
                        id
                        title
                        path
                    }
                    date (format: "D. MMMM YYYY")
                    title
                }
            }
        }
    }
</page-query>