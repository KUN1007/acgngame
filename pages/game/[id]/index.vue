<script setup lang="ts">
import type { GameDetailResponseData } from '~/types/game'

const route = useRoute()
const id = computed(() => {
  return parseInt((route.params as { id: string }).id)
})

const { data } = useFetch<GameDetailResponseData>(
  `https://gameapi.yukinoshita.tech/game/id/${id.value}`,
  {
    method: 'GET'
  }
)

const game = computed(() => data.value?.data)
</script>

<template>
  <div class="root">
    <GameTitle v-if="game" :game="game" />

    <div class="intro">
      <h2>游戏介绍</h2>
      <div v-html="game?.intro"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100dvh - 75px);
  max-width: 64rem;
  margin: 0 auto;
}

.intro {
  line-height: 1.5rem;

  :deep(h2) {
    margin-bottom: 2rem;

    &::before {
      content: '#';
      color: var(--gw-deep-color);
      margin-right: 1rem;
    }
  }

  :deep(p) {
    margin: 1rem 0;
  }

  :deep(img) {
    max-width: 100%;
  }
}
</style>
