import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class UserPreviewForList extends React.Component{
    render(){
        return(
            <View style={styles.component}>
                <Text style={styles.text}>{this.props.user.username}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: '5%',
        marginTop: '5%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: '5%'
    }
})