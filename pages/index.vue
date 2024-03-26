<script setup lang="ts">
import type { Slide } from '~/types/slide'

const slide: Slide[] = [
  {
    image: '/test-image/1.png',
    alt: 'image1'
  },
  {
    image: '/test-image/2.png',
    alt: 'image2'
  },
  {
    image: '/test-image/3.png',
    alt: 'image3'
  }
]
</script>

<template>
  <div class="root">
    <HomeCarousel
      class="carousel"
      :slides="slide"
      :auto-scroll="true"
      :interval="2000"
    />
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

.carousel {
  margin-top: 1rem;
}
</style>
