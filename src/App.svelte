<script>
	import { onMount } from 'svelte';
	import { getBodyFatPercentage, getFatMass, getLeanMass } from './utils/calculations.js';
	import BodyCompositionTable from './components/BodyCompositionTable.svelte';

	let calulatedFigures = {}
	let measurements = {
		height: 178,
		weight: 87,
		neck: 42,
		waist: 94
	}
	let figures = {
		bodyFatPercentage: 0,
		fatMass: 0,
		leanMass: 0,
	}

	onMount(async () => {
		const { height, weight, neck, waist } = measurements;
		
		const bodyFatPercentage = getBodyFatPercentage(height, neck, waist);
		const fatMass = getFatMass(bodyFatPercentage, weight);
		const leanMass = getLeanMass(fatMass, weight);

		figures = {
			bodyFatPercentage,
			fatMass,
			leanMass
		}
	});
</script>

<main>
	<BodyCompositionTable 
		bodyFatPercentage={figures.bodyFatPercentage} 
		fatMass={figures.fatMass} 
		leanMass={figures.leanMass}
	/>

</main>

<style>
</style>
