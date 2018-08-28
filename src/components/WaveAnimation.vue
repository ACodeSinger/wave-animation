<template>
    <div class="waveAnimation">
      <ul>
        <li v-for="n in 4" :key="n" @mouseenter="waveAnimation">
          <img src="../img/goddess.jpg" alt="">
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "WaveAnimation",
    data() {
      return {}
    },
    methods: {
      waveAnimation: function () {
        console.log(123)
      }
    }
  }
</script>

<style scoped lang="scss">
  .waveAnimation {
    ul {
      width: 1280px;
      height: 400px;
      display: flex;
      margin: 0 auto;
      margin-top: 20px;
      li {
        flex: 1;
        border: 1px solid #ccc;
        border-right: 0px;
        overflow: hidden;
        text-align: center;
        background: #e5e5e5;
        img {
          display: inline-block;
          margin-top: 200px;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;
        }
      }
      li:last-child {
        border-right: 1px solid #ccc;
      }
    }
  }
</style>
