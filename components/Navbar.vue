<template>
    <div>
        <nav class="nav font-body hidden sm:flex">
            <NuxtLink class="nav__link" to="/experience/">Experience</NuxtLink>
            <a target="_blank" href="https://blog.samuelolaegbe.com" class="nav__link flex items-center space-x-2">
                Blog
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
            </a>
            <NuxtLink class="nav__link" to="/hire/">Hire me</NuxtLink>
        </nav>

        <nav class="sm:hidden flex z-50">
            <a href="#" @click="openMenu()" class="block h-6 w-6 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>
            </a>
            <div class="animate-grow bg-blue-100 bottom-0 fixed flex flex-col font-body justify-evenly left-0 menu-mobile origin-top-right right-0 shadow top-0 w-full" v-if="menuOpened">
                <div class="flex flex-col font-body items-start justify-evenly ml-10 text-2xl text-indigo-500">
                    <NuxtLink to="/experience">Experience</NuxtLink>
                    <NuxtLink to="/projects">Projects</NuxtLink>
                    <NuxtLink to="/hire">Hire me</NuxtLink>
                </div>
                <div class="flex flex-row font-body justify-center m-0 space-x-10 text-2xl text-indigo-500">
                    <a class="nav__link ml-0" target="_blank" href="https://github.com/goodhands">Github</a>
                    <a class="nav__link ml-0" target="_blank" href="https://twitter.com/devloader">Twitter</a>
                    <a class="nav__link ml-0" target="_blank" href="https://linkedin.com/in/olaegbe-samuel">LinkedIn</a>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {
            menuOpened: false,
        }
    },

    methods: {
        openMenu(){
            this.menuOpened = !this.menuOpened;
        }
    },
}
</script>

<style>
    .menu-mobile{
        z-index: 9;
    }
</style>