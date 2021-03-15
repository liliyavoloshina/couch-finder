<template>
  <form @submit.prevent="submitForm">
    {{ isFormValid }}
    <div class="form-control" :class="{ invalid: !formData.firstName.isValid }">
      <label for="firstname">Firstname:</label>
      <input
        v-model.trim="formData.firstName.val"
        @input="validateInput('firstName')"
        type="text"
        id="firstname"
        name="firstname"
      />
      <p v-if="!formData.firstName.isValid" class="error-message">
        First name is required!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !formData.lastName.isValid }">
      <label for="lastname">Lastname:</label>
      <input
        v-model.trim="formData.lastName.val"
        @input="validateInput('lastName')"
        type="text"
        id="lastname"
        name="lastname"
      />
      <p v-if="!formData.lastName.isValid" class="error-message">
        Last name is required!
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !formData.description.isValid }"
    >
      <label for="description">Description:</label>
      <textarea
        v-model.trim="formData.description.val"
        @input="validateInput('description')"
        name="description"
        id="description"
        rows="5"
      ></textarea>
      <p v-if="!formData.description.isValid" class="error-message">
        Description is required!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !formData.rate.isValid }">
      <label for="rate">Hourly Rate:</label>
      <input
        v-model.number="formData.rate.val"
        @input="validateInput('rate')"
        type="number"
        id="rate"
        name="rate"
      />
      <p v-if="!formData.rate.isValid" class="error-message">
        Hourly Rate is required!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !formData.areas.isValid }">
      <h3>Areas of Development:</h3>
      <div>
        <input
          v-model="formData.areas.val"
          @change="validateInput('areas')"
          type="checkbox"
          name="frontend"
          id="frontend"
          value="frontend"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          v-model="formData.areas.val"
          @change="validateInput('areas')"
          type="checkbox"
          name="backend"
          id="backend"
          value="backend"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          v-model="formData.areas.val"
          @change="validateInput('areas')"
          type="checkbox"
          name="career"
          id="career"
          value="career"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!formData.areas.isValid" class="error-message">
        Areas of Development is required!
      </p>
    </div>
    <p v-if="!isFormValid" class="error-message">Please fix above errors!</p>
    <base-button :disabled="isFormValid">Register</base-button>
  </form>
</template>

<script>
export default {
  name: 'CoachForm',
  emits: ['save-data'],
  data() {
    return {
      formData: {
        firstName: {
          val: '',
          isValid: true
        },
        lastName: {
          val: '',
          isValid: true
        },
        description: {
          val: '',
          isValid: true
        },
        rate: {
          val: null,
          isValid: true
        },
        areas: {
          val: [],
          isValid: true
        }
      }
    }
  },
  computed: {
    isFormValid() {
      const data = this.formData
      let isValid = false
      for (let key in data) {
        if (!data[key].isValid) {
          isValid = false
          return
        } else {
          isValid = true
        }
      }
      return isValid
    }
  },
  methods: {
    validateInput(inputName) {
      const data = this.formData
      if (
        data[inputName].val === '' ||
        data[inputName].val < 0 ||
        !data[inputName].val ||
        data[inputName].val.length == 0
      ) {
        data[inputName].isValid = false
      } else {
        data[inputName].isValid = true
      }
    },
    validateForm() {
      const data = this.formData
      for (let key in data) {
        if (
          data[key].val === '' ||
          data[key].val < 0 ||
          !data[key].val ||
          data[key].val.length == 0
        ) {
          data[key].isValid = false
        }
      }
    },
    submitForm() {
      this.validateForm()
      if (this.isFormValid) {
        const sendingData = {
          firstName: this.formData.firstName.val,
          lastName: this.formData.lastName.val,
          description: this.formData.description.val,
          rate: this.formData.rate.val,
          areas: this.formData.areas.val
        }

        this.$emit('save-data', sendingData)
      }
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
  padding: 0.5rem;
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

.error-message {
  margin-top: 5px;
  color: red;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>