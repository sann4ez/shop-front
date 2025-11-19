<script setup>
// props
const props = defineProps({
  max: {
    type: Number,
    default: 999,
  },
  value: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// emits
const emit = defineEmits(["update:modelValue"]);

// variables
const count = ref(props.max > 1 ? props.value : 1);
const btnId = useId();

// methods
const countDecrease = () => {
  if (count.value > 1) {
    count.value--;
  }

  emitNumber();
};

const countIncrease = () => {
  if (count.value < props.max) {
    count.value++;
  }

  emitNumber();
};

const handleInput = () => {
  // Видаляємо початкові нулі
  count.value = count.value.toString().replace(/^0+/, "") || 1;

  // Перевіряємо, щоб значення не виходило за межі допустимих
  if (count.value < 1) {
    count.value = 1;
  }

  if (count.value > props.max) {
    count.value = props.max;
  }

  emitNumber();
};

function emitNumber() {
  emit("update:modelValue", count.value);
}
</script>

<template>
  <div class="counter">
    <button
      class="counter__btn counter__btn--minus  decrease-btn"
      :class="{ disabled: +count <= 1 }"
      @click="countDecrease"
      :disabled="+count <= 1"
      aria-label="reduce quantity"
    >
    </button>
    <FieldsInput
      classInp="counter__input"
      type="number"
      v-model="count"
      @input="handleInput"
      :name="`product-counter-${btnId}`"
    />
    <button
      class="counter__btn counter__btn--plus increase-btn"
      :class="{ disabled: +count >= props.max }"
      @click="countIncrease"
      :disabled="+count >= props.max"
      aria-label="increase quantity"
    >
    </button>
  </div>
</template>

<style lang="scss">
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-shrink: 0;
  width: 124rem;
  height: 100%;
  height: 50rem;
  border: 2px solid $bg-color-brown;
  padding: 10rem 16rem;
  .input__wrapper{
    margin-top: 0;
  }
  .input input {
    pointer-events: none;
    padding: 0;
    border: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 10rem;
    font-weight: 400;
    font-size: 18rem;
    &.disabled {
      pointer-events: none;
    }
  }
}

input.counter__input {
  font-weight: 500;
  font-size: 16rem;
  text-align: center;
  line-height: 1.4;
  width: 59rem;
  padding: 0;
  background-color: transparent;
  border: none;

  &:disabled {
    background-color: transparent;
  }
}

.decrease-btn {
  padding: 10rem 0rem;
}

.increase-btn {
  padding: 10rem 0;
}

.decrease-btn::before {
  content: "−"; /* знак мінуса */
  font-size: 20rem;
  color: $bg-color-brown;
}

/* Плюс */
.increase-btn::before {
  content: "+"; /* знак плюса */
  font-size: 20rem;
  color: $bg-color-brown;
}




</style>
