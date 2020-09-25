<template>
    <div>
        <nav class="nav font-body hidden sm:flex">
            <g-link class="nav__link" to="/experience/">Experience</g-link>
            <a class="nav__link" target="_blank" href="https://github.com/goodhands">Github</a>
            <a class="nav__link" target="_blank" href="https://twitter.com/devloader">Twitter</a>
            <a class="nav__link" target="_blank" href="https://linkedin.com/in/olaegbe-samuel">LinkedIn</a>
        </nav> 
        <nav class="sm:hidden flex z-50">
            <a href="#" @click="openMenu()" class="block h-6 w-6 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>
            </a>
            <div class="menu-mobile absolute bg-white flex h-screen justify-center shadow w-11/12" v-if="menuOpened">
                
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
        left: calc(10% - 21px);
        margin: auto;
        top: 18px;
    }
</style>