<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="toLink" :class="mode"><slot></slot></router-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    link: {
      type: Boolean,
      default: false
    },
    toLink: {
      type: Object,
      default: function () {
        return { name: 'Home' }
      }
    },
    mode: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';
button,
a {
  text-decoration: none;
  padding: 0.1rem 1rem;
  font: inherit;
  background-color: $base-dark-color;
  border: 1px solid $base-dark-color;
  color: $base-yellow-color;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: $sec-light-color;
}

.outline {
  background-color: transparent;
  border-color: $base-dark-color;
  color: $base-dark-color;
}

.outline:hover,
.outline:active {
  background-color: $base-dark-color;
  color: $base-yellow-color;
}
</style>