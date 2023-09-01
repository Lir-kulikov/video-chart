<script setup lang="ts">
import { ref } from 'vue';


const emit = defineEmits<{
  (e: 'onVideoReady', duration: number): void
}>()

const videoElement = ref<HTMLVideoElement>();

const onMetaDataLoaded = (e: Event) => {
  const element = e.target as HTMLVideoElement;
  emit('onVideoReady', Math.ceil(element.duration) + 1)
}

const setVideoTime = (time: number) => {
  if (!videoElement.value) return
  videoElement.value.currentTime = time
}

defineExpose({
  setVideoTime
})

</script>

<template>
  <video ref="videoElement" @loadedmetadata="onMetaDataLoaded" class="video" controls src="./../assets/Rick-Rolled.mp4" />
</template>

<style scoped>
.video {
  aspect-ratio: 16/9;
  width: 600px;
  max-width: 100%;
}
</style>
