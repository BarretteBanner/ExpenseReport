import React from 'react'
import {View, Text, AsyncStorage, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import UserPreview from '../../components/UserPreview'

export default class ExpensesForReviewScreen extends React.Component{
    state = {
        users: null
    }

    componentDidMount(){
        this.getUsers()
    }

    

    getUsers = async () => {
        let token = await AsyncStorage.getItem('token')
        fetch(`http://localhost:3000/users-for-manager`, {
            method: "get",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(users => this.setState({users: users}))
    }
    
    render(){
        //console.log(this.state.users)
        return(
            <View style={styles.screen}>
                <FlatList 
                    data={this.state.users}
                    keyExtractor={(user) => user.id.toString()}
                    renderItem={(user) => {
                        return <TouchableOpacity onPress={() => this.props.navigation.navigate('Approval', {user: user.item})}>
                            <UserPreview user={user.item} />
                        </TouchableOpacity>   
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: 725,
        backgroundColor: 'lightsteelblue'
    }
})