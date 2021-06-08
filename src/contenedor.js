import React, {useState} from 'react';
import {Alert} from 'react-native';
import Calculadora from './calculadora';

const Contenedor = () => {
  const [result, setResult] = useState(0);
  const [num1, changeNum1] = useState(null);
  const [num2, changeNum2] = useState(null);

  const handelChangeNum1 = (value) => {
    changeNum1(value);
  }
  const handelChangeNum2 = (value) => {
    changeNum2(value);
  }

  const sumar = () => {
    setResult(parseInt(num1)+parseInt(num2));
  }

  const restar = () => {
    setResult(parseInt(num1)-parseInt(num2));
  }

  const multiplicar = () => {
    setResult(parseInt(num1)*parseInt(num2));
  }

  const dividir = () => {
    if(parseInt(num2)===0){
      Alert.alert('¡Cuidado!','Está tratando de dividir entre cero (0).')
    }
    else{
      setResult((parseInt(num1)/parseInt(num2)).toFixed(2));
    }
  }

  return(
    <Calculadora
      result={result}
      num1={num1}
      handelChangeNum1={handelChangeNum1}
      num2={num2}
      handelChangeNum2={handelChangeNum2}
      sumar={sumar}
      restar={restar}
      multiplicar={multiplicar}
      dividir={dividir}
    />
  );
}

export default Contenedor;