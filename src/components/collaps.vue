<script setup>
// emits
const emit = defineEmits(["toggle", "open"]);

//props
const props = defineProps({
  preOpen: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
});

//variables
const isOpen = props.preOpen ? ref(true) : ref(false);

function toggleCollapse() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    emit("open");
  }
  emit("toggle");
}

defineExpose({ isOpen, toggleCollapse });
</script>

<template>
  <div class="collaps" :class="[customClass, { open: isOpen }]">
    <div class="collaps__label" @click="toggleCollapse()">
      <div class="collaps__label-title">
        <slot name="label" />
      </div>
      <svg class="icon menu__filter-dropdown-icon">
        <use xlink:href="/images/sprite.svg#chevron-up" />
      </svg>
    </div>
    <div class="collaps__content" :class="{ active: isOpen }">
      <div class="collaps__content-wrapper">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.collaps {

  &.open{ 
    .icon{
      transform: rotate(0);
    }
  }
  &__label {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding-block: 10rem;
    .icon {
      transition: all .3s ease;
      transform: rotate(180deg);
    }
  }

  &__content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 500ms;
    &.active {
      grid-template-rows: 1fr;
    }
    &-wrapper {
      overflow: hidden;
    }
  }
}
</style>