<template>
  <div>
    <h1>Admin Page</h1>
    <p>This page is accessible only to administrators.</p>

    <v-btn variant="outlined" @click="logout">
      Logout
    </v-btn>
  </div>
</template>

<script>
import {auth} from "@/auth.js";

export default {
  name: 'AdminPage',

  methods: {
    logout() {
      auth.logout();
      this.$router.push('/');
    }
  },
}
</script>
<style scoped>

</style>