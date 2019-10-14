import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";

class ProductCard extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <ImageBackground style={styles.productImageStyle}>
                    <View style={styles.timeViewStyle}>
                        <Text style={{color: 'tomato'}}>40 min</Text>
                    </View>
                </ImageBackground>
                <View style={styles.detailViewStyle}>
                    <Text style={styles.productTitleText}>{this.props.title}</Text>
                    <Text style={styles.textItemStyle}>$$$, {this.props.productMetrial}</Text>
                    <Text style={styles.priceTextStyle}>Rs.
                        {this.props.price} minimum | Rs. {this.props.deliveryCharges} Delivery fee</Text>
                </View>
            </View>
        )
    }

}

export {ProductCard};
const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: 'white',
        elevation: 1,
        height: heightPercentageToDP("37"),
        width: widthPercentageToDP("100"),
        alignItems: 'center'
    },
    productImageStyle: {
        backgroundColor: "yellow",
        width: widthPercentageToDP("96"),
        height: heightPercentageToDP("25"),
        marginTop: heightPercentageToDP("1"),
    },
    timeViewStyle: {
        backgroundColor: "white",
        height: heightPercentageToDP("6"),
        width: widthPercentageToDP("20"),
        justifyContent: "center",
        alignItems: 'center'
    },
    detailViewStyle: {
        width: widthPercentageToDP("96"),
        height: heightPercentageToDP("10")
    },
    productTitleText: {
        marginLeft: heightPercentageToDP("1"),
        fontWeight: "bold", fontSize: 20
    },
    textItemStyle: {marginLeft: heightPercentageToDP("1"), fontSize: 12}, priceTextStyle: {
        marginLeft: heightPercentageToDP("1"),
        fontSize: 12,
        marginTop: heightPercentageToDP("1")
    }

})