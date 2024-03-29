<script setup lang="ts">
import type { HomeGameResponseData } from '~/types/home'

const dayjs = useDayjs()

// TODO:
const { data } = await useFetch<HomeGameResponseData>(
  'https://gameapi.yukinoshita.tech/game/list/all?page=1',
  {
    method: 'GET'
  }
)
const gameData = computed(() => data.value?.data.data)
</script>

<template>
  <div class="game">
    <NuxtLink
      class="card"
      v-for="(game, index) in gameData"
      :key="index"
      :to="`/game/${game.id}`"
    >
      <div class="title">{{ game.title }}</div>
      <div class="post">
        <NuxtImg :src="game.image" />
      </div>

      <!-- TODO: Game introduction text, if necessary -->
      <div class="preview"></div>

      <HomeTags :tags="game.tags" />

      <div class="status">
        <span class="views">
          <Icon name="lucide:eye" />
          <span>{{ game.views }}</span>
        </span>
        <span class="time">{{ dayjs(game.time).format('YYYY/MM/DD') }}</span>
      </div>

      <div class="publisher">
        <div class="avatar">
          <NuxtImg width="30" height="30" :src="game.publisher.icon" />
          <div class="name">{{ game.publisher.username }}</div>
        </div>

        <div class="contribute">
          <span>已贡献</span>
          <span>{{ game.publisher.contribution }}</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.game {
  max-width: 64rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, minmax(20rem, 25rem));
  gap: 1rem;
}

.card {
  height: 100%;
  border: 2px solid var(--gw-border-color);
  color: var(--gw-font-color);
  padding: 1rem;

  .icon {
    color: var(--gw-deep-color);
    font-size: 20px;
    margin-right: 0.3rem;
  }

  &:hover {
    border: 2px solid var(--gw-main-color);
    background-color: var(--gw-hover-color);
  }

  .post {
    overflow: hidden;
    margin: 1rem 0;
    aspect-ratio: 16 / 9;
    display: flex;

    img {
      object-fit: cover;
      width: 100%;
    }
  }
}

.status {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .views {
    display: flex;
    align-items: center;
  }

  .time {
    font-size: small;
  }
}

.publisher {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .avatar {
    display: flex;
    align-items: center;

    img {
      margin-right: 0.3rem;
    }
  }

  .contribute {
    font-size: small;

    span {
      &:last-child {
        margin-left: 0.3rem;
      }
    }
  }
}
</style>
~/types/home
