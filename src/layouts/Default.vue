<template>
  <div class="layout">
    <header class="header">
      <g-link class="index" to="/">Samuel Olaegbe</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/about/">About</g-link>
        <a class="nav__link" target="_blank" href="https://github.com/goodhands">Github</a>
        <a class="nav__link" target="_blank" href="https://twitter.com/devloader">Twitter</a>
        <a class="nav__link" target="_blank" href="https://linkedin.com/in/olaegbe-samuel">LinkedIn</a>
      </nav>
    </header>
    <slot/>
    <center>
      <p class="home-links">
        Thanks for stopping by, you rock 🤩
      </p>
    </center>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
