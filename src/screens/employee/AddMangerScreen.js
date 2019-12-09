import React from 'react'
import {View, Text, TextInput, StyleSheet, Button, AsyncStorage} from 'react-native'

export default class AddManagerScreen extends React.Component{
    state =  {
        code: null
    }

    handleSubmit = async () => {
        let token = await AsyncStorage.getItem('token')
        fetch(`http://localhost:3000/add-manager`, {
            method: "patch",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                manager_id: this.state.code
            })
        })
    }

    render(){
        return(
            <View style={styles.view}>
                <TextInput 
                    placeholder='Manager code'
                    onChangeText={newTerm => this.setState({code: newTerm})}
                    style={styles.input}
                    multiline
                    maxLength={150}
                />
                <View style={styles.button}>
                    <Button 
                        title='Next'
                        onPress={() => this.handleSubmit()}
                    />
                </View>
            </View>
        )
    }
}

AddManagerScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Add/Change Manager',
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