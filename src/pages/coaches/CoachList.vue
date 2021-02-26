<template>
  <section>
    <base-card>
    Filters
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">refresh</base-button>
        <base-button link :toLink="{ name: 'CoachRegistration' }">register as coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :coach="coach"
        />
      </ul>
      <h3 v-else>No coaches...</h3>
    </base-card>
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