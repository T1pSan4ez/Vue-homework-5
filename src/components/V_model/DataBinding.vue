<template>
  <div>
    <h1>DataBinding Form</h1>
    <form>
      <div>
        <label for="textInput">Text Input:</label>
        <input type="text" id="textInput" v-model="formData.text" />
      </div>
      <div>
        <label for="numberInput">Number Input:</label>
        <input type="number" id="numberInput" v-model="formData.number" />
      </div>
      <div>
        <label for="checkboxInput">Checkbox Input:</label>
        <input type="checkbox" id="checkboxInput" v-model="formData.checked" />
      </div>
    </form>
    <div>
      <h2>Form Data</h2>
      <p>Text: {{ formData.text }}</p>
      <p>Number: {{ formData.number }}</p>
      <p>Checked: {{ formData.checked }}</p>
      <div class="btns-div">
        <v-btn @click="changeText">
          Change Text
        </v-btn>
        <v-btn @click="changeNumber">
          Change Number
        </v-btn>
        <v-btn @click="toggleCheckbox">
          Toggle Checkbox
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        text: 'Hello, Vue!',
        number: 34,
        checked: true
      }
    };
  },
  methods: {
    changeText() {
      this.formData.text = 'DataBinding text!';
    },
    changeNumber() {
      this.formData.number = this.formData.number + 1;
    },
    toggleCheckbox() {
      this.formData.checked = !this.formData.checked;
    }
  }
}
</script>

<style scoped>
form div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 120px;
}

.btns-div {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
}
</style>