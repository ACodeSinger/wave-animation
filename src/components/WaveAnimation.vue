<template>
    <div class="waveAnimation">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "WaveAnimation",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .waveAnimation {
    ul {
      width: 1280px;
      height: 800px;
      display: flex;
      margin: 0 auto;
      margin-bottom: 0;
      li {
        flex: 1;
        background: #ccc;
        border-right: 1px solid #fff;
      }
    }
  }
</style>
