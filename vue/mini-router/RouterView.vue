<template>
  <component :is="comp"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from './mini-router.js'

const router = useRouter()

// 如果 routes 列表里有 path 对应的 component 则传入 component 组件
const comp = computed(() => {
  const route = router.routes.find(route => route.path === router.current.value)

  return route ? route.component : null
})
</script>

<style lang="scss" scoped>
</style>
