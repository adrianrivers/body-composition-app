<script>
	import { data, legacyData } from '../data';
	import { transformData, formatDataForChart } from './utils/transform-data.js'
	import BodyCompositionTable from './components/BodyCompositionTable.svelte';
	import BodyCompositionChart from './components/BodyCompositionChart.svelte';

	let bodyCompositionData = transformData(data, legacyData);
	let { chartDateEntries, chartBfEntries  } = formatDataForChart(bodyCompositionData);
</script>

<main>
	<BodyCompositionChart 
		chartDateEntries={chartDateEntries} 
		chartBfEntries={chartBfEntries} 
	/>
	<BodyCompositionTable 
		bodyCompositionData={bodyCompositionData} 
	/>
</main>

<style>
	main {
		margin: 3em;
		max-width: 1400px;
		margin: 0 auto;
	}
</style>
