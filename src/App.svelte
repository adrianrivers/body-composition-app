<script>
	import { data, legacyData } from '../data';
	import { transformData } from './utils/transform-data.js'
	import BodyCompositionTable from './components/BodyCompositionTable.svelte';
	import BodyCompositionChart from './components/BodyCompositionChart.svelte';

	let bodyCompositionData = transformData(data, legacyData);
</script>

<main>
	<BodyCompositionChart bodyCompositionData={bodyCompositionData} />
	<BodyCompositionTable bodyCompositionData={bodyCompositionData} />
</main>

<style>
	main {
		margin: 3em;
		max-width: 1400px;
		margin: 0 auto;
	}
</style>
