
import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar, SafeAreaView, FlatList, ScrollView, TextInput
} from 'react-native';
// import { TextInput } from "react-native-gesture-handler";
import { ConstantVariables } from "./component/Conts_Variabale";
import gstyle from './component/Style';
import Profile from '../assets/Profile.svg';
import ColorOverlay from '../assets/ColorOverlay.svg';
import Arrow from '../assets/Arrow.svg';

const { width, height } = Dimensions.get('screen');


export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.orderview}>
                        <Text style={styles.heading}>Order</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.mainView}>
                        <View style={styles.productView}>
                            <Text>2 Products</Text>
                            {/* <Text>Total: Rs100</Text> */}
                        </View>

                        <View style={styles.listView}>
                            <View style={styles.iconView}>
                                <Profile width={60} height={60} />
                            </View>
                            <View style={styles.detailsView}>

                                <View style={styles.contentView}>

                                    <Text style={styles.diamondText}>Diamond Exclusive Ornament</Text>
                                    <Text style={styles.diamondText}>Exclusive Ornament</Text>

                                    <View style={styles.priceView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.priceText}>Price:Rs</Text>
                                            <Text style={styles.priceAmountText}> 55.00</Text>
                                        </View>
                                        <Text style={styles.quantityText}>Quantity: 1</Text>
                                    </View>
                                    <View style={styles.priceView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.priceText}>Date: </Text>
                                            <Text style={styles.priceAmountText}>24th jul 2021</Text>
                                        </View>
                                        {/* <Text style={styles.quantityText}>Quantity: 1</Text> */}
                                    </View>

                                    <View style={styles.priceView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.priceText}>Status: </Text>
                                            <Text style={styles.priceAmountText}>Approved</Text>
                                        </View>
                                        
                                    </View>
 
                                </View>

                                <View style={styles.crossView}>
                                    <TouchableOpacity>
                                        <Profile width={20} height={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                           


                        <View style={styles.listView}>
                            <View style={styles.iconView}>
                                <Profile width={60} height={60} />
                            </View>
                            <View style={styles.detailsView}>

                                <View style={styles.contentView}>

                                    <Text style={styles.diamondText}>Diamond Exclusive Ornament</Text>
                                    <Text style={styles.diamondText}>Exclusive Ornament</Text>

                                    <View style={styles.priceView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.priceText}>Price:Rs</Text>
                                            <Text style={styles.priceAmountText}> 55.00</Text>
                                        </View>
                                        <Text style={styles.quantityText}>Quantity: 1</Text>
                                    </View>
                                    <View style={styles.priceView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.priceText}>Date: </Text>
                                            <Text style={styles.priceAmountText}>24th jul 2021</Text>
                                        </View>
                                        {/* <Text style={styles.quantityText}>Quantity: 1</Text> */}
                                    </View>

                                    <View style={styles.priceView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.priceText}>Status: </Text>
                                            <Text style={styles.priceAmountText}>Approved</Text>
                                        </View>
                                        
                                    </View>
 
                                </View>

                                <View style={styles.crossView}>
                                    <TouchableOpacity>
                                        <Profile width={20} height={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                       


                       



                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...gstyle.container,
    },

    mainView: {
        padding: 20,
        width: "100%",
        marginTop: 1,
    },
    heading: {
        ...gstyle.heading,
    },

    orderview:{
     ...gstyle.center,
     marginTop:20,

    },

    productView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    listView: {
        width: '100%',
        borderWidth: 1,
        ...gstyle.borderColor,
        marginTop: 15,
        flexDirection: 'row',
    },

    iconView: {
        width: '30%',
        ...gstyle.center
    },

    detailsView: {
        width: '70%',
        flexDirection: 'row',
        paddingBottom: 10
    },

    priceView: {
        marginTop: 15,
        ...gstyle.center,
        flexDirection: 'row',
        justifyContent:'flex-start',
    },

    priceText: {
        ...gstyle.ordertext,
        ...gstyle.fontWeight,
        fontFamily: 'arial'
    },

    priceAmountText: {
        fontFamily: 'arial',
        ...gstyle.priceAmountText,
    },

    quantityText: {
        ...gstyle.ordertext,
        paddingLeft: 25,
        fontFamily: 'arial',
        ...gstyle.fontWeight,
    },

    wishText: {
        marginTop: 15,
        color: ConstantVariables.colors.golden,
    },

    contentView: {
        width: '85%',
        marginTop: 10,
    },

    line: {
        width: width,
        ...gstyle.borderColor,
        borderWidth: 1,
        marginTop: 10,
        ...gstyle.alignSelf,
    },

    diamondText: {
        fontFamily: 'arial',
        ...gstyle.fontWeight,
        ...gstyle.ordertext,
    },

    crossView: {
        width: '15%',
        alignItems: 'center',
        marginTop: 4,
    },

})
