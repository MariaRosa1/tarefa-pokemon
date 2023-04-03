import React from "react";
import {
StyleSheet,
Text,
Dimensions,
TouchableHighlight
}from 'react-native'
const styles = StyleSheet.create({
    button:{
        fontSize: 20,
        height: Dimensions.get('window').width / 14,
        width: Dimensions.get('window').width / 4,
        padding: 0,
        marginBottom: 15,
        backgroundColor: '#d5d5d5',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#656565',
    
    },
    buttonDouble:{
        width: Dimensions.get('window').width / 2,
    },
    buttonTodo:{
        width: Dimensions.get('window').width / 1,
    },
    buttonSingleColor:{
        color: 'blue',
        backgroundColor: 'green',
    }
})
export default props => {
    const styleButton = [styles.button]
    if (props.double) styleButton.push(styles.buttonDouble)
    if (props.todo) styleButton.push(styles.buttonTodo)
    if (props.singleColor) styleButton.push(styles.buttonSingleColor)
        return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style ={styleButton}> {props.label} </Text>
        </TouchableHighlight>
        
    )
}