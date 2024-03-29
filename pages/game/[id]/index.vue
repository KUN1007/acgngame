<script setup lang="ts">
import type { GameDetailResponseData } from '~/types/game'

const route = useRoute()

const comment = ref('')

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

    <div class="publish">
      <h2>来说两句吧</h2>

      <ClientOnly>
        <textarea
          name="bio"
          placeholder="来说两句吧"
          rows="5"
          v-model="comment"
        >
        </textarea>
      </ClientOnly>

      <button>发布</button>
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

.publish {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  textarea {
    margin-bottom: 1rem;
    width: 100%;
    border: 1px solid var(--gw-deep-color);
    border-radius: 1rem;
    padding: 1rem;
    resize: none;

    &:focus {
      box-shadow: 0 0 0 2px var(--gw-deep-color);
      background-color: var(--gw-hover-color);
    }
  }

  button {
    margin-left: auto;
    width: 100px;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid var(--gw-deep-color);
    border-radius: 1rem;
    transition: all 0.2s;
    background-color: transparent;

    &:hover {
      background-color: var(--gw-deep-color);
      color: var(--gw-white);
    }

    &:active {
      transform: scale(0.9);
    }
  }
}
</style>
