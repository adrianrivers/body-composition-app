<script>
  export let bodyCompositionData;


  const formaHumanReadableDate = date =>  date.slice(0, 10).replace(/-/g, '.').split('.').reverse().join('.');
  
  const getHumanReadableDate = date => date.length > 10 ? formaHumanReadableDate(date) : date;
</script>

<style>
  table {
    border-collapse: collapse
  }

  thead {
    line-height: 3rem;
    font-weight: bold;
  }
  
  th {
    background: rgba(0, 0, 0, 0.1);
  }

  td, th {
    border: 1px solid #000;
    padding: 1rem;
    text-align: center;
  }
</style>

<table>
  <thead>Body Composition</thead>
  <tr>
    <th>Date</th>
    <th>Body Fat</th>
    <th>Fat Mass</th>
    <th>Lean Mass</th>
    <th>Body Weight</th>
  </tr>
  {#each bodyCompositionData as entry}
    <tr>
      <td>{getHumanReadableDate(entry.date)}</td>
      <td>{entry.bodyFatPercentage}%</td>
      <td>{entry.fatMass}kg</td>
      <td>{entry.leanMass}kg</td>
      <td>{entry.weight}kg</td>
    </tr>
  {/each}
</table>
