<template>
  <div>
    <base-dialog :show="!!error" :title="'Error'" @close="handleErrorDialog">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <CoachFilter @change-filter="setFilters" />
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >refresh</base-button
          >
          <base-button
            v-if="!isCoach && !isLoading"
            link
            :toLink="{ name: 'CoachRegistration' }"
            >register as coach</base-button
          >
        </div>
        <base-spinner v-if="isLoading" />
        <ul v-else-if="hasCoaches">
          <CoachItem
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :coach="coach"
          />
        </ul>
        <h3 v-else>No coaches...</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem'
import CoachFilter from '@/components/coaches/CoachFilter'
export default {
  name: 'CoachList',
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      },
      isLoading: false,
      error: null
    }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches']
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }
        return false
      })
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches']
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach']
    }
  },
  created() {
    this.loadCoaches()
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh
        })
      } catch (e) {
        this.error = e.message || 'Something went wrong...'
      }
      this.isLoading = false
    },
    handleErrorDialog() {
      this.error = null
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