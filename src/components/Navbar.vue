<template>
  <div id="header" class="header">
    <div class="logo"><router-link to="/">SRI UI PATTERNS </router-link></div>
    <nav id="nav" class="nav">
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .header {position:relative;width:100%;height:60px;padding:0 20px;line-height:60px;background:#1b1c1d;box-sizing:border-box}
  .header .logo {display:inline-block;}
  .header .logo a {font-size:25px;line-height:60px;font-weight:bold;color:#fff;}
  .nav {position: absolute;right:20px;top:0;font-size:25px}
  .nav a {color:#fff;font-weight: bold}
</style>