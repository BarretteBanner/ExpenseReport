import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

export default class Category extends React.Component{
    state = {
        extraInfo: null
    }

    handlePress = (choice) => {
        this.setState({extraInfo: choice})
        this.props.set(choice)
    }
    componentDidUpdate(){
        if (this.state.extraInfo !== null){
            this.props.changeStage(2)
        }
    }
    render(){
        return(
            <View style={styles.view}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box} onPress={() => this.handlePress('Hotel')}>
                        <View>
                            <Text style={styles.text}>Hotel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => this.handlePress('Meal')}>
                        <View>
                            <Text style={styles.text}>Meal</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box} onPress={() => this.handlePress('Telephone')}>
                        <View>
                            <Text style={styles.text}>Telephone</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => this.handlePress('Flight')}>
                        <View>
                            <Text style={styles.text}>Flight</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box} onPress={() => this.handlePress('Uber')}>
                        <View>
                            <Text style={styles.text}>Uber</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => this.handlePress('Parking')}>
                        <View>
                            <Text style={styles.text}>Parking</Text>
                        </View>
                    </TouchableOpacity>
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        height: '30%'
    },
    row: {
        flexDirection: 'row',
        height: '20%',
        //backgroundColor: 'green',
        marginHorizontal: '5%',
        marginBottom: '5%',
        justifyContent: 'space-between'
    },
    box: {
        width: '40%',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})