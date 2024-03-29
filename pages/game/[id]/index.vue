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
  <div class="root" v-if="game">
    <GameTitle :game="game" />

    <GameIntroduction :intro="game.intro" />

    <GameDownload :links="game.download" />

    <div class="comment">
      <h2>游戏评论</h2>

      <GameComment :id="game.id" />
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

h2 {
  margin-bottom: 2rem;

  &::before {
    content: '#';
    color: var(--gw-deep-color);
    margin-right: 1rem;
  }
}
</style>
