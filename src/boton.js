import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const Boton = (props) => {
    const {texto, operacion} = props;
    return(
        <TouchableOpacity 
        style={styles.btn}
        onPress={operacion}
        >
            <Text style={styles.btnTexto}>{texto}</Text>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    btn:{
        height: 70,
        width: 70,
        backgroundColor: '#2a0845',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto:{
        fontSize: 36,
        color: '#fff'
    }
})

export default Boton;