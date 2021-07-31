import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar, SafeAreaView, FlatList, ScrollView, TextInput, ImageBackground,
} from 'react-native';
// import { } from "react-native-gesture-handler";

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'
import { ConstantVariables } from "./component/Conts_Variabale";
import gstyle from './component/Style';
// import Carousel from 'react-native-snap-carousel';
import Carousel, { Pagination } from 'react-native-snap-carousel';


const { width, height } = Dimensions.get('screen');


export default class Productlistwithfilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

            image: [

                {
                    uri: require('../assets/solitute.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00'

                },

                {
                    uri: require('../assets/gold.png'),
                    title: 'Gold',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00',
                    discountprice: '₹75.00',

                },


                {
                    uri: require('../assets/Diamond.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00',
                    discountprice: '₹75.00',

                },

                {
                    uri: require('../assets/solitute.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00',


                },

                {
                    uri: require('../assets/gold.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00',


                },
                {
                    uri: require('../assets/Diamond.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00',
                    discountprice: '₹75.00',

                },
                {
                    uri: require('../assets/solitute.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00'

                },
                {
                    uri: require('../assets/gold.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00',
                    discountprice: '₹75.00',

                },

                {
                    uri: require('../assets/Diamond.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00'

                },

                {
                    uri: require('../assets/solitute.png'),
                    title: 'Diamond',
                    bold: 'Diamond Exclusive Omament',
                    price: '₹55.00',
                    discountprice: '₹75.00',

                },
            ],



        }
    }



    render() {







        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 180 }}>
                    <View style={{ borderWidth: 1, marginTop: 15, ...gstyle.borderColor, }} />
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/Back.png')} style={styles.backarrowimg}></Image>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', ...gstyle.center, }}>
                            <View>

                                <Text style={{ marginRight: 15, marginLeft: 30 }}> NECKLACES</Text>
                                <Text style={{ marginLeft: 40, fontSize: 10 }}>987 Products</Text>
                            </View>
                            <View style={{ borderWidth: 1, ...gstyle.borderColor, height: 50, }} />
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/filter.png')} style={styles.backarrowimg}></Image>
                                <Text style={{ marginRight: 20, marginLeft: 2 }}>FILTER</Text>
                            </TouchableOpacity>
                            <View style={{ borderWidth: 1, ...gstyle.borderColor, height: 50 }} />

                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/shortarrow.png')} style={styles.backarrowimg}></Image>
                                <Text style={{ marginRight: 10, marginLeft: 1 }}>SORT</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                    <View style={{ borderWidth: 1, ...gstyle.borderColor, }} />


                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                        {this.state.image.map((item, position) => {



                            return (
                                <View style={styles.boxview}>
                                    <View>
                                        <ImageBackground
                                            source={item.uri} style={styles.img}>
                                            <View style={styles.ImageBackgroundview}>

                                                <TouchableOpacity>
                                                    <View style={styles.newview}>
                                                        <Text style={styles.Newtext}> New</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Image source={require('../assets/heart.png')} style={styles.heartimg}></Image>
                                                </TouchableOpacity>
                                            </View>

                                            {item.discountprice ?
                                                <TouchableOpacity>
                                                    <View style={styles.view152}>
                                                        <Text style={styles.Newtext}> 15%</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                : null}
                                        </ImageBackground>
                                    </View>
                                    <Text>{item.title}</Text>
                                    <Text style={styles.boldtext}>{item.bold}</Text>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <Text style={styles.goldtext}>{item.price}</Text>
                                        <Text style={{ marginLeft: 2, textDecorationLine: 'line-through' }}>{item.discountprice}</Text>
                                    </View>
                                </View>
                            )

                            return (
                                <View style={styles.boxview}>
                                    <View>
                                        <ImageBackground
                                            source={require('../assets/solitute.png')} style={styles.img}>
                                            <View style={styles.ImageBackgroundview}>

                                                <TouchableOpacity>
                                                    <View style={styles.newview}>
                                                        <Text style={styles.Newtext}>New</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Image source={require('../assets/heart.png')} style={styles.heartimg}></Image>
                                                </TouchableOpacity>
                                            </View>
                                            {/* <TouchableOpacity>
                                                    <View style={styles.view152}>
                                                        <Text style={styles.Newtext}>15%</Text>
                                                    </View>
                                                </TouchableOpacity> */}
                                        </ImageBackground>
                                    </View>
                                    <Text>{item.title}</Text>
                                    <Text style={styles.boldtext}>{item.bold}</Text>
                                    <View style={styles.discountview}>
                                        <Text style={styles.goldtext}>{item.price}</Text>
                                        <Text style={{ marginLeft: 2, textDecorationLine: 'line-through' }}>{item.discountprice}</Text>
                                    </View>
                                </View>
                            )
                        })}
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

    view152: {
        marginTop: 5,
        borderWidth: 1,
        backgroundColor: ConstantVariables.colors.black,
        // borderColor: ConstantVariables.colors.golden,
        width: 50,
        ...gstyle.center,
        borderRadius: 40 / 2,

    },

    ImageBackgroundview: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    backarrowimg: {
        marginLeft: 15,
        width: 15,
        height: 15,

    },


    newview: {
        marginTop: 5,
        borderWidth: 1,
        backgroundColor: ConstantVariables.colors.golden,
        borderColor: ConstantVariables.colors.golden,
        width: 50,
        ...gstyle.center,
        borderRadius: 40 / 2,
    },





    heartimg: {
        width: 15,
        height: 15,
        marginTop: 10,


    },

    Newtext: {
        color: ConstantVariables.colors.white,
    },


    img: {
        width: 150,
        height: 150,
    },


    boldtext: {
        ...gstyle.fontWeight,
        fontSize: 11

    },
    goldtext: {
        color: ConstantVariables.colors.golden,
    },

    discountview: {
        flexDirection: 'row',
    },



    boxview: {
        borderWidth: 1,
        ...gstyle.borderColor,
        width: '45%',
        ...gstyle.center,
        marginTop: 20,
        // backgroundColor:'red'


    },






})


