<template>
  <div>
    <h1>Select Component Example</h1>
    <CustomSelect :options="options" :model-value="selectedOption" @input="updateSelectedOption"/>
    <p>Selected Option: {{ selectedOption }}</p>
  </div>
</template>

<script>
import CustomSelect from "@/components/V_model/SelectModel/CustomSelect.vue";

export default {
  name: 'ParentComponent',
  components: {
    CustomSelect
  },
  data() {
    return {
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectedOption: 'Option 1'
    };
  },
  methods: {
    updateSelectedOption(value) {
      this.selectedOption = value;
    }
  }
}
</script>