<script>
  export let bodyCompositionData;

  const formaHumanReadableDate = date =>  date.slice(0, 10).replace(/-/g, '.').split('.').reverse().join('.');
  const getHumanReadableDate = date => date.length > 10 ? formaHumanReadableDate(date) : date;
</script>

<style>
  .container {
    padding-left: 3.1em;
  }

  table {
    border-collapse: collapse
  }

  h2 {
    line-height: 3rem;
    font-weight: bold;
    color: #3498db;
  }
  
  th {
    background: #ecf0f1;
    color: #3498db;
  }

  td, th {
    border: 1px solid #ecf0f1;
    padding: 1rem;
    text-align: center;
  }
</style>

<div class="container">
  <h2>Body Composition 🏋️‍♂️</h2>
  <table>
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
</div>
