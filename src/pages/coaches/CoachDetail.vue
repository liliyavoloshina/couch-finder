<template>
<router-view></router-view>
  <div>
    Coach Deatil
    <base-button link :toLink="{name: 'ContactCoach'}">Contact</base-button>
  </div>
</template>

<script>
export default {
  name: 'CoachDetail',
  props: ['id']
}
</script>