<template>
  <div>
    <label>{{ label }}</label>
    <input
        type="text"
        :value="modelValue"
        @input="updateValue"
        class="text-input"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomModel',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Input:'
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update-text', event.target.value);
    }
  }
}
</script>

<style scoped>
.text-input {
  border: 1px solid black;
}
</style>