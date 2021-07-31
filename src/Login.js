
import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar, SafeAreaView, Button, ScrollView
} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { ConstantVariables } from "./component/Conts_Variabale";
import gstyle from './component/Style';
import Googleplus from '../assets/googleplus.svg';
import Noselect from '../assets/noselect.svg';
import Select from '../assets/select.svg';

import Logo from '../assets/logo.svg';


const { width, height } = Dimensions.get('screen');



export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: true,
            // checkbox1:false,

        };
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








    render() {



        return (
            <View style={styles.container}>

                <View style={{ ...gstyle.statusbar }}>
                    <SafeAreaView >
                        <StatusBar barStyle="light-content" />
                    </SafeAreaView>
                </View>


                <ScrollView>


                    <Logo
                        style={styles.logoimg}

                    />




                    <View style={styles.bodyview}>

                        <View style={styles.body}>


                            <Text style={styles.signin}>Sign in</Text>


                            <View style={styles.inpute_view}>
                                <TextInput style={styles.inpute_field}
                                    placeholder="Email or Username"
                                    placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                    maxLength={50}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.line} />



                            <View style={styles.inpute_view}>
                                <TextInput style={styles.inpute_field}
                                    placeholder=" Enter Your Password"
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


                                    <Text style={styles.rembermetext}>Remember Me</Text>
                                </View>
                                <Text style={styles.ForgetPassword}>
                                    Forget Password?
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ProfileScreen')}
                                style={styles.login_button}>

                                <View>
                                    {/* <Image source={require('../assets/login.png')} style={{ marginRight: 10, width: 20, height: 20 }}></Image> */}
                                    <Text style={styles.login_text}>LOGIN</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>



                    <View style={styles.cteratorsignbodyview}>

                        {/* <View style={styles.forgot_view}>
                        <Text style={styles.bottom_text}>Forgot Password</Text>
                        <Text style={[styles.bottom_text, { color: '#B21925' }]}>Continue as Guest</Text>
                    </View> */}
                        <Text style={styles.bottom_text}>Or</Text>
                        <Text style={styles.bottom_text}> sign in with</Text>

                        <View style={styles.google_button}>

                            <Googleplus
                                width={35}
                                marginRight={'5%'}
                            />
                            <Text style={styles.login_text}>GOOGLE</Text>
                        </View>
                        <View style={styles.cteratedontview}>

                            <Text style={styles.donthave}>Don't have an account?</Text>
                            <View style={styles.createnow}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>

                                    <Text style={styles.login_text}>CREATE NOW</Text>

                                </TouchableOpacity>
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

    signin: {
        color: ConstantVariables.colors.black,
        fontSize: 30,
        marginBottom: '5%',
        fontWeight: '500'

    },

    inpute_view: {
        ...gstyle.inpute_view,
        ...gstyle.shadow,
        ...gstyle.center
    },

    inpute_field: {
        ...gstyle.text_inpute_field,
    },

    login_button: {
        width: '50%',
        height: 40,
        ...gstyle.shadow,
        marginBottom: 15,
        marginTop: 25,
        flexDirection: 'row',
        backgroundColor: ConstantVariables.colors.golden,
        shadowColor: ConstantVariables.colors.black,
        ...gstyle.center

    },
    google_button: {
        ...gstyle.button,
        ...gstyle.shadow,
        marginBottom: 15,
        
        backgroundColor: ConstantVariables.colors.golden,
        flexDirection: "row",
        shadowColor: ConstantVariables.colors.black,

    },

    login_text: {
        ...gstyle.button_text,
      
        ...gstyle.center
    },

    forgot_view: {
        marginTop: 20,
        ...gstyle.center,
    },

    bottom_text: {
        fontWeight: "500",
        color: ConstantVariables.colors.black,
        marginBottom: 20,
        fontSize: 16,
        ...gstyle.heading
         
    },

    body: {

        marginTop: 30,
        width: '100%',
        ...gstyle.center,

    },
    bodyview: {
        borderWidth: 1,
        height: '50%',
        width: '94%',
        ...gstyle.alignSelf,
        ...gstyle.borderColor,
        marginTop: '10%',
        
    },

    line: {
        borderWidth: 1,
        width: '90%',
        borderColor: ConstantVariables.colors.golden,
        marginBottom: '10%'
    },


    createnow: {
        width: '45%',
        height: 35,
        ...gstyle.shadow,
        flexDirection: 'row',
        backgroundColor: ConstantVariables.colors.golden,
        shadowColor: ConstantVariables.colors.black,
        ...gstyle.center,
        marginBottom: '6%',



    },
    cteratorsignbodyview: {
        ...gstyle.center,
        marginTop: 9
    },

    donthave: {
        // fontWeight: 'b',
        color: ConstantVariables.colors.black,
        marginTop: 6,
        fontSize: 16,
        ...gstyle.heading,

    },
    cteratedontview: {
        flexDirection: 'row',
        marginTop: 27,
        justifyContent: 'space-between',
        // backgroundColor:'red',
        width: '85%'

    },
    ForgetPassword: {
        color: ConstantVariables.colors.golden,
        ...gstyle.textfont,

    },
    checkboxview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '92%'
    },
    checkboxview1: {
        flexDirection: 'row',
    },

    heading: {
        ...gstyle.heading,

    },
    rembermetext: {
        ...gstyle.textfont,

    },
    logoimg: {
        marginTop
            : '5%',
        width: 150,
        ...gstyle.alignSelf,
    }








})
