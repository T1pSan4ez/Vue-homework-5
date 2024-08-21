<template>
  <div>
    <v-btn @click="decrease">
      -
    </v-btn>
    <span>{{ modelValue }}</span>
    <v-btn @click="increase">
      +
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  props: {
    modelValue: {
      type: Number,
      required: true
    }
  },
  methods: {
    increase() {
      this.$emit('update:modelValue', this.modelValue + 1);
    },
    decrease() {
      this.$emit('update:modelValue', this.modelValue - 1);
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  width: 50px;
  text-align: center;
  font-size: 18px;
}
</style>