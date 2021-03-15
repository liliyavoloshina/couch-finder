<template>
  <section>
    <base-dialog :show="!!error" :title="'Error'" @close="handleErrorDialog">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading" />
      <ul v-else-if="hasRequests">
        <RequestItem
          v-for="request in requests"
          :key="request.id"
          :request="request"
        />
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem.vue'
export default {
  name: 'RequestReceived',
  components: {
    RequestItem
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests']
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  },
  created() {
    this.loadRequests()
  },
  methods: {
    async loadRequests() {
      try {
        this.isLoading = true
        await this.$store.dispatch('requests/loadRequests')
      } catch (e) {
        this.isLoading = false
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>