<template>
  <base-card>
    <h2>Find your personal coach!</h2>
    <span class="filter-option">
      <input @change="changeFilters" type="checkbox" name="frontend" id="frontend" checked>
      <label for="frontend">Frontend</label>
    </span>

    <span class="filter-option">
      <input @change="changeFilters" type="checkbox" name="backend" id="backend" checked>
      <label for="backend">Backend</label>
    </span>

    <span class="filter-option">
      <input @change="changeFilters" type="checkbox" name="career" id="career" checked>
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  name: 'CoachFilter',
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      }
    }
  },
  methods: {
    changeFilters(event) {
      const filterId = event.target.id
      const isActive = event.target.checked
      const updatedFilters = {
        ...this.filters,
        [filterId]: isActive
      }
      this.filters = updatedFilters
      this.$emit('change-filter', updatedFilters)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>