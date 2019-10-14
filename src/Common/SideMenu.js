import React, { Component } from "react";
import PropTypes, { FlatList, Image, Text, View } from "react-native";
import { SideMenuItem } from "./SideMenuItem";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import images from "../Images/image";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navigation = this.props.navigation;
        const MenuData = [
            {
                icon: (
                    <View style={{ height: heightPercentageToDP("25"), width: widthPercentageToDP("70")}}>
                        <Image
                            // source={require("../images/Brand.jpg")}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 50,
                                marginLeft: 20,
                                backgroundColor: 'red'
                            }}
                        />
                        <Text style={{marginLeft: heightPercentageToDP("4"), marginTop: heightPercentageToDP("2"), fontWeight: 'bold', fontSize: 18}}>Josh Buttler</Text>
                        <Text style={{marginLeft: heightPercentageToDP("4"), marginTop: heightPercentageToDP("1"), color: '#ddd'}}>JoshButtler766@</Text>
                    </View>
                )
            },
            {
                name: "Home",
                screenName: "Home",
                icon: (
                    <Image source={images.Home} style={{height: 20, width: 20, padding: 5}}/>
                ),
                key: 1
            },

            {
                name: "Profile",
                screenName: "Profile",
                icon: (
                    <Image source={images.profile} style={{height: 20, width: 20, padding: 5}}/>
                ),
                key: 2
            },
            {
                name: "My Cart",
                screenName: "Cart",
                icon: (
                    <Image source={images.Cart} style={{height: 20, width: 20, padding: 5}}/>
                ),
                key: 3
            },

            {
                name: "Panding Orders",
                screenName: "PendingOrder",
                icon: (
                    <Image source={images.pending} style={{height: 20, width: 20, padding: 5}}/>
                ),
                key: 4
            },
            {
                name: "History Order",
                screenName: "OrderHistory",
                icon: (
                    <Image source={images.Order} style={{height: 20, width: 20, padding: 5}}/>
                ),
                key: 5
            },
            {
                name: "Logout",
                screenName: "Cart",
                icon: (
                    <Image source={images.Logout} style={{height: 20, width: 20, padding: 5}}/>
                ),
                key: 6
            }
        ];

        return (
            <View style={{ height: "100%", width: "100%" }}>
                <FlatList
                    style={{ marginTop: 25, marginBottom: 25 }}
                    data={MenuData}
                    initialNumToRender={0}
                    renderItem={({ item }) => (
                        <SideMenuItem
                            navigation={navigation}
                            screenName={item.screenName}
                            icon={item.icon}
                            name={<Text>{item.name}</Text>}
                            key={item.key}
                        />
                    )}
                />
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default withNavigation(SideMenu);