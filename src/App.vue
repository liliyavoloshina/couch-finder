<template>
  <Header />
  <router-view v-slot="slotProp">
    <transition name="route" mode="out-in">
      <component :is="slotProp.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Header from '@/components/UI/TheHeader'
export default {
  components: {
    Header
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout
    }
  },
  created() {
    this.$store.dispatch('tryLogin')
  },
  watch: {
    didAutoLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace({ name: 'UserAuth' })
      }
    }
  }
}
</script>


<style lang="scss">
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
// start anim
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
// end anim
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>