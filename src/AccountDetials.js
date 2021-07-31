
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
import Googleplus from '../assets/googleplus.svg';
import Noselect from '../assets/noselect.svg';
import Select from '../assets/select.svg';
// import { Style } from "./component/Style";
import Profile from '../assets/Profile.svg';

const { width, height } = Dimensions.get('screen');



export default class AccountDetials extends Component {
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

                <View style={{ flex: 1 }}>

                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                    >
                        <View style={styles.AccountDetialsview}>
                            <Text style={styles.heading}>
                                ACCOUNT DETAILS
                            </Text>
                        </View>

                        <View style={styles.Profileview}>
                            <Profile
                                marginTop={10}
                                width={90}
                                height={90}
                                alignSelf={'center'}
                            />
                        </View>




                        <View style={styles.bodyview}>

                            <View style={styles.body}>





                                <View style={styles.inpute_view}>
                                    <TextInput style={styles.inpute_field}
                                        placeholder=" Erik"
                                        placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                        maxLength={50}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.line} />



                                <View style={styles.inpute_view}>
                                    <TextInput style={styles.inpute_field}
                                        placeholder="Jhonson"
                                        placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                        maxLength={16}
                                    >
                                    </TextInput>
                                </View>

                                <View style={styles.line} />

                                <View style={styles.inpute_view}>
                                    <TextInput style={styles.inpute_field}
                                        placeholder="Erik Jhonson"
                                        placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                        maxLength={50}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.line} />



                                <View style={styles.inpute_view}>
                                    <TextInput style={styles.inpute_field}
                                        placeholder="1800018010"
                                        placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                        maxLength={16}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.line} />

                                <View style={styles.inpute_view}>
                                    <TextInput style={styles.inpute_field}
                                        placeholder="Email Address"
                                        placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                        maxLength={16}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.line} />

                            </View>

                        </View>



                        <Text style={styles.ChangePassword}>Change Password</Text>
                        <View style={styles.bodyview1}>
                            <View style={styles.body}>
                                <View style={styles.inpute_view}>
                                    <TextInput style={styles.inpute_field}
                                        placeholder=" Current Password"
                                        placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                        maxLength={50}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.line} />



                                <View style={styles.inpute_view}>
                                    <TextInput style={styles.inpute_field}
                                        placeholder="New Password   "
                                        placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                        maxLength={16}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.line} />

                                <View style={styles.inpute_view}>
                                    <TextInput style={styles.inpute_field}
                                        placeholder=" Confirm Password"
                                        placeholderTextColor={ConstantVariables.colors.placeholderTextColor}
                                        maxLength={50}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.line} />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ProfileScreen')}

                            style={styles.savechangeview}>

                            <View>
                                <Text style={styles.savechangetext}>
                                    SAVE CHANGES
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
        // alignItems: 'center',
        // justifyContent: 'center',
        ...gstyle.center,
    },

    inpute_field: {
        ...gstyle.text_inpute_field,
    },




    body: {

        marginTop: 12,
        width: '100%',
        height: '90%',
        ...gstyle.center,
        // justifyContent: "center",
        // alignItems: "center",
    },

    bodyview: {
        borderWidth: 1,
        height: 280,
        width: '80%',
        ...gstyle.alignSelf,
        ...gstyle.borderColor,
        marginTop: 10,
        marginBottom: 5,

    },

    bodyview1: {
        borderWidth: 1,
        height: 190,
        width: '80%',
        ...gstyle.alignSelf,
      ...gstyle.borderColor,
        marginTop: '4%',

    },

    line: {
        borderWidth: 1,
        width: '80%',
        borderColor: ConstantVariables.colors.golden,
        marginBottom: '2%'
    },



    ChangePassword: {
        marginTop: '1%',
        color: ConstantVariables.colors.black,
         ...gstyle.fontWeight,
        ...gstyle.textfont,
        ...gstyle.alignSelf,
    },

    AccountDetialsview: {
        ...gstyle.alignSelf,
        marginTop: 15
    },


    Profile: {
        marginTop: 18
    },

    savechangeview: {
        backgroundColor: ConstantVariables.colors.golden,
        width: '50%',
        height: '6%',
        ...gstyle.center,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: '3%',
        ...gstyle.alignSelf,
    },
    savechangetext: {
        // color: ConstantVariables.colors.white,
        ...gstyle.button_text,
        ...gstyle.alignSelf,
        
    },

    heading:{
        ...gstyle.heading,

    }






})
