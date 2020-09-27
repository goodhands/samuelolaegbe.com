<template>
    <div>
        <div v-for="(edge, index) in $static.posts.edges" :key="edge.node.id" class="h-auto border-indigo-400">
            <g-link :to="edge.node.path" class="flex flex-row items-center justify-between mb-4">
                <g-image :src="edge.node.cover" class="w-6/12 mr-3"></g-image>
                <div class="flex flex-col">
                    <h2 class="leading-4 text-lg">{{ edge.node.title }}</h2>
                    <span :class="'font-body text-tiny text-purple-' + (index + 2 * 100)">{{ edge.node.date }}</span>
                </div>
            </g-link>
        </div>
    </div>
</template>

<static-query>
    query{
        posts: allPost{
            edges{
                node{
                    id
                    path
                    cover
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
</static-query>