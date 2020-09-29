<template>
  <Layout>
    <div class="container flex flex-col justify-center h-screen">
      <h1 class="font-bold leading-none text-4xl">
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

    <!-- Projects section -->
    <div class="container mb-40">
      <h4 class="heading text-2xl leading-tight">Projects</h4>
      <span class="font-body">See some of my recent projects</span>

      <div class="gap-16 grid grid-cols-1 sm:grid-cols-2 mt-10">
        <!-- Expense NG Project -->
        <div class="w-full sm:h-96">
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
        <!-- Comments SDK -->
        <div class="w-full sm:h-96">
          <g-image src="~/media/comments-sdk.png"/>
          <p class="font-body leading-relaxed mt-5">
            <a href="https://github.com/goodhands/comments-sdk" target="_blank">Comments PHP Package</a> is an open source package I am currently
            working on as an easy method of interfacting with this <a href="https://comments.microapi.com" target="_blank">comments microservice</a>.
          </p>
          <div class="flex flex-row justify-items-start mt-3">
            <a href="https://github.com/goodhands/comments-sdk" target="_blank"  class="hover:border-b-2 font-body hover:text-black mr-2 text-base text-gray-500">Github</a>
            <a href="https://packagist.org/packages/goodhands/comments-sdk" target="_blank" class="hover:border-b-2 font-body hover:text-black mr-2 text-base text-gray-500">Packagist</a>
          </div>
        </div>
        <!-- Vision App Project -->
        <div class="w-full sm:h-96">
          <g-image src="~/media/vision-app.png"/>
          <p class="font-body leading-relaxed mt-5">
            <a href="#" target="_blank">Image Vision</a> is a website I built for 
            labelling images with Google Vision API. Integrates with Cloudinary to upload and 
            label multiple images at once from various sources such as social media profiles, cloud storage, etc.
          </p>
          <div class="flex flex-row justify-items-start mt-3">
            <a href="https://github.com/goodhands/vision-app" target="_blank"  class="hover:border-b-2 font-body hover:text-black mr-2 text-base text-gray-500">Github</a>
          </div>
        </div>
        <!-- Devloader -->
        <div class="w-full sm:h-96">
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

    <!-- Contact Form -->
    <div class="container mb-40">
      
    </div>

    <!-- Contact section -->
    <div class="container h-screen flex flex-col justify-center h-screen">
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
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
