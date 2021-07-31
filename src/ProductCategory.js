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


const { width, height } = Dimensions.get('screen');


export default class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {

            image: [

                {
                    uri: require('../assets/earring.png'),
                    title: 'EARRINGS'
                },

                {
                    uri: require('../assets/bangles.png'),
                    title: 'BANGLES'
                },

                {
                    uri: require('../assets/pendent.png'),
                    title: 'PENDANTS'
                },

                {
                    uri: require('../assets/ring.png'),
                    title: 'RINGS'
                },

                {
                    uri: require('../assets/earring.png'),
                    title: 'FOR WOMENS'
                },

                {
                    uri: require('../assets/bangles.png'),
                    title: 'FOR MENS'
                },

                {
                    uri: require('../assets/earring.png'),
                    title: 'FOR KIDS'
                },

                {
                    uri: require('../assets/solitaires.png'),
                    title: 'SOLITAIRES'
                },
                {
                    uri: require('../assets/earring.png'),
                    title: 'COLLECTIONS'
                },

                {
                    uri: require('../assets/bangles.png'),
                    title: 'GIFTS'
                },
                
            ],



        }
    }



    render() {







        return (
            <View style={styles.container}>



                <ScrollView
                    contentContainerStyle={{ paddingBottom: 180 }}>




                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                        {this.state.image.map((item, position) => { 


                            if (position%5==4) {
                                
                                    return (
                                        <View style={styles.buttonviewbackground}>

                                            <View style={styles.buttonview}>
    
                                                <TouchableOpacity 
                                                
                                                onPress={() => this.props.navigation.navigate('Map')}

                                                style={styles.buttonview1}>
    
    
                                                    <View>
                                                        <Text style={styles.buttontext}>Rings</Text>
                                                    </View>
                                                </TouchableOpacity>
    
    
                                                <TouchableOpacity 
                                                
                                                onPress={() => this.props.navigation.navigate('Productlistwithfilter')}
                                                style={styles.buttonview2}>
    
    
                                                    <View>
                                                        <Text style={styles.buttontext}>Pendants</Text>
                                                    </View>
                                                </TouchableOpacity>
    
                                            </View>
    
    
                                            <View style={styles.buttonview}>
    
                                                <TouchableOpacity style={styles.buttonview1}>
                                                    <View>
                                                        <Text style={styles.buttontext}>Chains</Text>
                                                    </View>
                                                </TouchableOpacity>
    
                                                <TouchableOpacity style={styles.buttonview2}>
                                                    <View>
                                                        <Text style={styles.buttontext}>Studs</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
    
                                            <View style={styles.buttonview}>
                                                <TouchableOpacity style={styles.buttonview2}>
                                                    <View>
                                                        <Text style={styles.buttontext}>Wristlet</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                
                               

                            } else {

                                return (


                                    <TouchableOpacity style={styles.imageView}>
                                        <View >
                                            <Image source={item.uri} style={styles.img}></Image>
                                            <Text style={styles.text}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )

                            }



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

    imageView: {
        borderWidth: 2,
        borderColor: ConstantVariables.colors.golden,
        //  backgroundColor:'red',
        backgroundColor: '#F4F4F4',
        width: '45%',
        ...gstyle.center,
        marginTop: 20,



    },



    buttonview: {
        width: '90%',
        flexDirection: 'row',
        ...gstyle.alignSelf,
        marginTop: 20,
        justifyContent: 'space-between',


    },

    buttonview1: {
        width: '45%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: ConstantVariables.colors.golden,
        backgroundColor: ConstantVariables.colors.golden,
        height: 30,
        ...gstyle.center,

    },


    buttonview2: {
        width: '45%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: ConstantVariables.colors.golden,
        backgroundColor: ConstantVariables.colors.golden,
        ...gstyle.center,
        height: 30
    },

    buttontext: {
        ...gstyle.ordertext,
        color: ConstantVariables.colors.white,
        // ...gstyle.button_text,

    },


    img: {
        width: 130,
        height: 130,
    },

    text: {
        color: ConstantVariables.colors.golden,
        marginBottom: 5,
        ...gstyle.textfont,
        alignSelf: 'center'


    },

    buttonviewbackground: {
        backgroundColor: '#f4f4f4',
        //  height:220,
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 30

    },





})


