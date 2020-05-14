import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Jobs extends Component {
    render() {
        return (
            <View>
                <Text> {this.props.data.nome} </Text>
                <Text> {this.props.data.cargo} </Text>
            </View>
        )
    }
}
