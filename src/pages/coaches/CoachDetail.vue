<template>
<router-view></router-view>
  <div>
    Coach Deatil
    <router-link :to="{name: 'ContactCoach'}">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'CoachDetail',
  props: ['id']
}
</script>