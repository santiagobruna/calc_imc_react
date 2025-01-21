import { useState } from "react";
import Formulario from "./components/Formulario";
import Infos from "./components/Infos";
import styles from './main.module.scss';

function App() {
  const [heigth, setHeigth] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState("");
  const [classification, setClassification] = useState("");
  const [classificationClass, setClassificationClass] = useState("");

  const handleHeigthValue = (e) => {
    const newValueA = e.target.value.replace(',', '.');
    setHeigth(newValueA);
  };
  const handleWeigthValue = (e) => {
    const newValueB = e.target.value.replace(',', '.');
    setWeight(newValueB);
  };
  const calcImc = () => {
    if (heigth && weight) { // Se os valores forem válidos
      const heigthEmMetros = parseFloat(heigth); // Garantir que é um número
      const weightNumber = parseFloat(weight); // Garantir que é um número

      // Verifica se os valores são válidos (não NaN)
      if (!isNaN(heigthEmMetros) && !isNaN(weightNumber)) {
        const imcCalculado = weightNumber / (heigthEmMetros * heigthEmMetros);
        setImc(imcCalculado.toFixed(1)); // Armazena o IMC arredondado

        classificationImc(imcCalculado); // Classifica o IMC
      } else {
        alert("Por favor, insira valores válidos para altura e peso.");
      }
    }
  };
  const classificationImc = (imcCalculado) => {
    let classification = "";
    let classificationClass = ""; 
    if(imcCalculado < 18.5){
      classification = "Abaixo do Peso";
      classificationClass = "alert-warning";
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      classification = "Normal";
      classificationClass = "alert-success";
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      classification = "SobrePeso";
      classificationClass = "alert-info";
    } else {
      classification = "Obesidade";
      classificationClass = "alert-danger";
    }
    setClassification(classification);
    setClassificationClass(classificationClass); 
  }
  return (
    <div className={`${styles.container} container mt-5 p-5 rounded`} >
      <h1>Calcule o seu IMC com react...</h1>
      Bem-vindo ao nosso site! Aqui, você pode calcular o seu Índice de Massa Corporal (IMC) com facilidade, apenas informando sua altura e peso. Nosso objetivo é oferecer uma maneira simples e rápida para que você saiba mais sobre sua saúde e tome decisões informadas sobre seu bem-estar. Experimente agora e descubra sua classificação de IMC!
      <Formulario 
        heigthValue={handleHeigthValue} 
        weightValue={handleWeigthValue} 
        calcImc={calcImc}
      />
      
      {imc !== null  &&  (
        <div>
          <p className="text-dark">O seu IMC é de {imc}</p>
          <p className={`alert ${classificationClass}`}>De acordo com a Organização Mundial da Saúde, sua classificação é {classification}. Para atingir um valor de IMC normal, seu peso deve estar entre 50.4 e 67.8 kg</p>
        </div>
      )}
      <Infos/>
    </div>
  );
}

export default App;
