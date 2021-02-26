<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from '@/components/UI/TheHeader'
export default {
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Truculenta:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Truculenta', sans-serif;
}

body {
  margin: 0;
}
</style>