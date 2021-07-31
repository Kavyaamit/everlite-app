
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

const { width, height } = Dimensions.get('screen');

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {



        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>

                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                    >

                        <Arrow

                        />
                        <View style={styles.Profileview}>
                            <Profile
                                marginTop={50}
                                width={90}
                                height={90}
                                alignSelf={'center'}
                            />
                        </View>

                        <View style={styles.Erikjhonsonview}>

                            <Text style={styles.Erikjhonsontext}>
                                Erik Jhonson
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Order')}>
                            <View style={styles.bodyview}>
                                <View style={styles.body}>
                                    <ColorOverlay
                                    />
                                    <Text style={styles.ordertext}>Order</Text>
                                    <Arrow
                                        style={styles.Arrowimg}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.bodyview}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('PaymentMethod')}>
                                <View style={styles.body}>
                                    <ColorOverlay
                                    />
                                    <Text style={styles.Paymenttext}>Payment Methods</Text>
                                    <Arrow
                                        style={styles.PaymentArrowimg}
                                    />
                                </View>
                            </TouchableOpacity>

                        </View>



                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Address')}>
                            <View style={styles.bodyview}>

                                <View style={styles.body}>
                                    <ColorOverlay

                                    />
                                    <Text style={styles.Addresstext}>Address</Text>
                                    <Arrow
                                        style={styles.AddressArrowimg}
                                    />
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AccountDetials')}>
                            <View style={styles.bodyview}>

                                <View style={styles.body}>
                                    <ColorOverlay
                                    />
                                    <Text style={styles.Accdetails}>Account Details</Text>
                                    <Arrow
                                        style={styles.AccountArrowimg}
                                    />
                                </View>

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.savechangeview}>

                            <View>
                                <Text style={styles.savechangetext}>
                                    LOGOUT
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        ...gstyle.container,

    },



    inpute_view: {

        width: '80%',
        ...gstyle.shadow,
        ...gstyle.center,
         
    },

    inpute_field: {
        ...gstyle.text_inpute_field,
    },




    body: {

        
        ...gstyle.button_text,
        flexDirection: 'row',
        ...gstyle.center,
        marginLeft: 10,

    },


    bodyview: {
        borderWidth: 1,
        height: 50,
        width: '80%',
        ...gstyle.alignSelf,
        ...gstyle.borderColor,
        marginTop: 10,
        marginBottom: 5,
        ...gstyle.center,
        flexDirection: 'row',
        justifyContent: 'space-between',


    },

    line: {
        borderWidth: 1,
        width: '80%',
        ...gstyle.borderColor,
        marginBottom: '2%'
    },



    ChangePassword: {
        marginTop: '1%',
        color: ConstantVariables.colors.black,
        ...gstyle.fontWeight,
        fontSize: 18,
        ...gstyle.alignSelf,
    },

    Erikjhonsonview: {
        ...gstyle.alignSelf,
        marginTop: 15,
        marginBottom: 20
    },


    Profile: {
        marginTop: 18
    },

    savechangeview: {
        backgroundColor: ConstantVariables.colors.golden,
        width: '80%',
        height: '6%',
        ...gstyle.center,
        marginTop: '10%',
        ...gstyle.alignSelf,

    },
    savechangetext: {

        ...gstyle.button_text,
        ...gstyle.alignSelf,
    },

    Arrowimg: {
        marginLeft: 150
    },
    PaymentArrowimg: {
        marginLeft: 70
    },
    AddressArrowimg: {
        marginLeft: 130
    },
    AccountArrowimg: {
        marginLeft: 80

    },
    heading: {
        ...gstyle.heading,

    },
    Erikjhonsontext: {
        ...gstyle.heading,
    },
    ordertext: {
        marginLeft: 30,
        ...gstyle.heading,
    },

    Paymenttext: {
        marginLeft: 30,
        ...gstyle.heading,
    },
    Addresstext: {
        marginLeft: 30,
        ...gstyle.heading,
    },
    Accdetails: {
        marginLeft: 30,
        ...gstyle.heading,
    },














})
