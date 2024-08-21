<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="end"
        color="deep-purple-accent-4"
    >
      <router-link to="/">
        <v-tab :value="1">Home</v-tab>
      </router-link>
      <div @click="routeTo">
        <v-tab :value="2">Base Routing</v-tab>
      </div>
      <router-link to="/NestedRoutes">
        <v-tab :value="3">Nested Routes</v-tab>
      </router-link>
      <router-link to="/Login">
        <v-tab :value="4">Login</v-tab>
      </router-link>
      <router-link to="/UserPage/2">
        <v-tab :value="5">User page</v-tab>
      </router-link>
      <router-link to="/admin">
        <v-tab :value="6">Admin page</v-tab>
      </router-link>
      <router-link to="/MainModel">
        <v-tab :value="7">V-model</v-tab>
      </router-link>
      <router-link to="/ParentCustomSelect">
        <v-tab :value="8">V-model CustomSelect</v-tab>
      </router-link>
    </v-tabs>
  </div>
    <router-view/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  components: {},
  data: () => ({
    tab: null,
  }),
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  methods: {
    routeTo() {
      this.$router.push({
        name: 'base',
        params: {
          id: 2,
        }
      })
    }
  }
})

</script>

<style scoped>

</style>
