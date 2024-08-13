<template>
    <div>
        <div v-for="(edge) in $static.posts.edges" :key="edge.node.id" class="h-auto border-indigo-400">
            <g-link :to="edge.node.path" class="flex flex-col items-start justify-between mb-4">
                <g-image :src="edge.node.cover" class="mr-3 w-full mb-2"></g-image>
                <div class="flex flex-col">
                    <h2 class="leading-4 text-xl">{{ edge.node.title | shortform}}</h2>
                    <span :class="'font-body text-tiny text-gray-500'">{{ edge.node.date }}</span>
                </div>
            </g-link>
        </div>
    </div>
</template>

<script>
export default {
    filters:{
        shortform(value){
            return value.length > 40 ? value.substr(0, 40) + '...' : value;
        }
    }
}
</script>
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