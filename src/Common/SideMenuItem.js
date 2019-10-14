import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export class SideMenuItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <TouchableOpacity style={styles.menuItem} onPress={()=> this.props.navigation.navigate(this.props.screenName)}>
                <View style={{ width: 40}}>{this.props.icon}</View>
                <Text style={styles.menuItemText}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 25,
        marginEnd: 25,
        paddingTop: 8,
        paddingBottom: 6,
        borderBottomWidth: 0.5,
    },
    menuItemText: {
        flex: 1,
        color: "black",
        fontSize: 18,
        fontWeight: "300",
        margin: 0,
        paddingLeft: 0
    },
    icon: {
        width: 25,
        height: 25,
        margin: 16,
        marginLeft: 0
    }
});