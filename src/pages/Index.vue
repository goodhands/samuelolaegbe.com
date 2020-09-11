<template>
  <Layout>
    <div class="container flex flex-col justify-center h-screen">
      <h1 class="font-bold leading-none text-4xl">
        Hi, my name is <br/>Samuel Ola-e-gbe
      </h1>
      <!-- Short bio -->
      <div class="container mt-10 sm:w-128">
        <p class="text-xl font-body">
          Senior Fullstack Engineer with 4 years of experience with crafting awesome,
          high-performant websites with PHP/Laravel. Additional skills include Vue.js, MySQL, 
          Tailwind, Gridsome, Nuxt, Vuex. Available for hire 🚀 
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
        <div class="w-full h-96">
          <g-image src="~/media/website-devloader-project.png"/>
          <p class="font-body leading-relaxed mt-5">
            <a href="https://devloader.herokuapp.com/" target="_blank">Devloader Blog</a> is a hobby project I worked on while learning how to build single page apps with Vue.js and Laravel
            in 2019. Built with Laravel + Vue.js + WP REST API
          </p>
          <div class="flex flex-row justify-items-start mt-3">
            <a href="https://github.com/goodhands/devloader1.0" target="_blank"  class="hover:border-b-2 font-body hover:text-black mr-2 text-base text-gray-500">Github</a>
            <a href="https://devloader.herokuapp.com/" target="_blank" class="hover:border-b-2 font-body hover:text-black mr-2 text-base text-gray-500">devloader app</a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Contact section -->
    <div class="container h-screen flex flex-col justify-center h-screen">
      <h2 class="text-2xl text-center mb-10">
        Contact
      </h2>
      <div class="flex flex-row justify-between">
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
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
