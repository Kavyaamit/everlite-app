
import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar, SafeAreaView, Button, ScrollView, TextInput
} from 'react-native';
// import { TextInput } from "react-native-gesture-handler";
import { ConstantVariables } from "./component/Conts_Variabale";
import gstyle from './component/Style';
import Profile from '../assets/Profile.svg';
import ColorOverlay from '../assets/ColorOverlay.svg';
import Arrow from '../assets/Arrow.svg';
import DownArrow from '../assets/DownArrow.svg';
import Upi from '../assets/upi.svg';
import Wallets from '../assets/Wallets.svg';
import Bank from '../assets/bank.svg';
import UPArrow2 from '../assets/UPArrow2.svg';

import Noselect from '../assets/noselect.svg';
import Select from '../assets/select.svg';

const { width, height } = Dimensions.get('screen');

export default class PaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: true,
            number: '',
            UPArrow2: true,
            cardVisible: false
        };
    }

    onTextChanged(value) {
        // code to remove non-numeric characters from text
        this.setState({ number: value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
    }


    checkbox = () => {
        console.log('>>>')
        this.setState({
            checkbox: false
        })
    }

    checkbox1 = () => {
        console.log('<<')
        this.setState({
            checkbox: true
        })
    }

    cardhandle = () => {
        if (this.state.cardVisible) {
            this.setState({
                cardVisible: false
            })
        } else {
            this.setState({
                cardVisible: true
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>


                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                >


                    <View style={styles.PaymentMethodheader}>

                        <Text style={styles.heading}>PAYMENT METHOD</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={styles.bodyview1}>
                            <View style={styles.headerbody}>

                                <View style={styles.headerbody1}>

                                    <Wallets />
                                    <Text style={styles.credittext}> Credit/Debit Card</Text>

                                    <TouchableOpacity onPress={() => this.cardhandle()}

                                    >
                                        <View>
                                            {this.state.cardVisible ?
                                                <UPArrow2 />
                                                :

                                                <DownArrow />

                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>

                            </View>
                            {this.state.cardVisible ?
                                <View style={styles.body1}>
                                    <View style={styles.inpute_view}>
                                        <TextInput style={styles.inpute_field}
                                            placeholder="Card Number"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={20}
                                            keyboardType={'number-pad'}
                                         
                                        >
                                        </TextInput>
                                    </View>
                                    <View style={styles.line} />
                                    <View style={styles.inpute_view}>
                                        <TextInput style={styles.inpute_field}
                                            placeholder="Name on Cart"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={16}
                                        >
                                        </TextInput>
                                    </View>

                                    <View style={styles.line} />
                                    <View style={styles.validcvvtext}>
                                        <TextInput
                                            placeholder="Valid Thru (MM/YY)"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={5}
                                            keyboardType={"number-pad"}
                                        >
                                        </TextInput>

                                        <TextInput style={styles.cvvtext}
                                            placeholder="CVV"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={3}
                                            keyboardType={"number-pad"}
                                        >
                                        </TextInput>

                                    </View>
                                    <View style={{ flexDirection: 'row' }}>

                                        <View style={styles.line1} />
                                        <View style={styles.line2} />
                                    </View>


                                    <View style={styles.checkboxview}>
                                        <View style={styles.checkboxview1}>
                                            {this.state.checkbox ?
                                                <TouchableOpacity onPress={this.checkbox}>
                                                    <Noselect
                                                        width={35}
                                                    />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={this.checkbox1}>
                                                    <Select
                                                        width={35}
                                                    />
                                                </TouchableOpacity>}
                                            <Text style={styles.savetext}>Save this card for faster Payments</Text>
                                        </View>
                                    </View>
                                </View>

                                :

                                null}
                        </View>

                        <View style={styles.bodyview}>

                            <View style={styles.body}>
                                <Upi
                                />
                                <Text style={styles.googletext}>Google Pay/BHIM UPI /Phonepe</Text>
                                <DownArrow
                                    style={styles.GoogledownArrowimg}
                                />
                            </View>

                        </View>

                        <View style={styles.bodyview}>

                            <View style={styles.body}>
                                <Wallets
                                />
                                <Text style={styles.Walletstext}> Wallets</Text>
                                <DownArrow
                                    style={styles.Walletsimg}
                                />
                            </View>

                        </View>

                        <View style={styles.bodyview}>
                            <View style={styles.body}>
                                <Bank
                                />
                                <Text style={styles.Netbakingtext}>Net Banking</Text>
                                <DownArrow
                                    style={styles.netArrowimg}
                                />
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


    PaymentMethodheader: {
        ...gstyle.center,
        marginTop: '5%'
    },
    headerbody1: {
        ...gstyle.button_text,
        flexDirection: 'row',
        padding: 10,
        ...gstyle.center,
        // alignItems: 'center',
        width: '100%',
    },

    validcvvtext: {
        flexDirection: 'row',
    },

    credittext: {
        marginLeft: 10,
        flex: 1,
        ...gstyle.heading,
    },
    googletext: {
        marginLeft: 25,
        ...gstyle.heading,
    },
    Walletstext: {
        marginLeft: 10,
        ...gstyle.heading,
    },
    Netbakingtext: {
        marginLeft: 15,
        ...gstyle.heading,
    },

    inpute_view: {

        width: '80%',
        ...gstyle.shadow,
        ...gstyle.center
    },

    inpute_field: {
        ...gstyle.text_inpute_field,
    },




    body: {
        ...gstyle.button_text,
        flexDirection: 'row',
        ...gstyle.center,
        marginLeft: 10
    },

    bodyview: {
        borderWidth: 1,
        height: 50,
        width: '90%',
       
        ...gstyle.alignSelf,
        ...gstyle.borderColor,
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',


    },

    line: {
        borderWidth: 1,
        width: '85%',
        borderColor: ConstantVariables.colors.golden,
        marginBottom: '2%'
    },


    cvvtext: {
        marginLeft: '22%',

    },


    line1: {
        borderWidth: 1,
        width: '58%',
        borderColor: ConstantVariables.colors.golden,
        marginBottom: '2%',

    },
    line2: {
        borderWidth: 1,
        width: '18%',
        borderColor: ConstantVariables.colors.golden,
        marginBottom: '2%',
        marginLeft: '9%'
       
    },

    bodyview1: {
        borderWidth: 1,
         
        width: '90%',
        ...gstyle.alignSelf,
        ...gstyle.borderColor,
        marginTop: 10,
        marginBottom: 5,

    },
    savetext: {
        ...gstyle.textfont
    },

    headerbody: {
        // height: 290,
        flexDirection: 'row',
        width: '100%',
     ...gstyle.alignSelf

    },



    body1: {

        width: '100%',
        ...gstyle.center,
         
        paddingBottom: 10,



    },


    GoogledownArrowimg: {
        marginLeft: 25,
    },
    Walletsimg: {
        marginLeft: 180
    },
    netArrowimg: {
        marginLeft: 150
    },

    Creditimg: {
        marginLeft: 10,
        justifyContent: 'flex-end'
    },
    checkboxview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '92%',
        marginTop: 15
    },
    checkboxview1: {
        flexDirection: 'row',
    },
    UPArrow2view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '9%',
        marginTop: 15
    },
    heading: {
        ...gstyle.heading,

    }










})
