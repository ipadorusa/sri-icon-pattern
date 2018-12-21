<template>
  <div id="header" class="header">
    <div class="logo"><router-link to="/">SRI UI PATTERNS</router-link></div>
    <nav id="nav" class="nav">      
        <router-link to="/icon/pc/" class="link">Pc Icon</router-link>
        <router-link to="/icon/mobile/" class="link">Mobile Icon</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>