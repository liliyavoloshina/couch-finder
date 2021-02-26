<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>refresh</button>
      <router-link :to="{ name: 'CoachRegistration' }"
        >register as coach</router-link
      >
    </div>
    <ul v-if="hasCoaches">
      <CoachItem
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :coach="coach"
      />
    </ul>
    <h3 v-else>No coaches...</h3>
  </section>
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem'
export default {
  name: 'CoachList',
  components: { CoachItem },
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

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>