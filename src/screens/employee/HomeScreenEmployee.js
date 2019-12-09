import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation'

class HomeScreenEmployee extends React.Component{
    render(){
        return(
            <View style={styles.screen}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ExpensesEmployee')} style={styles.view}>
                    <View>
                        <Text style={styles.text}>Expense History</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddExpenses')} style={styles.view}>
                    <View>
                        <Text style={styles.text}>Add Expense</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddManager')} style={styles.view}>
                    <View>
                        <Text style={styles.text}>Manager</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

HomeScreenEmployee.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Home',
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

export default withNavigation(HomeScreenEmployee)