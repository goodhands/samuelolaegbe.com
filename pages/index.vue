<template>
  <div>
    <div class="flex flex-col-reverse items-center justify-between sm:flex-row">
      <div class="container flex flex-col justify-center my-10 sm:my-0 sm:h-screen">
        <h1 class="font-bold leading-none sm:text-left text-center text-2xl sm:text-4xl">
          Hi, my name is <br/>Samuel Olaegbe
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
      <img class="sm:h-96 rounded-full sm:w-96" src="/media/Sam-2024.png"/>
    </div>

    <!-- Projects section -->
    <div class="mb-20">
      <h4 class="heading text-2xl leading-tight">Projects</h4>
      <span class="font-body">See some of my recent projects</span>

      <div class="sm:gap-y-0 gap-y-14 gap-x-16 grid grid-cols-1 sm:grid-cols-4 mt-10">
        <div class="w-full mb-4" v-for="project in data" :key="project._id">
          <img :src="project.cover"/>
          <h2 class="text-2xl font-semibold leading-none my-5">
            {{ project?.name }}
          </h2>
          <p class="font-body leading-relaxed mb-2">
            {{ project?.description }}
          </p>
          <div class="flex flex-row justify-between gap-2">
            <a target="_blank" :href="project?.links?.github" class="flex items-center text-center text-rose-500">
              <Icon name="uil:github" />
              <p class="pl-2">See on Github</p>
            </a>
            <a target="_blank" v-if="project?.links?.live" :href="project?.links?.live" class="flex items-center text-violet-500 text-center">
              <p class="pl-2">See live</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Sponsored posts -->
    <div class="mb-20">
      <h4 class="heading text-2xl leading-tight">Guest articles</h4>
      <span class="font-body">
        Check out <a href="https://devloader.hashnode.dev/" class="underline font-semibold">my blog</a> for my personal articles
      </span>

      <div class="sm:gap-y-0 gap-y-14 gap-x-16 grid grid-cols-1 sm:grid-cols-4 mt-10">
        <div class="w-full mb-4">
          <img src="/media/How-to-accept-payments-on-your-app-using-custom-form-fields-with-Nuxt-and-Laravel-Cashier.jpg"/>
          <h2 class="text-2xl font-semibold leading-none my-5">
            <a href="https://adevait.com/laravel/creating-checkout-form-nuxtjs-laravel-cashier">
              An Easy-to-Follow Guide for Creating a Checkout Form With Nuxt.js and Laravel Cashier
            </a>
          </h2>
          <p class="font-body leading-relaxed mb-2">
            Stripe fintech is a popular company that allows you to accept payment from your
            customers worldwide. Stripe's mission is also to provide benefits, including
            security against fraud, which is also the cause of a UX problem we will attempt
            to solve here as software developers.
          </p>
          <a target="_blank" href="https://adevait.com/laravel/creating-checkout-form-nuxtjs-laravel-cashier" class="flex items-center text-center">
            Read
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
        <div class="w-full mb-4">
          <img src="/media/How-to-create-and-publish-a-private-npm-package-with-Github-package.jpg"/>
          <h2 class="text-2xl font-semibold leading-none my-5">
            <a target="_blank" href="https://adevait.com/software/publish-private-npm-packages-with-github-package-registry">
              How to Publish Private NPM Packages With Github Package Registry
            </a>
          </h2>
          <p class="font-body leading-relaxed mb-2">
            How I ended up publishing Private NPM Packages on Github? My story can help you learn how to create NPM private package and add it to the Github NPM registry.
          </p>
          <a target="_blank" href="https://adevait.com/software/publish-private-npm-packages-with-github-package-registry" class="flex items-center text-center">
            Read
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Contact section -->
    <div class="container h-screen flex flex-col justify-center">
      <div class="flex flex-row justify-evenly">
        <a href="https://linkedin.com/in/olaegbe-samuel" class="font-body">LinkedIn</a>
        <a href="https://twitter.com/devloader" class="font-body">Twitter</a>
        <a href="https://github.com/goodhands" class="font-body">Github</a>
        <a href="https://docs.google.com/document/d/e/2PACX-1vQKYpfgoCuCIU0uanOcNO-4d_oQ557DnLKUQTnXOIZI_xSVSA4ElWE2jy9qemnubfj7MfHUktTdAA4_/pub" class="font-body">Resume</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // During SSR data is fetched only on the server side and transferred to the client.
  const { data } = await useAsyncData('projects', async () => {
    const response = await queryContent('/projects').find();
    return response;
  })

  definePageMeta({
    title: 'Welcome'
  })

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>