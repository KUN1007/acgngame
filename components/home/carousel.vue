<script setup lang="ts">
import type { Slide } from '~/types/slide'

const props = defineProps<{
  slides: Slide[]
  autoScroll: boolean
  interval: number
}>()

const currentSlide = ref(0)
const slideWidth = 64

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + props.slides.length) % props.slides.length
}

onMounted(() => {
  if (props.autoScroll) {
    watchEffect((onInvalidate) => {
      const intervalId = setInterval(() => {
        nextSlide()
      }, props.interval)

      onInvalidate(() => {
        clearInterval(intervalId)
      })
    })
  }
})
</script>

<template>
  <div class="carousel">
    <div
      class="slides"
      :style="{ transform: `translateX(-${currentSlide * slideWidth}rem)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" :alt="slide.alt" />
      </div>
    </div>
    <button class="prev" @click="prevSlide">&#10094;</button>
    <button class="next" @click="nextSlide">&#10095;</button>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative;
  overflow: hidden;
  height: 10rem;

  .slides {
    display: flex;
    transition: transform 0.5s ease;

    div {
      width: 100%;
    }
  }

  .slide {
    flex-shrink: 0;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gw-deep-color);
    padding: 0.5rem 1rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    z-index: 1;
    font-size: large;

    &.prev {
      left: 0;
    }

    &.next {
      right: 0;
    }
  }
}
</style>
