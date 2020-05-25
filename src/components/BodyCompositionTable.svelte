<script>
  export let bodyFatPercentage;
  export let fatMass;
  export let leanMass;
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
  <tr>
    <td>25.05.2020</td>
    <td>{bodyFatPercentage}%</td>
    <td>{fatMass}kg</td>
    <td>{leanMass}kg</td>
    <td>{fatMass + leanMass}kg</td>
  </tr>
</table>
