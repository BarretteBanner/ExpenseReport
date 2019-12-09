import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class ExpensePreviewForList extends React.Component{
    render(){
        return(
            <View style={styles.component}>
                <View style={styles.view1}>
                    <Text style={styles.text}>Date</Text>
                    <Text style={styles.text}>Category</Text>
                    <Text style={styles.text}>Code</Text>
                    <Text style={styles.text}>Sub-Total</Text>
                    <Text style={styles.text}>Tax</Text>
                    <Text style={styles.text}>Total</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text}>{this.props.expense.date}</Text>
                    <Text style={styles.text}>{this.props.expense.category}</Text>
                    <Text style={styles.text}>{this.props.expense.code}</Text>
                    <Text style={styles.text}>{this.props.expense.total_before_tax}</Text>
                    <Text style={styles.text}>{this.props.expense.tax}</Text>
                    <Text style={styles.text}>{this.props.expense.total_before_tax + this.props.expense.tax}</Text>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.button}>{this.props.expense.status}</Text>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    component: {
        height: 150,
        backgroundColor: 'white',
        //justifyContent: 'center',
        marginHorizontal: '5%',
        marginVertical: '5%',
        flexDirection: 'row'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: '5%'
    },
    view1: {
        //backgroundColor: 'aqua',
        borderColor: 'grey',
        borderRightWidth: 1,
        flex: 3,
        marginBottom: '6%'
    },
    view2: {
        //backgroundColor: 'orange',
        borderColor: 'grey',
        borderRightWidth: 1,
        flex: 4,
        marginBottom: '6%'
    },
    view3: {
        flex: 3,    
        marginBottom: '11%',
        justifyContent: 'center'
    },
    approve: {
        backgroundColor: 'mediumaquamarine',
        flex: 1,
        justifyContent: 'center'
    },
    reject:{
        backgroundColor: 'lightcoral',
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        textAlign: 'center',
        fontSize: 18
    }
})