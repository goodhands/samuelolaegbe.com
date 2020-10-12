<template>
  <div class="h-full layout mb-12">
    <header class="header">
      <g-link class="index font-body z-50" to="/" title="Samuel Olaegbe">SO</g-link>
      <Navbar/>
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
import Navbar from '@/components/Navbar.vue';
  export default {
    components:{
      Navbar
    },
  }
</script>
<style>
body {
  font-family: 'Crimson Text', serif, Helvetica, Arial, sans-serif;
  margin:0;
  position: relative;
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
