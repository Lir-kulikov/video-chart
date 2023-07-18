<template>
  <Line ref="chartRef" class="chart" :data="data" :options="options" @click="onChartClick" />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  InteractionItem
} from 'chart.js'

import {
  ChartComponentRef,
  Line,
  getElementAtEvent,
} from 'vue-chartjs'

import { ref } from 'vue';
import { useChartConfig } from './useChartConfig';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const { duration } = defineProps<{ duration: number }>()

const emit = defineEmits<{
  (e: 'onPointClicked', time: number): void
}>()

const { options, data } = useChartConfig(duration)

const elementAtEvent = (element: InteractionItem[]) => {
  if (!element.length) return

  const { datasetIndex, index } = element[0]
  emit('onPointClicked', data.datasets[datasetIndex].data[index].x)
}

const chartRef = ref<ChartComponentRef>()

const onChartClick = (e: MouseEvent) => {
  const chart = chartRef.value?.chart

  if (!chart) return

  elementAtEvent(getElementAtEvent(chart, e))
}

</script>

<style scoped>
.chart {
  width: 600px;
  max-width: 100%;
}
</style>
