<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email:</label>
        <input v-model.trim="email" type="email" id="email" />
      </div>
      <div class="form-control">
        <label for="password">Password:</label>
        <input v-model.trim="password" type="password" id="password" />
      </div>
      <p v-if="!isFormValid" class="error">Please enter a valid email and password (must be at least 6 characters long)!</p>
      <base-button>{{submitButtonCaption}}</base-button>
      <base-button type="button" mode="outline" @click="switchFormMode"
        >{{switchButtonCaption}}</base-button
      >
    </form>
  </base-card>
</template>

<script>
export default {
  name: 'UserAuth',
  data() {
    return {
      email: '',
      password: '',
      isFormValid: true,
      mode: 'login'
    }
  },
  computed: {
    submitButtonCaption() {
      return this.mode === 'login' ? 'Login' : 'Signup'
    },
    switchButtonCaption() {
      return this.mode === 'login' ? 'Login instead' : 'Signup instead'
    },
  },
  methods: {
    submitForm() {
      this.isFormValid = true
      if (
        this.email == '' ||
        !this.email.includes('@') ||
        this.password == '' ||
        this.password.length < 6
      ) {
        this.isFormValid = false
        return
      }
    },
    switchFormMode() {
      if (this.mode === 'signup') {
        this.mode = 'login'
      } else {
        this.mode = 'signup'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';
form {
  margin: 1rem;
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

.error {
  font-weight: bold;
  color: red;
  margin-top: 5px;
}
</style>