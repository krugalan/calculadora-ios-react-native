import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0')
    }

    const armarNumero = (numeroTexto: string) => {
        // no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)

            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)

                //
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)

                //
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)

            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero !== '0') {
            if (numero.includes('-')) {
                setNumero(numero.replace('-', ''));
            } else {
                setNumero('-' + numero)
            }
        }
    }

    const borrarNumero = () => {
        
            let aux = numero;
        let negativo = '';

        if (numero.includes('-')) {
            negativo = '-';
            aux = numero.substr(1)
        }

        if (aux.length > 1) {
            setNumero(negativo + aux.slice(0, -1));
        } else {
            setNumero('0');
        }

    }


    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>


            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9b9b9b" accion={limpiar} />
                <BotonCalc texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
                <BotonCalc texto="del" color="#9b9b9b" accion={borrarNumero} />
                <BotonCalc texto="/" color="#ff9427" accion={limpiar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />

                <BotonCalc texto="x" color="#ff9427" accion={armarNumero} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />

                <BotonCalc texto="-" color="#ff9427" accion={limpiar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#ff9427" accion={limpiar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="0" ancho accion={armarNumero} />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#ff9427" accion={limpiar} />
            </View>






        </View>
    )
}

