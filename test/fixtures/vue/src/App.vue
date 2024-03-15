<template>
  <div>Test</div>
</template>

<script lang="ts">
  import type { Test } from '@/types'
  export default({
    name: 'Test',
    props: {
      test: {
        type: Object as () => Test,
        default: {} as Test
      },
      test2: Number // correct because require-default-prop: off 
    }
  })
</script>

<style scoped>
div {
  width: 100%;
}
</style>