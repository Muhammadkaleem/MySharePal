import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import images from "../Images/image";

class onBoarding extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {1: 1}, {1: 1}, {1: 1}, {1: 1}, {1: 1},
            ]
        }
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#3D4142',
                height: heightPercentageToDP("100"),
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: heightPercentageToDP("7"),
                    width: widthPercentageToDP("100"),
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={images.menu}

                               style={{
                                   tintColor: 'white',
                                   height: heightPercentageToDP("4"),
                                   width: widthPercentageToDP("7"),
                                   marginLeft: widthPercentageToDP("3")
                               }}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft: widthPercentageToDP("27"), color: "white"}}>MySharePal</Text>
                </View>

                <FlatList
                    style={{
                        width: widthPercentageToDP("100"),
                        marginTop: heightPercentageToDP("4")
                    }}
                    renderItem={this.renderItem} data={this.state.data} horizontal={true}/>
                <TouchableOpacity
                    style={{
                        color: 'white',
                        height: heightPercentageToDP("8"),
                        width: widthPercentageToDP(80),
                        borderRadius: 5,
                        backgroundColor: '#00B1F0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginBottom: heightPercentageToDP("7")
                    }} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{color: 'white'}}> Get Started</Text>
                </TouchableOpacity>

            </View>
        )
    }

    renderItem = () => {
        return (
            <View style={{marginLeft: widthPercentageToDP("5"), flex: 1}}>
                <View style={{
                    height: heightPercentageToDP("70"),
                    width: widthPercentageToDP("80"),
                    backgroundColor: 'red'
                }}>
                    <View
                        style={{height: heightPercentageToDP("35"), backgroundColor: '#21201f', alignItems: 'center'}}>
                        <Image source={images.Icon}
                               style={{
                                   height: heightPercentageToDP("12"),
                                   width: widthPercentageToDP("35"),
                                   marginTop: heightPercentageToDP("15")
                               }}/>
                    </View>
                    <View style={{height: heightPercentageToDP("35"), backgroundColor: 'white'}}>
                        <Text style={{fontSize: 22, alignSelf: 'center', marginTop: heightPercentageToDP("2")}}>WELCOME
                            TO </Text>
                        <Text style={{fontSize: 22, alignSelf: 'center'}}>MYSHAREPAL</Text>
                        <Text style={{fontSize: 12, padding: 10}}>This website stores cookies on your computer. These
                            cookies are used to collect information about how you interact with our website and allow us
                            to remember you. We use this information in order to improve and cus</Text>
                    </View>

                </View>
            </View>
        )
    }
}

export default onBoarding;