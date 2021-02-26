<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">Firstname:</label>
      <input
        v-model.trim="firstName"
        type="text"
        id="firstname"
        name="firstname"
      />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname:</label>
      <input
        v-model.trim="lastName"
        type="text"
        id="lastname"
        name="lastname"
      />
    </div>
    <div class="form-control">
      <label for="description">Description:</label>
      <textarea
        v-model.trim="description"
        name="description"
        id="description"
        rows="5"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate:</label>
      <input v-model.number="rate" type="number" id="rate" name="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Development:</h3>
      <div>
        <input
          v-model="areas"
          type="checkbox"
          name="frontend"
          id="frontend"
          value="frontend"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          v-model="areas"
          type="checkbox"
          name="backend"
          id="backend"
          value="backend"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          v-model="areas"
          type="checkbox"
          name="career"
          id="career"
          value="career"
        />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  name: 'CoachForm',
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: []
    }
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        areas: this.areas
      }

      this.$emit('save-data', formData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';
.form-control {
  margin: 0.9rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 1rem;
  font-size: 16px;
  padding: .5rem;
  font-family: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: $base-dark-color;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: $base-dark-color solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>