<template>
  <li>
    <div>
      <a :href="emailLink">
        {{ request.email }}
      </a>
    </div>
    <p>{{ request.message }}</p>
  </li>
</template>

<script>
export default {
  name: 'RequestItem',
  props: {
    request: {
      type: Object
    }
  },
  computed: {
    emailLink(){
      return `mailto: ${this.request.email}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: $base-dark-color;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: $sec-light-color;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>