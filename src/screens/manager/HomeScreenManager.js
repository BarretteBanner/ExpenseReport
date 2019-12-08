import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class HomeScreenManager extends React.Component{
    render(){
        return(
            <View style={styles.screen}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('ReviewExpenses')} style={styles.view}>
                    <View>
                        <Text style={styles.text}>Expense Approval</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ExpenseHistoryManager')} style={styles.view}>
                    <View>
                        <Text style={styles.text}>Expense History</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: 725,
        backgroundColor: 'lightsteelblue'
    },
    view:{
        height: '25%',
        backgroundColor: 'white',
        marginHorizontal: '10%',
        marginTop: '10%',
        justifyContent: 'center'
    },
    text:{
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})