<template>
  <div id="app">
    <router-link to='/'>yearMobile</router-link>&nbsp;&nbsp;
    <router-link to='/year-web'>yearWeb</router-link>&nbsp;&nbsp;
    <router-link to='/quarter-mobile'>quarterMobile</router-link>&nbsp;&nbsp;
    <router-link to='/quarter-web'>quarterWeb</router-link>&nbsp;&nbsp;
    <router-link to='/month-mobile'>monthMobile</router-link>&nbsp;&nbsp;
    <router-link to='/month-web'>monthWeb</router-link>&nbsp;&nbsp;
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
</style>
