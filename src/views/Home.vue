<template>
  <div id="wrap_icon" class="wrap_icon open">
    <h2 class="title">CSS ICON</h2>
    <Iconlist />
    <Codelist />
  </div>
</template>

<script>
import Iconlist from '@/components/Iconlist.vue'
import Codelist from '@/components/Codelist.vue'

export default {
  name: 'home',
  components: {
    Iconlist,
    Codelist
  }
}
</script>
<style>
  .wrap_icon {max-width:1320px;margin:0 auto;position: relative;height: 100vh;overflow: hidden;}
  .wrap_icon:after {content: "";display: block;clear: both;}
  .wrap_icon.open .iconlist {width: 63.25757576%;}
  .wrap_icon .title {margin-top:30px}
  .iconlist {width:100%;height: 100%;float:left;box-sizing: border-box;padding:30px 0}
  .codelist {width: 36.74242424%;height: 100%;float:right;box-sizing: border-box;padding:30px 0}
</style>
