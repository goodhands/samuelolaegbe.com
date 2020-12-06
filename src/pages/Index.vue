<template>
  <Layout>
    <div class="flex flex-col-reverse items-center justify-between sm:flex-row">
      <div class="container flex flex-col justify-center my-10 sm:my-0 sm:h-screen">
        <h1 class="font-bold leading-none sm:text-left text-center text-2xl sm:text-4xl">
          Hi, my name is <br/>Samuel Ola-e-gbe
        </h1>
        <!-- Short bio -->
        <div class="container mt-10 sm:w-128">
          <p class="text-xl font-body">
            Software Engineer with a passion for building products that addresses real life
            challenges. I build for the web and the good of all. Open Source Contributor. 
            Vue.js & Laravel fanboy.
          </p>
        </div>
      </div>
      <g-image src="~/media/Sam.jpg" class="sm:h-96 rounded-full sm:w-96"></g-image>
    </div>

    <!-- Projects section -->
    <div class="container mb-20">
      <h4 class="heading text-2xl leading-tight">Projects</h4>
      <span class="font-body">See some of my recent projects</span>

      <div class="sm:gap-y-0 gap-y-10 gap-x-16 grid grid-cols-1 sm:grid-cols-2 mt-10">
        <!-- Expense NG Project -->
        <div class="w-full sm:h-128" v-for="project in $page.projects.edges" :key="project.node.id">
          <g-image :src="project.node.cover"/>
          <h2 class="text-2xl leading-none mt-5">
            {{ project.node.name }}
          </h2>
          <p class="font-body leading-relaxed">
            {{ project.node.description }}
          </p>
        </div>
      </div>

    </div>

    <!-- Contact Form -->

    <!-- Contact section -->
    <div class="container h-screen flex flex-col justify-center">
      <div class="flex flex-row justify-evenly">
        <a href="https://linkedin.com/in/olaegbe-samuel" class="font-body">LinkedIn</a>
        <a href="https://twitter.com/devloader" class="font-body">Twitter</a>
        <a href="https://github.com/goodhands" class="font-body">Github</a>
        <a href="https://drive.google.com/file/d/1ZwhXpf08p4M-tGZ6Btv4Zgg6WH8qUBoX/view?usp=sharing" class="font-body">Resume</a>
      </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Hello, world!'
    },
  }
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
    query{
        projects: allProjects{
            edges{
                node{
                    name
                    cover
                    description
                }
            }
        }

        posts: allPost{
          edges{
            node{
              title
              cover
              path
              excerpt
            }
          }
        }
    }
</page-query>