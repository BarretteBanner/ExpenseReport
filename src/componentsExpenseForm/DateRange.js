import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native'

export default class DateRange extends React.Component{
    state = {
        date: null
    }

    changeStage = () => {
        if (this.state.date !== null){
            this.props.set(this.state.date)
            this.props.changeStage(7)
        }
    }
    render(){
        return(
            <View style={styles.view}>
                <TextInput 
                    placeholder='Charge Date'
                    onChangeText={newTerm => this.setState({date: newTerm})}
                    style={styles.input}
                    maxLength={50}
                />
                <View style={styles.button}>
                    <Button 
                        title='Next'
                        onPress={() => this.changeStage(7)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: 'lightsteelblue',
        marginHorizontal: '5%'     
    },
    input:{
        fontSize: 17,
        borderWidth: 1,
        borderColor: 'grey',
        //marginHorizontal: '5%',
        marginTop: '2.5%',
        backgroundColor: 'white'
    },
    button:{
        //backgroundColor: 'grey',
        //marginHorizontal: '5%',
        height: 30,
        justifyContent: 'center',
        //marginTop: 10,
        alignSelf: 'center',
        paddingHorizontal: 5
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})