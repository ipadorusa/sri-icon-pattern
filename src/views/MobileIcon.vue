<template>
    <div id="wrap_icon" class="wrap_icon open">
        <div>
          <h2 class="title">CSS ICON</h2>
        </div>
        <Iconlist />
        <Codelist />
    </div>
</template>

<script>
import '@/assets/css/m_icon.css'
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