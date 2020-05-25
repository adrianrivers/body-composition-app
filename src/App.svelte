<script>
	import { onMount } from 'svelte';
	import { data } from '../data/data.js';
	import { transformData } from './utils/transform-data.js'
	import BodyCompositionTable from './components/BodyCompositionTable.svelte';

	let bodyCompositionData = transformData(data);
</script>

<main>
	<BodyCompositionTable bodyCompositionData={bodyCompositionData} />
</main>

<style>
</style>
