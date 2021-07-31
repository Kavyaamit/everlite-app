
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

export default class Address extends Component {
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

                        <Text style={styles.heading}>ADDRESS</Text>
                    </View>

                    <View style={styles.Addressview1}>
                        <View style={styles.Addresstext}>
                            <Text style={styles.heading}>
                                Erik Jhonson
                            </Text>
                            <View>
                                <Text style={styles.textfont}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </Text>
                                <Text style={styles.textfont}>
                                    City-40021
                                </Text>
                                <Text style={styles.textfont}>
                                    State
                                </Text>
                                <Text style={styles.textfont}>
                                    Mobile: 18000180018
                                </Text>
                            </View>
                        </View>






                        <View style={styles.Addressview}>
                            <View style={styles.twobutton}>
                                <TouchableOpacity>
                                    <View style={{
                                        borderWidth: 1, borderColor: ConstantVariables.colors.golden,
                                        backgroundColor: ConstantVariables.colors.golden, width: 120, alignItems: 'center',
                                    }}>

                                        <Text style={{
                                            ...gstyle.button_text,
                                        }}>EDIT</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{}}>


                                        <View style={{
                                            borderWidth: 1, borderColor: ConstantVariables.colors.golden,
                                            backgroundColor: ConstantVariables.colors.golden, width: 120, alignItems: 'center',
                                        }}>

                                            <Text style={{
                                                ...gstyle.button_text,
                                            }}>REMOVE</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>




                            </View>


                        </View>
                    </View>





                    <View style={{ flex: 1 }}>
                        <View style={styles.bodyview1}>
                            <View style={styles.headerbody}>

                                <View style={styles.headerbody1}>


                                    <Text style={styles.credittext}>Add New Address</Text>

                                    <TouchableOpacity onPress={() => this.cardhandle()}

                                    >
                                        <View>
                                            {this.state.cardVisible ?
                                                <UPArrow2

                                                />
                                                :

                                                <DownArrow

                                                />

                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>

                            </View>
                            {this.state.cardVisible ?
                                <View style={styles.body1}>
                                    <View style={styles.inpute_view}>
                                        <TextInput style={styles.inpute_field}
                                            placeholder="Name"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={50}
                                            keyboardType={'numeric'}
                                            onChangeText={value => this.onTextChanged(value)}
                                            value={this.state.number}
                                        >
                                        </TextInput>
                                    </View>
                                    <View style={styles.line} />

                                    <View style={styles.inpute_view}>
                                        <TextInput style={styles.inpute_field}
                                            placeholder="Mobile No."
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={16}
                                        >
                                        </TextInput>
                                    </View>

                                    <View style={styles.line} />
                                    <View style={styles.pincodetext}>
                                        <TextInput

                                            placeholder="Pincode"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={5}
                                            keyboardType={"numeric"}
                                        >
                                        </TextInput>

                                        <TextInput style={styles.statetext}
                                            placeholder="State"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={3}
                                        // keyboardType={"numeric"}
                                        >
                                        </TextInput>

                                    </View>
                                    <View style={styles.li1line2}>

                                        <View style={styles.line1} />
                                        <View style={styles.line2} />
                                    </View>




                                    <View style={styles.inpute_view}>
                                        <TextInput style={styles.inpute_field}
                                            placeholder="Address (House NO,Building,Street,Area)"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={16}

                                        >
                                        </TextInput>
                                    </View>

                                    <View style={styles.line} />


                                    <View style={styles.inpute_view}>
                                        <TextInput style={styles.inpute_field}
                                            placeholder="Locality/Town"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={16}

                                        >
                                        </TextInput>
                                    </View>

                                    <View style={styles.line} />

                                    <View style={styles.inpute_view}>
                                        <TextInput style={styles.inpute_field}
                                            placeholder="City/District"
                                            placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                            maxLength={16}

                                        >
                                        </TextInput>
                                    </View>

                                    <View style={styles.line} />

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
                                            <Text style={styles.textfont}>Make this as my default address</Text>
                                        </View>
                                    </View>
                                    <View style={styles.twobutton}>
                                        <TouchableOpacity>
                                            <View style={{
                                                borderWidth: 1, borderColor: ConstantVariables.colors.golden,
                                                backgroundColor: ConstantVariables.colors.golden, width: 120, alignItems: 'center',
                                            }}>

                                                <Text style={{
                                                    ...gstyle.button_text,
                                                }}>CANCEL</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <View style={{}}>


                                                <View style={{
                                                    borderWidth: 1, borderColor: ConstantVariables.colors.golden,
                                                    backgroundColor: ConstantVariables.colors.golden, width: 120, alignItems: 'center',
                                                }}>
                                                    <Text style={{
                                                        ...gstyle.button_text,
                                                    }}>SAVE</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                :

                                null}
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
        width: '100%',
    },

    pincodetext: {
        flexDirection: 'row',
        width: '80%',

    },
    statetext: {
        marginLeft: '40%',
    },

    li1line2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%'
    },


    credittext: {
        marginLeft: 10,
        flex: 1,
        ...gstyle.heading,
    },
    inpute_view: {

        width: '80%',
        ...gstyle.shadow,
        ...gstyle.center,

    },

    inpute_field: {
        ...gstyle.text_inpute_field,
    },

    heading: {
        ...gstyle.heading,
    },



    body: {


        ...gstyle.button_text,
        flexDirection: 'row',
        ...gstyle.center,
        marginLeft: 10
    },

    line: {
        borderWidth: 1,
        width: '85%',
        borderColor: ConstantVariables.colors.golden,
        marginBottom: '2%'
    },


    line1: {
        borderWidth: 1,
        width: '50%',
        borderColor: ConstantVariables.colors.golden,
        marginBottom: '2%',

    },
    line2: {
        borderWidth: 1,
        width: '40%',
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

    Addressview1: {
        borderWidth: 1,

        width: '90%',
        ...gstyle.alignSelf,

        ...gstyle.borderColor,
        marginTop: 10,
        marginBottom: 5,
    },


    Addressview: {

        width: '100%',
        ...gstyle.center,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        marginTop: 10,
        marginBottom: 15,
    },


    headerbody: {

        flexDirection: 'row',
        width: '100%',
        ...gstyle.alignSelf,

    },



    body1: {

        width: '100%',
        ...gstyle.center,
        paddingBottom: 10


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
        ...gstyle.center,
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

    twobutton: {
        height: 30,
        ...gstyle.twobutton,

    },
    heading: {
        ...gstyle.heading,

    },
    Addresstext: {
        marginHorizontal: 15,
        marginTop: 10,

    },
    textfont: {
        ...gstyle.textfont
    },












})
