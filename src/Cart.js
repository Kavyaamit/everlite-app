
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


export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
    }


    count = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    count1 = () => {
        // console.log('>>>>>')
        if (this.state.count != 1) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }











    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.mainView}>
                        <View style={styles.productView}>
                            <Text style={styles.diamondText}>2 Products</Text>
                            <Text style={styles.diamondText}>Total: ₹100</Text>
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
                                            <Text style={styles.priceText}>Price: ₹</Text>
                                            <Text style={styles.priceAmountText}>55.00</Text>
                                        </View>
                                        <Text style={styles.quantityText}>Quantity:</Text>
                                        <View style={styles.Quantityview}>

                                            <TouchableOpacity
                                                onPress={this.count1}>
                                                <View>

                                                    <Text style={styles.minusetext}>-</Text>
                                                </View>
                                            </TouchableOpacity>


                                            <View>
                                                <View>
                                                    <Text style={styles.counttext}>{this.state.count}</Text>
                                                </View>
                                            </View>

                                            <TouchableOpacity onPress={this.count}>
                                                <View>
                                                    <Text style={styles.plusetext}>+</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>



                                    <View>
                                        <View>

                                        </View>


                                    </View>





                                    <Text style={styles.Deliverytext}>Delivery by 4 jul 2021</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.wishText}>MOVE TO WISHLIST</Text>
                                    </TouchableOpacity>
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
                                            <Text style={styles.priceText}>Price: ₹</Text>
                                            <Text style={styles.priceAmountText}>55.00</Text>
                                        </View>
                                        <Text style={styles.quantityText}>Quantity:</Text>

                                        <View style={styles.Quantityview}>

                                            <TouchableOpacity
                                                onPress={this.count1}>
                                                <View>

                                                    <Text style={styles.minusetext}>-</Text>
                                                </View>
                                            </TouchableOpacity>


                                            <View>
                                                <View>
                                                    <Text style={styles.counttext}>{this.state.count}</Text>
                                                </View>
                                            </View>

                                            <TouchableOpacity onPress={this.count}>
                                                <View>
                                                    <Text style={styles.plusetext}>+</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                    <Text style={styles.Deliverytext}>Delivery by 4 jul 2021</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.wishText}>MOVE TO WISHLIST</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.crossView}>
                                    <TouchableOpacity>
                                        <Profile width={20} height={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                        <View style={styles.couponView}>

                            <Text style={styles.applyText}>Apply Coupon</Text>
                            <View style={styles.textView}>
                                <TextInput
                                    placeholder={"Enter Your Coupon Code"}
                                    style={styles.inputText}
                                />
                                <View style={styles.couponView2}>
                                    <TouchableOpacity style={styles.touch}>
                                        <Text style={styles.couponText}>APPLY COUPON</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={styles.couponView1}>
                            <Text style={styles.applyText}>Cart Totals</Text>
                            <View style={styles.totalView}>

                                <View style={styles.amountView}>
                                    <Text style={styles.amounttexts}>Sub-Total</Text>
                                    <Text style={styles.Rstexts}>₹100.00</Text>
                                </View>
                                <View style={styles.amountView1}>
                                    <Text style={styles.amounttexts}>Eco-Tax(-2.00)</Text>
                                    <Text style={styles.Rstexts}>₹10.00</Text>
                                </View>
                                <View style={styles.amountView1}>
                                    <Text style={styles.amounttexts}>VAT(20%)</Text>
                                    <Text style={styles.Rstexts}>₹20.00</Text>
                                </View>
                                <View style={styles.amountView1}>
                                    <Text style={styles.amounttexts}>Total</Text>
                                    <Text style={styles.Rstexts}>₹120.00</Text>
                                </View>

                            </View>
                        </View>

                        <View style={styles.line} />

                        <View style={styles.checkOut}>
                            <TouchableOpacity 
                             onPress={() => this.props.navigation.navigate('ProductDetails')}
                            
                            style={styles.touchView}>
                                <Text style={styles.checkText}>CHECKOUT</Text>
                            </TouchableOpacity>

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
        marginTop: 30,
    },

    productView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    listView: {
        width: '100%',
        borderWidth: 1,
        // borderColor: '#EFEFEF',
        ...gstyle.borderColor,
        marginTop: 15,
        flexDirection: 'row',
    },

    iconView: {
        width: '30%',
        ...gstyle.center,
    },

    Deliverytext: {
        marginTop: 5,
        ...gstyle.textfont,
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
        justifyContent: 'flex-start',
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
    Quantityview: {
        flexDirection: 'row',
        marginLeft: 10,
        //    justifyContent:'space-between'
    },
    minusetext: {
        color: ConstantVariables.colors.golden,
        ...gstyle.alignSelf,
        fontSize: 25,
        marginRight: 5,



    },
    plusetext: {
        color: ConstantVariables.colors.golden,
        // ...gstyle.textfont, 
        fontSize: 20,
        marginTop: 3,
    },
    counttext: {
        fontSize: 12,
        marginTop: 9,
        marginRight: 5
    },



    wishText: {
        marginTop: 15,
        color: ConstantVariables.colors.golden,
        ...gstyle.textfont,
    },

    contentView: {
        width: '85%',
        marginTop: 10,
    },

    line: {
        width: width,
        ...gstyle.borderColor,
        borderWidth: 1,
        marginTop: 40,
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

    couponView: {
        width: "100%",
        marginTop: 30,
        ...gstyle.center,


    },
    couponView1: {
        width: "100%",
        marginTop: 30,
        alignItems: 'center',
    },

    applyText: {
        ...gstyle.textfont,
        ...gstyle.fontWeight,
        fontFamily: 'arial',
    },

    textView: {
        width: '100%',
        marginTop: 15,
        flexDirection: 'row',
        ...gstyle.center,
    },

    inputText: {

        ...gstyle.borderColor,
        borderWidth: 1,
        paddingVertical: 10,
        width: '60%',
        paddingLeft: 15
    },

    couponView2: {
        backgroundColor: ConstantVariables.colors.golden,
        height: 50,
        paddingVertical: 10,
        ...gstyle.center,

    },

    couponText: {
        color: ConstantVariables.colors.white,

        paddingHorizontal: 5,
        fontFamily: 'arial',

        ...gstyle.fontWeight,

        ...gstyle.center,


    },

    totalView: {
        width: '90%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        ...gstyle.borderColor,
        marginTop: 20,
        ...gstyle.alignSelf,
    },

    amountView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amounttexts: {
        ...gstyle.textfont,
    },
    Rstexts: {
        ...gstyle.fontWeight,
    },
    amountView1: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    checkText: {
        ...gstyle.textfont,
        ...gstyle.button_text,
        ...gstyle.fontWeight,

        color: ConstantVariables.colors.white,
        fontFamily: 'arial'
    },

    touchView: {
        ...gstyle.alignSelf,
        paddingVertical: 10,
    },

    checkOut: {
        width: '90%',
        marginTop: 10,
        ...gstyle.alignSelf,
        backgroundColor: ConstantVariables.colors.golden,
    },

})
