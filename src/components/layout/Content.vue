<template>
  <a-layout-content class="vab-content">
    <!--    <router-view v-slot="{ Component }">-->
    <!--      <transition mode="out-in" name="fade-transform">-->
    <!--        <component :is="Component"/>-->
    <!--      </transition>-->
    <!--    </router-view>-->
    <router-view></router-view>
  </a-layout-content>
</template>

<script>
  export default {
    name: 'Content'
  }
</script>

<style scoped>

</style>
