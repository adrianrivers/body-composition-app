<script>
	import { onMount } from 'svelte';
	import { data, legacyData } from '../data';
	import { transformData } from './utils/transform-data.js'
	import BodyCompositionTable from './components/BodyCompositionTable.svelte';

	let bodyCompositionData = transformData(data, legacyData);
</script>

<main>
	<BodyCompositionTable bodyCompositionData={bodyCompositionData} />
</main>

<style>
</style>
