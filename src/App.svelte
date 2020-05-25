<script>
	import { data, legacyData } from '../data';
	import { transformData, formatDataForChart } from './utils/transform-data.js'
	import BodyCompositionTable from './components/BodyCompositionTable.svelte';
	import BodyCompositionChart from './components/BodyCompositionChart.svelte';

	let bodyCompositionData = transformData(data, legacyData);
	let { chartDateEntries, chartBfEntries  } = formatDataForChart(bodyCompositionData);
</script>

<main>
	<BodyCompositionTable 
		bodyCompositionData={bodyCompositionData} 
	/>
	<BodyCompositionChart 
		chartDateEntries={chartDateEntries} 
		chartBfEntries={chartBfEntries} 
	/>
</main>

<style>
	main {
		margin: 0 auto;
		padding: 2em;
		max-width: 1400px;
	}

	:global(.container) {
		margin: 3em 0;
	}
</style>
