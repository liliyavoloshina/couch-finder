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
button,
a {
  text-decoration: none;
  padding: 0.1rem 1rem;
  font: inherit;
  background-color: #462459;
  border: 1px solid #462459;
  color: #d9d875;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #382543;
  border-color: #382543;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #382543;
  color: #382543;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>