<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ selectedCoach.hourlyRate }}/hour</h3>
      </base-card>
    </section>

    <section>
      <base-card>
        <header>
          <h3>Interested? Reach it out now!</h3>
          <base-button
            link
            :toLink="{ name: 'ContactCoach', params: { id: selectedCoach.id } }"
            >Contact</base-button
          >
        </header>
        <router-view></router-view>
      </base-card>
    </section>

    <section>
      <base-card>
        <base-badge
          v-for="area in selectedCoach.areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ selectedCoach.description }}</p></base-card
      >
    </section>
  </div>
</template>

<script>
export default {
  name: 'CoachDetail',
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      selectedCoach: null
    }
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    )
  }
}
</script>