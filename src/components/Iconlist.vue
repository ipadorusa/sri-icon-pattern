<template>
    <div id="iconlist" class="iconlist">
        <IconMobile />
    </div>
</template>

<script>
import IconMobile from '@/components/icons/IconMobile.vue'


export default {
  name: 'Iconlist',
  components: {
    IconMobile
  }
}
</script>

<style>
  .icon-box {
    display: inline-block;
    width: 75px;
    height: 75px;
    padding: 26px;
    box-sizing: border-box;
    border: solid 1px #ccc;
    border-radius: 0;
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: #fff;
    cursor: pointer;
    -webkit-transition: border-color 0.4s ease-out;
          transition: border-color 0.4s ease-out;
  }
</style>
