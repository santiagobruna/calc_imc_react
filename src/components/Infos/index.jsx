const Infos = () => {
  return (
    <table className="table caption-top">
      <caption>Como Interpretar o resultado de IMC</caption>
      <thead>
        <tr>
          <th scope="col">IMC</th>
          <th scope="col">Classificação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Menor que 18,5</th>
          <td>Magreza</td>
        </tr>
        <tr>
          <th scope="row">18,5 a 24,9</th>
          <td>Normal</td>
        </tr>
        <tr>
          <th scope="row">25 a 29,9</th>
          <td>SobrePeso</td>
        </tr>
        <tr>
          <th scope="row">30 a 34,9</th>
          <td>Obesidade grau I </td>
        </tr>
        <tr>
          <th scope="row">35 a 39,9</th>
          <td>Obesidade grau II</td>
        </tr>
        <tr>
          <th scope="row">Maior que 40</th>
          <td>Obesidade grau III</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Infos;
