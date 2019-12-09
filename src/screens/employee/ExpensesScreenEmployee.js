import React from 'react'
import {View, Text, StyleSheet, FlatList, AsyncStorage} from 'react-native'
import ExpensePreviewForList from '../../components/ExpensePreviewForList'

export default class ExpenseScreenEmployee extends React.Component{
    state = {
        expenses: null,
        //user: this.props.navigation.state.params.user
    }

    getExpenses = async () => {
        //console.log('hi')
        let token = await AsyncStorage.getItem('token')
        fetch(`http://localhost:3000/all-expenses`, {
            method: "get",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(expenses => this.setState({expenses: expenses}))
    }
    

    componentDidMount(){
        this.getExpenses()
    }
    render(){
        console.log(this.state.expenses)
        return(
            <View style={styles.screen}>
                
                <FlatList 
                    data={this.state.expenses}
                    keyExtractor={(expense) => expense.id.toString()}
                    renderItem={(expense) => {
                        return <ExpensePreviewForList expense={expense.item} />
                    }}
                />
            </View>
        )
    }
}

ExpenseScreenEmployee.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Expenses',
    }
}

const styles =  StyleSheet.create({
    screen: {
        height: 725,
        backgroundColor: 'lightsteelblue'
    }
})