import React, { useRef, useState } from 'react'

enum Operadores {
    Sumar, Restar, Multiplicar, Dividir
}



export const useCalculadora = () => {
    const [operacion, setOperacion] = useState('')
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    // que no renederice el componente cada vez que cambia el valor.
    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        console.log("numero: " + numero)
        console.log("numeroTexto: " + numeroTexto)
        
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

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }


    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.Dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.Multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.Restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.Sumar;
    }

    const calcular = () => {

        const num2 = Number(numero);
        const num1 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.Sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.Restar:
                setNumero(`${num1 - num2}`)
                break;
            case Operadores.Multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.Dividir:
                setNumero(`${num1 / num2}`)
                break;
        }
    }

    return {
        // Variables
        numero,
        numeroAnterior,

        // funciones
        limpiar,
        borrarNumero,
        positivoNegativo,
        armarNumero,

        // fn Aritmeticas
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,

    }


}
