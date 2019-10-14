import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import CodeInput from 'react-native-confirmation-code-input';
import images from "../Images/image";

class Verification extends React.Component {
    _onFinishCheckingCode1 = () => {

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
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
                <View style={{height: heightPercentageToDP("12")}}>
                    <CodeInput
                        ref="codeInputRef2"
                        // compareWithCode='AsDW2'
                        activeColor="white"
                        inactiveColor='rgba(R: 93 G: 97 B: 100)'
                        autoFocus={false}
                        ignoreCase={true}
                        inputPosition='center'
                        size={50}
                        onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                        containerStyle={{marginTop: 30}}
                        codeInputStyle={{
                            borderWidth: 1,
                            borderColor: "#5C5D61",
                            borderRadius: 5,
                            keyboardType : "phone-pad",
                            width: widthPercentageToDP("12"),
                            marginLeft: widthPercentageToDP("3")
                        }}
                    />
                </View>

                <TouchableOpacity style={{
                    color: 'white',
                    marginTop: heightPercentageToDP("4"),
                    height: heightPercentageToDP("6"),
                    width: widthPercentageToDP(80),
                    borderRadius: 10,
                    backgroundColor: '#00B1F0',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{color: 'white'}}> Verify</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Verification;