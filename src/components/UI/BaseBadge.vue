<template>
  <span class="badge" :class="type">
    {{text}}
  </span>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: {
    type: {
      type: String
    },
    title: {
      type: String
    }
  },
  computed: {
    text() {
      return this.title.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 10px;
  padding: .2rem .7rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>