<template>
  <base-dialog :show="!!error" :title="'Error'" @close="handleErrorDialog">
    <p>{{ error }}</p>
  </base-dialog>
  <base-spinner v-if="isLoading" />
  <form v-else @submit.prevent="formSubmit">
    <div class="form-control">
      <label for="email">Your E-mail:</label>
      <input v-model.trim="email" type="text" id="email" />
    </div>
    <div class="form-control">
      <label for="message">Your Message:</label>
      <textarea
        v-model.trim="message"
        name="message"
        id="message"
        rows="5"
      ></textarea>
      <p v-if="!isFormValid" class="errors">
        Please type correct E-mail and non-empty message...
      </p>
    </div>
    <div class="actions">
      <base-button mode="outline">Send message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactCoach',
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      email: '',
      message: '',
      isFormValid: true,
      isLoading: false,
      error: null
    }
  },
  methods: {
    async formSubmit() {
      this.isFormValid = true
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.isFormValid = false
        return
      }
      const sendingData = {
        coachId: this.id,
        email: this.email,
        message: this.message
      }
      try {
        this.isLoading = true
        await this.$store.dispatch('requests/addRequest', sendingData)
      } catch (e) {
        this.isLoading = false
        this.error = e.message || 'Something went wrong...'
      }
      this.isLoading = false
      this.$router.replace({ name: 'Home' })
    },
    handleErrorDialog() {
      this.error = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.9rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 0.5rem;
}

input:focus,
textarea:focus {
  border-color: $base-dark-color;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
  margin-top: 5px;
}

.actions {
  text-align: center;
}
</style>