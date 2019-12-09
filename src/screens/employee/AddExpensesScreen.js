import React from 'react'
import {View, Text, StyleSheet, ScrollView, AsyncStorage} from 'react-native'
import Category from '../../componentsExpenseForm/Category'
import ChargeCode from '../../componentsExpenseForm/ChargeCode'
import Justification from '../../componentsExpenseForm/Justification'
import TotalBeforeTax from '../../componentsExpenseForm/TotalBeforeTax'
import Tax from '../../componentsExpenseForm/Tax'
import DateRange from '../../componentsExpenseForm/DateRange'

export default class AddExpensesScreen extends React.Component{
    state = {
        stage: 1,
        category: null,
        code: null,
        date: null,
        justification: null,
        tax: null,
        total: null
    }

    changeStage = (number) => {
        this.setState({stage: number})
    }

    set1 = (input) => {
        this.setState({category: input})
    }

    set2 = (input) => {
        this.setState({code: input})
    }

    set3 = (input) => {
        this.setState({justification: input})
    }

    set4 = (input) => {
        this.setState({total: input})
    }

    set5 = (input) => {
        this.setState({tax: input})
    }

    set6 = (input) => {
        this.setState({date: input})
    }

    handleSubmit = () => {
        this.addExpense()
        this.updateUser()
    }

    addExpense = async () => {
        let token = await AsyncStorage.getItem('token')
        fetch(`http://localhost:3000/create-expense`, {
            method: "post",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                category: this.state.category,
                code: this.state.code,
                justification: this.state.justification,
                total_before_tax: this.state.total,
                tax: this.state.tax,
                date: this.state.date,
                status: 'Pending'
            })
        })
    }

    updateUser = async () => {
        let token = await AsyncStorage.getItem('token')
        fetch(`http://localhost:3000/add-pending`, {
            method: "patch",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
    
    componentDidUpdate() {
        if (this.state.stage === 7){
            this.handleSubmit()
        }
    }


    render(){
        let component1 = null
        let component2 = null
        let component3 = null
        let component4 = null
        let component5 = null
        let component6 = null
        if (this.state.stage === 1){
            component1 = <Category changeStage={this.changeStage} set={this.set1}/>
        } else if (this.state.stage === 2){
            component2 = <ChargeCode changeStage={this.changeStage} set={this.set2}/>
        } else if (this.state.stage === 3){
            component3 = <Justification changeStage={this.changeStage} set={this.set3}/>
        } else if (this.state.stage === 4){
            component4 = <TotalBeforeTax changeStage={this.changeStage} set={this.set4}/>
        } else if (this.state.stage === 5){
            component5 = <Tax changeStage={this.changeStage} set={this.set5}/>
        } else if (this.state.stage === 6){
            component6 = <DateRange changeStage={this.changeStage} set={this.set6}/>
        }
        return(
            <View style={styles.page}>
                <ScrollView>
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>Category</Text>
                    </View>
                    {component1}
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>Charge Code</Text>
                    </View>
                    {component2}
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>Justification</Text>
                    </View>
                    {component3}
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>Total Before Tax</Text>
                    </View>
                    {component4}
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>Tax</Text>
                    </View>
                    {component5}
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>Date Charged</Text>
                    </View>
                    {component6}
                </ScrollView>
            </View>
        )
    }
}

AddExpensesScreen.navigationOptions = ({navigation}) => {
    return{
       headerTitle: 'Add Expense',
    }
}

const styles = StyleSheet.create({
    page:{
        height: 725,
        backgroundColor: 'lightsteelblue'
    },
    blockView:{
        height: 50,
        marginHorizontal: '5%',
        backgroundColor: 'grey',
        justifyContent: 'center',
        marginVertical: 10
    },
    blockViewText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
})