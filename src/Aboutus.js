import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar, SafeAreaView, FlatList, ScrollView, TextInput,
} from 'react-native';
// import { } from "react-native-gesture-handler";

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'
import { ConstantVariables } from "./component/Conts_Variabale";
import gstyle from './component/Style';
// import Carousel from 'react-native-snap-carousel';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Value } from "react-native-reanimated";

const { width, height } = Dimensions.get('screen');


export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {



        }
    }





    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 150 }}>


                    <View style={styles.mainView}>
                        <View style={styles.line} />
                        <View style={styles.arrowfeedview}>

                            <TouchableOpacity>
                                <Image source={require('../assets/Back.png')} style={styles.backarrowimg}></Image>
                            </TouchableOpacity>
                            <Text style={styles.feedbacktext}>FEEDBACK</Text>
                        </View>


                        <View style={styles.line} />
                        <View style={styles.boxView}>

                            <Text style={styles.boldtext}>What is Everlite</Text>
                            <Text>your feedback is important to us, please help</Text>
                            <Text style={{ marginBottom: 20 }}>us in improving our app</Text>
                        </View>
                        <View>

                            <Text style={styles.boldtext}>What your wear is what you are?</Text>
                            <Text style={{ alignSelf: 'center', width: '80%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>

                            <Text style={styles.boldtext}>The Collections</Text>
                            <Text style={{ alignSelf: 'center', width: '80%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>



                            <Text style={styles.gogettext}>Go get it Girl!</Text>
                        </View>


                        <View style={styles.FlatListview}>

                            {/* <FlatList
                                    data={this.state.list}

                                    // numColumns={1}
                                    horizontal={true} 
                                    // horizontal={this.state.isHorizontal}
                                    // showsHorizontalScroll={true} 
                                    // keyExtractor={item => item.id.toString()}
                                    // keyExtractor={item => item.item}
                                    renderItem={({ item, index }) => (
                                        <View>

                                                <Image source={item.image} style={styles.img}></Image>
                                                <Text style={{
                                                    textAlign: 'center', marginTop: 10
                                                }}>
                                                    {item.title}</Text>


                                        </View>
                                    )}
                                /> */}

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

    boxView: {
        borderWidth: 2,
        borderColor: ConstantVariables.colors.golden,
        alignItems: 'center',
        width: '90%',
        // height: '40%',
        alignSelf: 'center',
        marginTop: 20,

    },



    backarrowimg: {
        width: 10,
        height: 15,
        // marginTop: 20,
        marginLeft: 15,
        // alignItems: 'center',
        // justifyContent:'center'
        // marginTop:20,


    },

    boldtext: {
        ...gstyle.fontWeight,
        marginBottom: 5,
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center'

    },


    feedbacktext: {
        // backgroundColor:'red',
        ...gstyle.ordertext,
        width: '100%',
        ...gstyle.alignSelf,
        ...gstyle.center
        // backgroundColor: 'green',
        // width:'100%',



    },


    line: {
        borderWidth: 1,
        width: '120%',
        marginTop: 20,
        ...gstyle.borderColor,
    },

    arrowfeedview: {
        flexDirection: 'row',
        marginTop: 20,
        // width: '100%',
        // justifyContent:'center'
        ...gstyle.center
        // alignItems: 'center',
        // backgroundColor: 'red'
    },

    // feedbackimg: {
    //     width: 50,
    //     height: 50,

    // },

    // feedbackimg1: {
    //     width: 50,
    //     height: 50,
    //     marginLeft: 15,
    // },


    feedbackimgview: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,

        // width:'90%'

    },
    gogettext: {
        ...gstyle.button_text,
        color: ConstantVariables.colors.golden,
        marginTop: 10,
        marginLeft: 38
    },

})








