import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';

import Boton from './boton';
import Entrada from './entrada';

const Calculadora = (props) =>{
    const{
        result,
        num1,
        handelChangeNum1,
        num2,
        handelChangeNum2,
        sumar,
        restar,
        multiplicar,
        dividir
    } = props;

    return(
        <SafeAreaView style={styles.contenedor}>
            <View style= {styles.resultado}>
                <Text style={styles.encabezado}>Resultado</Text>
                <Text style={styles.texto}>{result}</Text>
            </View>
            <View style= {styles.formulario}>
                <Entrada
                    placeholder='Número 1'
                    handelChangeNum={handelChangeNum1}
                    num={num1}>
                </Entrada>
                <Entrada
                    placeholder='Número 2'
                    handelChangeNum={handelChangeNum2}
                    num={num2}
                ></Entrada>
                <View style={styles.botones}>
                    <Boton texto={'+'} operacion={sumar}></Boton>
                    <Boton texto={'-'} operacion={restar}></Boton>
                    <Boton texto={'*'} operacion={multiplicar}></Boton>
                    <Boton texto={'/'} operacion={dividir}></Boton>

                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor: '#fff'
    },
    resultado:{
        height: '50%',
        backgroundColor: 'rgba(0,255,255,0.5)',
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botones:{
        flexDirection: 'row',
        justifyContent:'space-around',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    entrada:{
        marginTop: 20
    },
    formulario:{
        height: '40%',
        margin: 20
    },
    texto: {
        fontSize: 60
    },
    encabezado:{
        fontSize: 30
    }
})

export default Calculadora;