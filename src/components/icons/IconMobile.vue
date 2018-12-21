<template>
    <div>
        <div class="icon-box" v-for="(icon, index) in icons" :key="icon.name">
            <div class="icon" :class="`${icons[index].name} ${icons[index].size}`"></div>
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
        {'name': 'close', 'size': 'icoSizeXL'},
        {'name': 'arrow-left', 'size': 'icoSizeXL'},
        {'name': 'arrow-right', 'size': 'icoSizeXL'},
        {'name': 'arrow-up', 'size': 'icoSizeXL'},
        {'name': 'arrow-down', 'size': 'icoSizeXL'},
        {'name': 'plus', 'size': 'icoSizeXL'},
        {'name': 'minus', 'size': 'icoSizeXL'},
        {'name': 'check', 'size': 'icoSizeXL'},
        {'name': 'remove', 'size': 'icoSizeXL'}

      ]
    }
  }
}
</script>

<style>

</style>
