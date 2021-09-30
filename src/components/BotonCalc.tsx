import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    texto: string;
    color?: '#2d2d2d' | '#ff9427' | '#9b9b9b';
    ancho?: boolean;
    accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({ texto, color = '#2d2d2d', ancho = false, accion }: Props) => {

    return (
        <TouchableOpacity
            onPress={() => accion(texto)}
            activeOpacity={0.75}>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9b9b9b') ? 'black' : 'white'
                }}> {texto} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '400'
    }
});