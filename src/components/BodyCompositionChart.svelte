<script>
	import { onMount } from 'svelte';
  import Chart from 'chart.js';
  import { createChartOptions } from '../utils/chart-config.js';

  export let chartDateEntries;
  export let chartBfEntries;
  let options;

  function renderChart(options) {
    const ctx = document.getElementById('chart');
    const chart = new Chart(ctx, options);
  }

  onMount(() => {
    options = createChartOptions(chartDateEntries, chartBfEntries);

    renderChart(options);
  });
</script>

<style>
  .container {
    margin-top: 3em;
    margin-bottom: 3em;
  }
</style>

<div class="container">
  <canvas id="chart" width="3" height="1"></canvas>
</div>
