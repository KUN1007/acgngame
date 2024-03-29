<script setup lang="ts">
import type { CommentResponseData } from '~/types/comment'

const dayjs = useDayjs()

const props = defineProps<{
  id: number
}>()
const page = ref(0)

const { data } = useFetch<CommentResponseData>(
  `https://gameapi.yukinoshita.tech/game/${props.id}/comments?page=1`,
  {
    method: 'GET'
  }
)

const comments = computed(() => data.value?.data.data)
</script>

<template>
  <div class="container" v-if="comments">
    <div class="comment" v-for="(comment, index) in comments" :key="index">
      <NuxtImg width="40" height="40" :src="comment.publisher?.icon" />

      <div class="content">
        <pre class="content">{{ comment.content }}</pre>

        <div class="info">
          <div class="time">
            <span>{{ comment.publisher.username }}</span>
            发布于
            <span>
              {{ dayjs(comment.timestamp).format('YYYY-MM-DD HH:mm:ss') }}
            </span>
          </div>

          <span class="reply">回复</span>
        </div>
      </div>
    </div>

    <div class="none" v-if="!comments.length">这里什么都没有。。。</div>
  </div>
</template>

<style lang="scss" scoped>
.comment {
  display: flex;
  margin-bottom: 2rem;

  img {
    margin-right: 1rem;
  }
}

.content {
  display: flex;
  flex-direction: column;

  pre {
    font-size: medium;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .info {
    font-size: small;
    display: flex;

    .time {
      margin-right: 1rem;
    }

    .reply {
      cursor: pointer;
      color: var(--gw-deep-color);
      font-weight: bold;

      &:hover {
        color: var(--gw-main-color);
      }
    }
  }
}

.none {
  color: var(--gw-deep-color);
  font-style: oblique;
  margin-bottom: 2rem;
}
</style>
