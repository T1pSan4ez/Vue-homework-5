<template>
  <div>
    <div>
      <v-btn variant="outlined" @click="loginAsAdmin">
        Login as Admin
      </v-btn>
    </div>
    <div>
      <v-btn variant="outlined" @click="loginAsUser">
        Login as User
      </v-btn>
    </div>
  </div>
</template>

<script>
import {auth} from "@/auth.js";

export default {
  name: 'LoginComponent',
  methods: {
    loginAsAdmin() {
      auth.loginAsAdmin();
      this.$router.push('/admin');
    },
    loginAsUser() {
      auth.loginAsUser();
      this.$router.push('/UserPage/123');
    }
  }
}
</script>

<style scoped>

</style>