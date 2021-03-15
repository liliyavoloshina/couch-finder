<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <CoachForm @save-data="registerCoach" />
    </base-card>
  </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm'
export default {
  name: 'CoachRegistration',
  components: { CoachForm },
  methods: {
    registerCoach(formData) {
      this.$store.dispatch('coaches/addCoach', formData)
      this.$router.replace({ name: 'Home' })
    }
  }
}
</script>