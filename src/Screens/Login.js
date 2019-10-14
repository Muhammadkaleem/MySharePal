import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import images from "../Images/image";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            buttonText: false
        }
    }

    onTouchInput=()=>{
        this.setState({buttonText: true})
    }
    buttonText=()=>{
        if (this.state.buttonText){
            return(<Text>Next</Text>)
        }else {
            return <Text>Login</Text>
        }
    }
    render() {
        return (
            <View style={{
                backgroundColor: '#3D4142',
                height: heightPercentageToDP("100"),
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: heightPercentageToDP("7"),
                    width: widthPercentageToDP("100"),
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Image source={images.arrowBack}

                               style={{
                                   tintColor: 'white',
                                   height: heightPercentageToDP("4"),
                                   width: widthPercentageToDP("7"),
                                   marginLeft: widthPercentageToDP("3")
                               }}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft: widthPercentageToDP("27"), color: "white"}}>MySharePal</Text>
                </View>

                <Image source={images.Icon}
                       style={{
                           height: heightPercentageToDP("12"),
                           width: widthPercentageToDP("35"),
                           marginTop: heightPercentageToDP("15")
                       }}/>
                <TextInput
                    onTouchStart={this.onTouchInput}
                    style={{
                        textInputColor: "white",
                        textAlign: 'center',
                        placeholderTextColor: 'white',
                        backgroundColor: '#5C5D61',
                        borderWidth: 1,
                        marginTop: heightPercentageToDP("4"),
                        height: heightPercentageToDP("7"),
                        width: widthPercentageToDP(80),
                        paddingLeft: 10,
                        color: 'white',
                        borderRadius: 10,
                        borderColor: "#807b7a",
                        keyboardType: "phone-pad"
                    }}
                    placeholder={"10-Digit Phone Number"}
                />
                <TouchableOpacity

                    style={{
                        color: 'white',
                        marginTop: heightPercentageToDP("4"),
                        height: heightPercentageToDP("6"),
                        width: widthPercentageToDP(80),
                        borderRadius: 10,
                        backgroundColor: '#00B1F0',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => this.props.navigation.navigate("Verification")}>
                    <Text style={{color: 'white'}}> {this.buttonText()}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;