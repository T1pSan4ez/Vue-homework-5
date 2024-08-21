<template>
  <div>
    <input type="text" v-model="inputText" placeholder="Class name" />

    <div :class="inputText" class="box">
      This box changes its class dynamically
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    };
  }
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid  black;
  text-align: center;
}

.red {
  background-color: red;
  color: white;
}

.green {
  background-color: green;
  color: white;
}

.blue {
  background-color: blue;
  color: white;
}
</style>