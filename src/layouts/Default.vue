<template>
  <div class="layout">
    <header class="header">
      <g-link class="index font-body" to="/" title="Samuel Olaegbe">SO</g-link>
      <nav class="nav font-body hidden sm:flex">
        <g-link class="nav__link" to="/experience/">Experience</g-link>
        <a class="nav__link" target="_blank" href="https://github.com/goodhands">Github</a>
        <a class="nav__link" target="_blank" href="https://twitter.com/devloader">Twitter</a>
        <a class="nav__link" target="_blank" href="https://linkedin.com/in/olaegbe-samuel">LinkedIn</a>
      </nav>
      <nav class="sm:hidden">
        <a href="#" @click="openMenu()" class="block h-6 w-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
          </svg>
        </a>
        <div class="menu" v-if="menuOpened">

        </div>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
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
body {
  font-family: 'Crimson Text', serif, Helvetica, Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: #FFF7EF;
}

.index{
  text-decoration: none;
  font-size: 20px;
  color: #000;
}

.layout {
  max-width: 90%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  transition: color 0.2s ease-in-out 0s;
}

.nav__link:hover{
  color: #000;
}

::selection{
  background: #E3DFBA;
  color: #000;
}
</style>
