<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>refresh</button>
      <router-link :to="{name: 'CoachRegistration'}">register as coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{coach.firstName}}
      </li>
    </ul>
    <h3 v-else>No coaches...</h3>
  </section>
</template>

<script>
export default {
  name: 'CoachList',
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  }
}
</script>