
import { StyleSheet, Dimensions } from "react-native";
import { ConstantVariables, } from "./Conts_Variabale";

const { width, height } = Dimensions.get('screen');


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: ConstantVariables.colors.white,

    },

    statusbar: {
        backgroundColor: '#ff0000', width: width,
    },

    center: {
        alignItems: "center",
        justifyContent: 'center',

    },

    header: {
        color: ConstantVariables.colors.golden,
        fontSize: ConstantVariables.font_Style.header_textsize,
        fontWeight: '600',
    },

    inpute_view: {
        // width: "70%",
        height: 22,
        backgroundColor: ConstantVariables.colors.white,
        // borderRadius: 8,
        //  backgroundColor:'red'
    },

    text_inpute_field: {
        width: "100%",
        height: 40,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor:'red'
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1.00,
    },

    back_touch: {
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
    },

    button: {
        width: "90%",
        height: 45,
        // borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center",

    },


    button_text: {
        color: ConstantVariables.colors.white,
        fontWeight: ConstantVariables.font_Style.button_font_weight,
        fontSize: 18
    },

    twobutton: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 10,
        justifyContent: 'space-between',

    },
    heading: {
        fontWeight: 'bold'
    },
    textfont:{
        fontSize:15
       },

       

       borderColor:{

           borderColor:'rgba(0, 0, 0, 0.10)',
       },

       fontWeight:{
           fontWeight:"bold"
       },


       alignSelf:{
           alignSelf:'center'
       },

       ordertext:{
        fontSize: 13,
       },
       priceAmountText:{
        fontSize: 11, 
       }


       
   


})