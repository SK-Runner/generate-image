<template>
  <div id="app">
    <p>选择：</p>
    <router-link class="btn" to='/'>生成微信电子会员卡</router-link>&nbsp;&nbsp;
    <router-link class="btn" to='/postcard'>生成邮件电子会员卡</router-link>&nbsp;&nbsp;
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  width: 130px;
  height: 25px;
  background-color: #1547fb;
  border-radius: 10px;
  line-height: 25px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  display: inline-block;
  cursor: pointer;
  margin: 7.5px 0;
  text-decoration: none;
}
</style>
