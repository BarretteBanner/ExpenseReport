import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ExpensePreviewForList from '../../components/ExpensePreviewForList'

export default class ExpenseScreenManager extends React.Component{
    state = {
        expenses: null,
        user: this.props.navigation.state.params.user
    }

    getExpenses =  () => {
        fetch(`http://localhost:3000/all-user-expenses-${this.state.user.id}`)
        .then(resp => resp.json())
        .then(expenses => this.setState({expenses: expenses}))
    }
    componentDidMount(){
        this.getExpenses()
    }
    render(){
        //console.log(this.state.expenses)
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

ExpenseScreenManager.navigationOptions = ({navigation}) => {
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