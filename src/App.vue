<template>
  <div id="app">
    <Navbar />
    <div id="container" class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import '@/assets/css/pattern_layout.css'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
