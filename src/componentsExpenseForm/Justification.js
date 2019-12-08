import React from 'react'
import {View, TextInput, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

export default class Justification extends React.Component{
    state = {
        justification: null
    }

    changeStage = () => {
        if (this.state.justification !== null){
            this.props.set(this.state.justification)
            this.props.changeStage(4)
        }
    }
    render(){
        return(
            <View style={styles.view}>
                <TextInput 
                    placeholder='Justification'
                    onChangeText={newTerm => this.setState({justification: newTerm})}
                    style={styles.input}
                    multiline
                    maxLength={150}
                />
                <View style={styles.button}>
                    <Button 
                        title='Next'
                        onPress={() => this.changeStage()}
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
        fontSize: 20,
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
    }
})