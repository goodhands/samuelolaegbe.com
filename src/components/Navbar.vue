<template>
    <div>
        <nav class="nav font-body hidden sm:flex">
            <g-link class="nav__link" to="/experience/">Experience</g-link>
            <g-link class="nav__link" to="/blog/">Blog</g-link>
            <g-link class="nav__link" to="/hire/">Hire me</g-link>
        </nav> 

        <nav class="sm:hidden flex z-50">
            <a href="#" @click="openMenu()" class="block h-6 w-6 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>
            </a>
            <div class="animate-grow bg-blue-100 bottom-0 fixed flex flex-col font-body justify-evenly left-0 menu-mobile origin-top-right right-0 shadow top-0 w-full" v-if="menuOpened">
                <div class="flex flex-col font-body items-start justify-evenly ml-10 text-2xl text-indigo-500">
                    <g-link to="/experience">Experience</g-link>
                    <g-link to="/projects">Projects</g-link>
                    <g-link to="/hire">Hire me</g-link>
                    <g-link to="/blog">Blog</g-link>
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