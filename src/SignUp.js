
import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View, SafeAreaView, StatusBar, Dimensions, Image, TouchableOpacity
} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { ConstantVariables } from "./component/Conts_Variabale";
import gstyle from './component/Style';



const { width, height } = Dimensions.get('screen');

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {



        return (
            <View style={styles.container}>
                <View style={{ ...gstyle.statusbar }}>
                    <SafeAreaView >
                        <StatusBar barStyle="light-content" />
                    </SafeAreaView>
                </View>


                <View style={{ width: "100%", height: 50, flexDirection: 'row', alignItems: 'center',    paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{...gstyle.back_touch}}>
                    {/* <Image source={require("../assets/left-arrow.png")}></Image> */}
                        </TouchableOpacity>
                    <View style={{ width: "90%", justifyContent: 'center', alignItems: "center" }}>
                        <Text style={{ ...gstyle.header }}>Sign Up</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.name_view}>

                        <View style={[styles.inpute_view, { width: "47%" }]}>
                            <TextInput style={[styles.inpute_field, { width: '90%' }]}
                                placeholder="First Name"
                                placeholderTextColor="#c2c2c2"
                            >
                            </TextInput>
                        </View>

                        <View style={[styles.inpute_view, { width: "47%" }]}>
                            <TextInput style={[styles.inpute_field, { width: '90%' }]}
                                placeholder="First Name"
                                placeholderTextColor="#c2c2c2"
                            >
                            </TextInput>
                        </View>
                    </View>

                    <View style={styles.inpute_view}>
                        <TextInput style={styles.inpute_field}
                            placeholder="Phone Number"
                            placeholderTextColor="#c2c2c2"
                        >
                        </TextInput>
                    </View>

                    <View style={styles.inpute_view}>
                        <TextInput style={styles.inpute_field}
                            placeholder="Email Address"
                            placeholderTextColor="#c2c2c2"
                        >
                        </TextInput>
                    </View>
                    <View style={styles.inpute_view}>
                        <TextInput style={styles.inpute_field}
                            placeholder="Preferral Code (Optional)"
                            placeholderTextColor="#c2c2c2"
                        >
                        </TextInput>
                    </View>
                    <View style={styles.inpute_view}>
                        <TextInput style={styles.inpute_field}
                            placeholder="Password"
                            placeholderTextColor="#c2c2c2"
                        >
                        </TextInput>
                    </View>
                    <View style={styles.inpute_view}>
                        <TextInput style={styles.inpute_field}
                            placeholder="Confirm Password"
                            placeholderTextColor="#c2c2c2"
                        >
                        </TextInput>
                    </View>
                </View>


                <View style={{justifyContent:'center',alignItems:"center",marginTop:30}}>


                <View style={[styles.login_button, { flexDirection: 'row' }]}>

                            <Image source={require('../assets/add-user.png')} style={{ marginRight: 10, }}></Image>
                        <Text style={styles.login_text}>Sign In</Text>
                    </View>


                    <Text style={styles.bottom_text}>Or sign in with</Text>

                    <View style={[styles.google_button, { flexDirection: "row" }]}>
                    <Image source={require('../assets/google.png')} style={{ marginRight: 10, }}></Image>
                    <Text style={styles.login_text}>Google</Text>
                </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={styles.bottom_text}>Don't have an account?</Text>
                        <Text style={[styles.bottom_text, { color: ConstantVariables.colors.login_background, marginLeft: 5 }]}>SIGN UP</Text>
                    </View>


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
        ...gstyle.inpute_view,
        ...gstyle.shadow,
        marginBottom: 15,
    },

    inpute_field: {
        ...gstyle.text_inpute_field,
    },

    login_button: {
        ...gstyle.button,
        ...gstyle.shadow,

        marginBottom: 15,
        backgroundColor: ConstantVariables.colors.login_background,
        shadowColor: ConstantVariables.colors.black,

    },

    login_text: {
        ...gstyle.button_text
    },

    google_button: {
        ...gstyle.button,
        ...gstyle.shadow,
        marginBottom: 15,
        marginTop: 25,
        backgroundColor: "#ff4000",
        shadowColor: ConstantVariables.colors.black,

    },
    bottom_text: {
        fontWeight: "500",
        color: ConstantVariables.colors.gray,

        marginTop: 15,
        fontSize: 16
    },

    body: {
        marginTop: 30,
        ...gstyle.center
    },

    name_view:
    {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '90%'
    }
})
