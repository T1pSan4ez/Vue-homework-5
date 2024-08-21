<template>
  <div>
    <h1>Registration Form</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input
            type="text"
            id="name"
            v-model="form.name"
            @input="validateName"
        />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div>
        <label for="email">Email:</label>
        <input
            type="email"
            id="email"
            v-model="form.email"
            @input="validateEmail"
        />
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div>
        <label for="password">Password:</label>
        <input
            type="password"
            id="password"
            v-model="form.password"
            @input="validatePassword"
        />
        <span v-if="errors.password">{{ errors.password }}</span>
      </div>
      <v-btn variant="outlined" type="submit" :disabled="isFormInvalid">
        Submit
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      errors: {
        name: null,
        email: null,
        password: null
      }
    }
  },
  methods: {
    validateName() {
      if (!this.form.name) {
        this.errors.name = 'Name is required.';
      } else if (this.form.name.length < 3) {
        this.errors.name = 'Name must be at least 3 characters long.';
      } else {
        this.errors.name = null;
      }
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) {
        this.errors.email = 'Email is required.';
      } else if (!emailPattern.test(this.form.email)) {
        this.errors.email = 'Invalid email address.';
      } else {
        this.errors.email = null;
      }
    },
    validatePassword() {
      if (!this.form.password) {
        this.errors.password = 'Password is required.';
      } else if (this.form.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters long.';
      } else {
        this.errors.password = null;
      }
    },
    submitForm() {
      this.validateName();
      this.validateEmail();
      this.validatePassword();

      if (!this.isFormInvalid) {
        alert('Form submitted successfully!');
      }
    }
  },
  computed: {
    isFormInvalid() {
      return (
          !this.form.name || !this.form.email || !this.form.password
          || this.errors.name || this.errors.email || this.errors.password
      );
    }
  }
}
</script>


<style scoped>
span {
  color: red;
}
</style>