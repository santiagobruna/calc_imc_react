const Formulario = () => {
    return (
        <>
            <h1>Calcule o seu IMC com react...</h1>
            <form>
                <label htmlFor="height">Altura:  
                    <input id="height" type="number" placeholder="Informe a sua altura" />
                </label>
                <label htmlFor="weight">Peso:  
                    <input id="weight" type="number" placeholder="Informe a sua altura" />
                </label>
            </form>
        </>
    );
}

export default Formulario;