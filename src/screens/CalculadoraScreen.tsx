import React from 'react'
import SplashScreen from 'react-native-splash-screen';


import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';
import { useEffect } from 'react';


export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        armarNumero,
        borrarNumero,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        limpiar,
        positivoNegativo,
    } = useCalculadora()


    useEffect(() => {
        SplashScreen.hide();
    }, [])



    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') &&
                <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
            }
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
                <BotonCalc texto="/" color="#ff9427" accion={btnDividir} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />

                <BotonCalc texto="x" color="#ff9427" accion={btnMultiplicar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />

                <BotonCalc texto="-" color="#ff9427" accion={btnRestar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#ff9427" accion={btnSumar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="0" ancho accion={armarNumero} />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#ff9427" accion={calcular} />
            </View>






        </View>
    )
}

