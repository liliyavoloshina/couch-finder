<template>
  <v-app>
    <Header />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/UI/TheHeader'
export default {
  components: {
    Header
  }
}
</script>