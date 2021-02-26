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
body {
  margin: 0;
}
</style>