import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import images from "../Images/image";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View
                style={{
                    height: heightPercentageToDP("9"),
                    width: widthPercentageToDP("100"),
                    borderBottomWidth: 1,
                    borderColor: '#ddd',
                    flexDirection: "row",
                    backgroundColor:"white"
                }}
            >
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{
                    width: widthPercentageToDP("20"),
                    height: heightPercentageToDP("9"),
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={this.props.icon}
                           style={{height: heightPercentageToDP("4"), width: widthPercentageToDP("7")}}/>
                </TouchableOpacity>
                <Text style={{
                    alignSelf: "center",
                    fontWeight: 'bold',
                    fontSize: 22,
                    marginLeft: heightPercentageToDP(" 3")
                }}>{this.props.text}</Text>
            </View>
        )
    }
}

export {Header};