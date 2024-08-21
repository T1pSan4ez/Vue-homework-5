<template>
  <div class="main-div">
    <div>
      <CustomModel :model-value="textInput" @update-text="updateText"/>
      <p>Entered text: {{ textInput }}</p>
    </div>
    <hr>
    <div>
      <FormModel/>
    </div>
    <hr>
    <div>
      <DataBinding/>
    </div>
    <hr>
    <div>
      <CounterModel v-model="counterValue"/>
      <p>Current Counter Value: {{ counterValue }}</p>
    </div>
    <hr>
    <div>
      <ToggleComponent :model-value="toggleState" @update-toggle="updateToggle" />
      <p>Toggle is: {{ toggleState ? 'On' : 'Off' }}</p>
    </div>
    <hr>
    <div>
      <ClassModel/>
    </div>
  </div>
</template>

<script>
import CustomModel from "@/components/V_model/CustomModel.vue";
import FormModel from "@/components/V_model/FormModel.vue";
import DataBinding from "@/components/V_model/DataBinding.vue";
import CounterModel from "@/components/V_model/CounterModel.vue";
import ToggleComponent from "@/components/V_model/ToggleComponent.vue";
import ClassModel from "@/components/V_model/ClassModel.vue";

export default {
  name: 'ParentComponent',
  components: {
    CustomModel,
    FormModel,
    DataBinding,
    CounterModel,
    ToggleComponent,
    ClassModel
  },
  data() {
    return {
      textInput: '',
      counterValue: 0,
      toggleState:  false,
    }
  },
  methods: {
    updateToggle(value) {
      this.toggleState = value;
    },
    updateText(value) {
      this.textInput = value;
    }
  }
}
</script>

<style scoped>
.main-div {
  padding: 25px;
}

hr {
  margin-top: 25px;
  margin-bottom: 25px;
  width: 350px;
}
</style>