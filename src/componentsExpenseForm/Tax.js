import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native'

export default class Tax extends React.Component{
    state = {
        tax: null
    }

    changeStage = () => {
        if (this.state.tax !== null){
            this.props.set(this.state.tax)
            this.props.changeStage(6)
        }
    }
    render(){
        return(
            <View style={styles.view}>
                <TextInput 
                    placeholder='Tax'
                    onChangeText={newTerm => this.setState({tax: newTerm})}
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