<script>
	import { onMount } from 'svelte';
  import Chart from 'chart.js';
  import { createChartOptions } from '../utils/chart-config.js';

  export let chartDateEntries;
  export let chartBfEntries;

  function renderChart(options) {
    const ctx = document.getElementById('chart');
    const chart = new Chart(ctx, options);
  }

  onMount(() => {
    const options = createChartOptions(chartDateEntries, chartBfEntries);

    renderChart(options);
  });
</script>

<div class="container">
  <canvas id="chart" width="3" height="1"></canvas>
</div>
