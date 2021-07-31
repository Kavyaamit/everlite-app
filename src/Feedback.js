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
            // feedback: 'ok',





        }
    }








    click = (feedback) => {
        console.log('<<<<', feedback)
        alert(feedback)

    }


    click1 = () => {
        alert('Good')
    }

    click2 = () => {
        alert('Very Good')
    }

    click3 = () => {
        alert('Amazing')
    }

    click4 = () => {
        alert('Unbelievable')
    }






    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 180 }}>


                    <View style={styles.mainView}>
                        <View style={styles.line} />
                        <View style={styles.arrowfeedview}>

                            <TouchableOpacity>
                                <Image source={require('../assets/Back.png')} style={styles.backarrowimg}></Image>
                            </TouchableOpacity>
                            <Text style={styles.feedbacktext}>FEEDBACK</Text>
                        </View>


                        <View style={styles.line}/>
                        <View style={styles.boxView}>

                            <Text style={styles.boldtext}>We would like to hear form you</Text>
                            <Text>your feedback is important to us, please help</Text>
                            <Text>us in improving our app</Text>
                        </View>
                        <View>

                            <Text style={styles.boldtext}>Are you liking our app?</Text>

                            <View style={styles.feedbackimgview}>
                                <TouchableOpacity
                                    onPress={() => { this.click('ok') }}>
                                    <Image source={require('../assets/sad.png')} style={styles.feedbackimg}></Image>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.click1}>
                                    <Image source={require('../assets/normal.png')} style={styles.feedbackimg1}></Image>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.click2}>
                                    <Image source={require('../assets/happy.png')} style={styles.feedbackimg1}></Image>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.click3}>
                                    <Image source={require('../assets/veryhappy.png')} style={styles.feedbackimg1}></Image>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.click4}>
                                    <Image source={require('../assets/hearthapppy.png')} style={styles.feedbackimg1}></Image>
                                </TouchableOpacity>
                            </View>



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
        height: '40%',
        alignSelf: 'center',
        marginTop: 50,

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

    feedbackimg: {
        width: 50,
        height: 50,

    },

    feedbackimg1: {
        width: 50,
        height: 50,
        marginLeft: 15,
    },


    feedbackimgview: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,

        // width:'90%'

    },

    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },

    starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },

})








