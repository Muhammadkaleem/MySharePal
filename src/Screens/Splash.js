import React from 'react';
import {View, Text, Image} from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import images from "../Images/image";

class Splash extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("onBoarding")
        }, 2000)
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#3D4142',
                height: heightPercentageToDP("100"),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <Image source={images.Icon}
                       style={{height: heightPercentageToDP("8"), width: widthPercentageToDP("23")}}/>
                       <Text style={{fontWeight:'bold', fontSize: 34, marginLeft: widthPercentageToDP("1"), color:'white'}}>MySharePal</Text>
            </View>
        )
    }
}

export default Splash;