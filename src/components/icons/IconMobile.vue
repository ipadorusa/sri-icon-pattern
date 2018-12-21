<template>
    <div>
        <div class="icon-box" v-for="(icon, index) in icons" :key="icon.name">
            <div class="ico" :class="`${icons[index].name} ${icons[index].size}`"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IconMobile',
  data() {
  	return {
      icons: [
        {'name': 'search', 'size': 'icoSizeXL'},
        {'name': 'magnify', 'size': 'icoSizeXL'},
        {'name': 'minify', 'size': 'icoSizeXL'},
        {'name': 'close', 'size': 'icoSizeXL'}
      ]
    }
  }
}
</script>

<style>

</style>
