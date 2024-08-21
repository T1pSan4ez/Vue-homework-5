<template>
  <div @click="toggle" :class="{ 'toggle-on': modelValue, 'toggle-off': !modelValue }">
    <span>{{ modelValue ? 'On' : 'Off' }}</span>
  </div>
</template>

<script>
export default {
  name: 'ToggleComponent',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggle() {
      this.$emit('update-toggle', !this.modelValue);
    }
  }
}
</script>

<style scoped>
div {
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 25px;
  color: white;
}

.toggle-on {
  background-color: green;
}

.toggle-off {
  background-color: red;
}
</style>