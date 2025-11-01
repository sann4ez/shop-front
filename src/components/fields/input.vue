<script setup>
import { vMaska } from "maska";
import { useField } from "vee-validate";

const emit = defineEmits(["input:focus", "update:modelValue"]);

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
  classInp: {
    type: String,
    default: "",
  },
  mask: {
    type: String,
    default: "",
  },
  label:{
    type:String,
    default:"",
  }
});
const name = toRef(props, "name");
let optionsMask = ref({
  mask: props.mask,
});

function handleFocus(e) {
  props.mask && !props.modelValue
    ? (e.target.value = props.mask.replace(/[^+0-9]/gm, ""))
    : false;
  emit("input:focus");
}
function handleBlur(e) {
  e.target.value = props.modelValue;
  emit("input:blur");
}

function handleInput(e) {
  emit("update:modelValue", e.target.value);
}
const {
  value: inputValue,
  errorMessage,
  // handleBlur,
  errors,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});
</script>

<template>
  <div
    class="input"
    :class="{ className, 'has-error': !meta.valid && errorMessage }"
  >
    <label
      v-if="label"
      :for="name"
      class="label"
      >{{ label }}</label
    >
    <div class="input__wrapper">
      <input
        :name="name"
        :id="name"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        v-maska:[optionsMask]
        :class="classInp"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div class="input__icon" v-if="iconName">
        <BaseIconSvg :icon-name="iconName" width="18rem" height="17rem" />
      </div>
    </div>
    <div v-if="errorMessage" class="errors">
      <p>
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.input {
  position: relative;
  .label{
    font-size: 16rem;
    color:$text-color-black;
  }
  &__wrapper {
    position: relative;
    margin-top: 10rem;
  }
  input {
    font-size: 20rem;
    transition: 0.3s;
    color:$text-color-black;
    width: 100%;
    padding: 20rem;
    background-color: transparent;
    border: 2px solid $bg-color-brown;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s,
      color 5000s ease-in-out 0s;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

</style>