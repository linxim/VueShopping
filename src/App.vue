<template>
  <div id="app">

    <Head></Head>
    <router-view/>
  
  

  
  </div>
</template>

<script>
import Head from './components/Head'


export default {
  name: 'App',
  components:{
    Head
    // NavBottom
  },
}

</script>

<style scoped>
  @import './assets/css/index.css'
</style>
