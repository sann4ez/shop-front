<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  iconWidth: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "id",
  },
  colorLight: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [String, Boolean, Number],
    default: null,
  },
  modelValue: {
    type: [String, Boolean, Number],
    default: null,
  },
});

function changeValue(e) {
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <label class="radio" :class="{ light: colorLight }">
    <input
      type="radio"
      @change="changeValue"
      :name="name"
      :value="value"
      :checked="value == modelValue"
    />
    <div class="radio__check">
      <div class="radio__check-circle"></div>
    </div>
    {{ label }}
  </label>
</template>
<style lang="scss">
.radio {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10rem;
  font-size: 16rem;
  font-weight: 500;
  font-style: normal;
  line-height: 100%;
  color: $bg-color-brown;
  input {
    display: none;
  }
  input:checked + .radio__check {
    border: 1px solid $bg-color-brown;
    .radio__check-circle {
      opacity: 1;
    }
  }
  &__check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24rem;
    height: 24rem;
    flex-shrink: 0;
    border: 1px solid $bg-color-brown;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    &-circle {
      width: 16rem;
      height: 16rem;
      border-radius: 50%;
      background-color: $bg-color-brown;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }
}
</style>
