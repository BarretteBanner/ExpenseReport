import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ExpensePreview from '../../components/ExpensePreview'

export default class ApprovalScreen extends React.Component{
    state = {
        expenses: null,
        user: this.props.navigation.state.params.user
    }

    getExpenses =  () => {
        fetch(`http://localhost:3000/user-expenses-${this.state.user.id}`)
        .then(resp => resp.json())
        .then(expenses => this.setState({expenses: expenses}))
    }
    componentDidMount(){
        this.getExpenses()
    }

    refresh = () => {
        this.updateUser()
        this.getExpenses()
    }

    updateUser = () => {
        fetch(`http://localhost:3000/subtract-pending-${this.state.user.id}`)
    }
    render(){
        //console.log(this.state.expenses)
        return(
            <View style={styles.screen}>
                <FlatList 
                    data={this.state.expenses}
                    keyExtractor={(expense) => expense.id.toString()}
                    renderItem={(expense) => {
                        return <ExpensePreview expense={expense.item} refresh={this.refresh}/>
                    }}
                />
            </View>
        )
    }
}

ApprovalScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Approval',
    }
}

const styles =  StyleSheet.create({
    screen: {
        height: 725,
        backgroundColor: 'lightsteelblue'
    }
})