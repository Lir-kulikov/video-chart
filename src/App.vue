<script setup lang="ts">
import { ref } from 'vue';
import ControlledVideo from './components/ControlledVideo.vue'
import VideoChart from './components/VideoChart'

const videoComponent = ref<InstanceType<typeof ControlledVideo>>()
const duration = ref<number | null>(null)

const setDuration = (value: number) => {
  duration.value = value
}

/*
  Была еще мысль сделать в App реактивную переменную time и обновлять ее как с видео так и с графика,
  но исходя из текста задачи вариант с defineExpose кажется более подходящим.
 */

function setVideoTime(time: number) {
if (videoComponent.value) videoComponent.value.setVideoTime(time);

}
</script>

<template>
  <ControlledVideo ref="videoComponent" @on-video-ready="setDuration" />
  <VideoChart v-if="duration" :duration="duration" @on-point-clicked="setVideoTime" />
</template>
