import React from 'react'
import {View, TextInput,Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

export default class ChargeCode extends React.Component{
    state={
        code: null
    }

    changeStage = () => {
        if (this.state.code !== null){
            this.props.set(this.state.code)
            this.props.changeStage(3)
        }
    }

    render(){
        return(
            <View style={styles.view}>
                <TextInput 
                    placeholder='Charge Code'
                    onChangeText={newTerm => this.setState({code: newTerm})}
                    style={styles.input}
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