<template>
  <div>
    <h3>{{ pageTitle}}</h3>
    <p>{{ extraInfo }}</p>

    <p>User ID: {{ id }}</p>

    <v-btn variant="outlined" @click="logout">
      Logout
    </v-btn>
  </div>
</template>

<script>
import {auth} from "@/auth.js";

export default {
  name: 'UserPage',
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.push('/');
    }
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    },
    extraInfo() {
      return this.$route.meta.extraInfo;
    }
  }
}
</script>

<style scoped>

</style>