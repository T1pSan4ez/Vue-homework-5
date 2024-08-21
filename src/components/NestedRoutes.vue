<template>
  <div>
    <p>Nested Routes</p>
    <div>
      <router-link to='/NestedRoutes/child1'>To child1</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedRoutes',

}
</script>


<style scoped>

</style>