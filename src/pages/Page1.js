import React from "react";
import { View,Text,StyleSheet } from "react-native";
import globalStyles from "../styles/GlobalStyles";

export function Page1(){
    return(
        <View style={globalStyles.container}>
            <Text style={styles.texto}>
                Cursos técnicos integrados são cursos cujo candidato aprovado cursará, juntamente com o ensino médio, o curso técnico escolhido.
            </Text>
        </View>
    )   
}


const styles = StyleSheet.create({
    texto:{
        color: '#FFFFFF',
        fontSize: 18,
        padding: 20,
        textAlign: "center",    
    }
});