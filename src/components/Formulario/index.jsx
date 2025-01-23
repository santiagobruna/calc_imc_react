const Formulario = ({ heigthValue, weightValue, calcImc }) => {
  const handleKeyDown = (e) => {
    // Impede a digitação do ponto (.), vírgula (,) e sinal de negativo (-)
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
    }
  };
  return (
    <>
      <form className="mb-3">
        <div className="form-group">
          <label htmlFor="height" className="form-label">
            Altura (cm):
          </label>
          <input
            className="form-control"
            id="height"
            type="number"
            placeholder="Informe a sua altura. Ex: 165"
            onChange={heigthValue}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight" className="form-label">
            Peso (kg):
          </label>
          <input
            className="form-control"
            id="weight"
            type="number"
            placeholder="Informe o seu peso. Ex: 62,5"
            onChange={weightValue}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button className="btn btn-dark mt-3" type="button" onClick={calcImc}>
          Calcular
        </button>
      </form>
    </>
  );
};

export default Formulario;
