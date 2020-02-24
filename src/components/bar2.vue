<template>
  <div>
    <h3>你好啊</h3>
    <template id="cc">
      <div>???</div>
    </template>
    <wode>????</wode>
  </div>
</template>
<script>
export default {
  components: {
    "wode": {
      template: "#cc"
    }
  }
};
</script>
<style lang="less">
</style>