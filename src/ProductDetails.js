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


export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            tabbar: true,
            value: 0,
            index: 0,


            Image: [

                {
                    uri: require('../assets/Game.png')
                },

                {
                    uri: require('../assets/Game.png')
                },

                {
                    uri: require('../assets/Game.png')
                },

                {
                    uri: require('../assets/Game.png')
                },
            ],

            Image1: [

                {
                    uri: require('../assets/diamond.png')
                },

                {
                    uri: require('../assets/diamond.png')
                },

                {
                    uri: require('../assets/diamond.png')
                },

                {
                    uri: require('../assets/diamond.png')
                },

                {
                    uri: require('../assets/diamond.png')
                },

                {
                    uri: require('../assets/diamond.png')
                },

                {
                    uri: require('../assets/diamond.png')
                },
            ],
        }
    }










    // _renderItem ({item, index}){
    //       return <MySlideComponent data={item} />
    // }

    get pagination() {
        // const { item, activeSlide } = this.state;
        console.log('jvdcvg')
        return (
            <Pagination
                dotsLength={4}
                dotColor={ConstantVariables.colors.golden}
                inactiveDotColor={ConstantVariables.colors.gray}
                inactiveDotStyle={{ height: 20, width: 20, borderRadius: 20 / 2 }}
                // activeDotIndex={{index:0}}
                // dotContainerStyle={{height:10,width:10,borderRadius:20/2}}
                // activeDotStyle={ConstantVariables.colors.white}
                //  dotStyle={{height:20,width:20,borderRadius:20/2,backgroundColor:ConstantVariables.colors.golden}}
                dotStyle={{ height: 10, width: 10, borderRadius: 20 / 2 }}
                //     //renderDots={this.renderPagination}
                activeDotIndex={this.state.value}
            // tappableDots={true}
            //   containerStyle={styles.paginationContainer}
            />
        );
    }



    onSnapToItem = (index) => {
        console.log('<<<<', index)
        this.setState({
            value: index
        })

    }



    tabbarfun = () => {
        this.setState({
            tabbar: false
        })
    }




    tabbarshowfun2 = () => {
        this.setState({
            tabbar: true

        })
    }







    _renderItem({ item, index }) {

        return (

            <View>

                <TouchableOpacity>
                    <Image
                        style={styles.crausalImage}
                        source={item.uri}
                    ></Image>
                </TouchableOpacity>

            </View>

        )
    }






    // _renderItem1({ item, index }) {

    //     return (


    //         <View style={styles.bottomslider}>

    //             <TouchableOpacity>
    //                 <Image style={styles.viewcrausalImage}
    //                     source={item.uri}
    //                 ></Image>

    //             </TouchableOpacity>
    //             <Text style={styles.Perfecttext}>Perfect Diamond Jewellery</Text>
    //             <View style={styles.bottomsliderprice}>
    //                 <Text style={{ fontSize: 10, color: ConstantVariables.colors.golden, }}>₹55.00</Text>
    //                 <Text style={{ fontSize: 10, marginLeft: 2, }}>MRP </Text>
    //                 <Text style={{ textDecorationLine: 'line-through', fontSize: 10, }}>₹75.00</Text>

    //             </View>
    //         </View>

    //     )
    // }





    count = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    count1 = () => {
        // console.log('>>>>>')
        if (this.state.count != 1) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }







    render() {







        return (
            <View style={styles.container}>




                <ScrollView
                    contentContainerStyle={{ paddingBottom: 180 }}>

                    {/* <View style={styles.FlatListview}>

                        <FlatList
                            numColumns={3}
                            // horizontal={true} 
                            data={this.state.list}
                            // keyExtractor={(item) => item.id.toString()}

                            renderItem={({ item }) => (
                                <View>

                                    <Image source={item.image} style={styles.img}></Image>



                                </View>
                            )
                            }
                        />
                    </View> */}


                    <View style={styles.mainView}>
                        <View style={styles.listView}>
                            <Carousel
                                // data={this.state.Image}
                                layout={"default"}
                                ref={ref => this.carousel = ref}
                                data={this.state.Image}
                                sliderWidth={365}
                                itemWidth={350}
                                renderItem={this._renderItem}
                                // onSnapToItem={index => this.setState({ activeIndex: index })}
                                onSnapToItem={(index) => { this.onSnapToItem(index) }}
                            />
                        </View>


                        <View style={{ height: 30, width: 50, alignSelf: 'center', marginBottom: 20, flexDirection: 'row' }}>
                            {this.pagination}
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
                        <View style={styles.mrp}>
                            <Text style={styles.bold}>₹55.00</Text>
                            <Text style={styles.text}>MRP </Text>
                            <Text style={{ textDecorationLine: 'line-through' }}>₹75.00</Text>
                            <Text style={styles.save}>Save ₹20.00</Text>
                        </View>

                        <View style={styles.mrp2}>

                            <View style={styles.Metalboxview}>
                                <Text style={styles.Metalboxtext}>Metal/Purity</Text>
                            </View>
                            <View style={styles.circleView}>
                                <Text style={styles.k22}>22k</Text>
                            </View>
                            <Text style={styles.save}>Yellow Gold</Text>
                        </View>
                        <View style={styles.mrp2}>
                            <Text>Qty:</Text>

                            <View style={styles.Quantityview}>
                                <View style={styles.Quantityview1}>
                                    <TouchableOpacity
                                        onPress={this.count1}>
                                        <View>
                                            <Text style={styles.minusetext}>-</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View>
                                        <View>
                                            <Text style={styles.counttext}>{this.state.count}</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity onPress={this.count}>
                                        <View>
                                            <Text style={styles.plusetext}>+</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity


                                style={styles.Metalboxview1}>
                                <View>
                                    <Text style={styles.bynowtext}>BUY NOW</Text>
                                </View>
                            </TouchableOpacity>
                        </View>



                        <View style={styles.twobutton}>
                            <View style={styles.firstview}>
                                <TouchableOpacity 
                                onPress={() => this.props.navigation.navigate('Aboutus')}
                                >
                                    <View style={styles.addtowishview}>
                                        <Text style={styles.addtocarttext}>ADD TO WISHLIST</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                            <View style={styles.firstview}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Feedback')}


                                >
                                    <View style={styles.addtowishview}>
                                        <Text style={styles.addtocarttext}>ADD TO CART</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>
                    <View style={{ borderWidth: 1, width: '120%', marginTop: 15, ...gstyle.borderColor, }} />
                    <View style={styles.mainView2}>
                        <View style={styles.Expectview}>

                            <Text style={styles.applyText}>Expected Shipping Time within 30 business days</Text>
                            <Text style={styles.applyText}> from the date of order recevied</Text>
                        </View>






                        <View style={styles.twobutton}>
                            <View style={styles.firstview}>
                                <TouchableOpacity>
                                    <View style={styles.textView}>

                                        <TextInput
                                            placeholder={"Enter Your Pincode"}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.firstview}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('ProductCategory')}

                                >
                                    <View style={styles.checkview}>
                                        <Text style={styles.addtocarttext}>CHECK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>







                        <View style={styles.Discriptionview}>
                            <Text style={styles.Discriptiontext}>Description</Text>
                            <Text>It is a long established fact
                                that a reader will be distracted by the
                                readable content of a page when looking
                                at its layout</Text>

                            <TouchableOpacity style={styles.READMORE}>
                                <View>
                                    <Text style={styles.bynowtext}>READ MORE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: '18%', marginTop: 50, }}>
                            <ScrollableTabView
                                renderTabBar={(_props) =>
                                    <ScrollableTabBar

                                        activeTab={1}
                                        tabStyle={{
                                            borderColor: 'rgba(0, 0, 0, 0.10)', borderWidth: 1,
                                        }}
                                    />
                                }

                                tabBarUnderlineStyle={{
                                    borderWidth: 0, height: 0,
                                }}

                                tabBarActiveTextColor={ConstantVariables.colors.golden}
                                tabBarInactiveTextColor={'black'}
                                tabBarTextStyle={{ fontSize: 13, }}
                                tabBarActivetabStyle={{ backgroundColor: ConstantVariables.colors.golden, }}
                                onChangeTab={this.tabbarshowfun2}
                            >
                                <View tabLabel='PRODUCT DETAILS'>
                                    <View style={styles.couponView1}>


                                        <View style={styles.totalView}>


                                            <View>

                                                <View style={styles.amountView}>
                                                    <View style={{ width: '50%' }}>

                                                        <Text style={styles.Rstexts}>Design Code</Text>
                                                        <Text style={styles.Rstexts}>Metal/Purity</Text>
                                                        <Text style={styles.Rstexts}>Gold Weight</Text>
                                                        <Text style={styles.Rstexts}>Gross Weight</Text>

                                                    </View>
                                                    <View style={{ borderWidth: 1, height: '100%', borderColor: '#fff', marginRight: 10 }}></View>
                                                    <View style={{ width: '50%' }}>

                                                        <Text style={styles.Rstexts}>GWR-D000573258</Text>
                                                        <Text style={styles.Rstexts}>22k Yellow Gold</Text>
                                                        <Text style={styles.Rstexts}>20.5G</Text>
                                                        <Text style={styles.Rstexts}>20.5G</Text>
                                                    </View>
                                                </View>
                                            </View>



                                        </View>


                                    </View>


                                </View>

                                <View tabLabel=' PRICE BREAKUP'>
                                    <View style={styles.couponView1}>

                                        <View style={styles.totalView}>
                                            <View>

                                                <View style={styles.amountView}>
                                                    <View style={{ width: '50%' }}>

                                                        <Text style={styles.Rstexts}>Design Code</Text>
                                                        <Text style={styles.Rstexts}>Metal/Purity</Text>
                                                        <Text style={styles.Rstexts}>Gold Weight</Text>
                                                        <Text style={styles.Rstexts}>Gross Weight</Text>

                                                    </View>
                                                    <View style={{ borderWidth: 1, height: '100%', borderColor: '#fff', marginRight: 10 }}></View>
                                                    <View style={{ width: '50%' }}>

                                                        <Text style={styles.Rstexts}>GWR-D000573258</Text>
                                                        <Text style={styles.Rstexts}>22k Yellow Gold</Text>
                                                        <Text style={styles.Rstexts}>20.5G</Text>
                                                        <Text style={styles.Rstexts}>20.5G</Text>
                                                    </View>
                                                </View>
                                            </View>



                                        </View>


                                    </View>


                                </View>


                                <View tabLabel='REVIEW(1)'>
                                    <View style={styles.couponView1}>

                                        <View style={styles.totalView}>
                                            <View>

                                                <View style={styles.amountView}>
                                                    <View style={{ width: '50%' }}>

                                                        <Text style={styles.Rstexts}>Design Code</Text>
                                                        <Text style={styles.Rstexts}>Metal/Purity</Text>
                                                        <Text style={styles.Rstexts}>Gold Weight</Text>
                                                        <Text style={styles.Rstexts}>Gross Weight</Text>

                                                    </View>
                                                    <View style={{ borderWidth: 1, height: '100%', borderColor: '#fff', marginRight: 10 }}></View>
                                                    <View style={{ width: '50%' }}>

                                                        <Text style={styles.Rstexts}>GWR-D000573258</Text>
                                                        <Text style={styles.Rstexts}>22k Yellow Gold</Text>
                                                        <Text style={styles.Rstexts}>20.5G</Text>
                                                        <Text style={styles.Rstexts}>20.5G</Text>
                                                    </View>
                                                </View>
                                            </View>



                                        </View>


                                    </View>


                                </View>

                            </ScrollableTabView>


                        </View>



                        <Text style={styles.youmighttext}>You Might Also Like</Text>
                        {/* <View style={{ flexDirection: 'row' }}>
                            <View>

                                <Carousel

                                    ref={ref => this.carousel = ref}
                                    data={this.state.Image1}
                                    currentIndex={2}
                                    // inactiveSlideAlignment={'flex-start'}
                                    // layout={'default'} layoutCardOffset={`20`}
                                    // slider={{backgroundColor:'red'}}
                                    activeSlideOffset={`2`}
                                    sliderWidth={350}
                                    itemWidth={150}
                                    renderItem={this._renderItem1}
                                    onSnapToItem={index => this.setState({ activeIndex: index })} />


                            </View>


                        </View> */}







                        <View style={styles.mainhorizontalscroolview}>


                            <ScrollView style={styles.mainhorizontalscrool}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', }}>

                                    <View style={styles.horizontalscrool}>

                                        <View style={{ flexDirection: 'row', }}>
                                            <TouchableOpacity>
                                                <View style={styles.newview}>
                                                    <Text style={styles.newtext}>
                                                        New
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>

                                            <View style={styles.heartimage}>
                                                <TouchableOpacity>
                                                    <Image
                                                        style={{ width: 20, height: 20 }}
                                                        source={require('../assets/heart.png')}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.black15}>

                                            <TouchableOpacity>
                                                <View style={styles.blackview}>
                                                    <Text style={styles.newtext}>
                                                        15%
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>
                                        </View>




                                        <TouchableOpacity>
                                            <Image
                                                style={styles.viewcrausalImage}
                                                source={require('../assets/diamond.png')}
                                            ></Image>
                                        </TouchableOpacity>

                                        <Text style={styles.Goldtext}>Gold</Text>
                                        <Text style={styles.Perfecttext}>Perfect Diamond Jewellery</Text>
                                        <View style={styles.bottomsliderprice}>
                                            <Text style={{ ...gstyle.ordertext, color: ConstantVariables.colors.golden, }}>₹55.00</Text>
                                            <Text style={{ ...gstyle.ordertext, marginLeft: 2, }}>MRP </Text>
                                            <Text style={{ textDecorationLine: 'line-through', ...gstyle.ordertext, }}>₹75.00</Text>
                                        </View>

                                    </View>

                                    <View style={styles.horizontalscrool2}>

                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <TouchableOpacity>
                                                <View style={styles.newview}>
                                                    <Text style={styles.newtext}>
                                                        New
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>

                                            <View style={styles.heartimage}>
                                                <TouchableOpacity>
                                                    <Image
                                                        style={{ width: 20, height: 20 }}
                                                        source={require('../assets/heart.png')}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.black15}>

                                            <TouchableOpacity>
                                                <View style={styles.blackview}>
                                                    <Text style={styles.newtext}>
                                                        15%
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>
                                        </View>




                                        <TouchableOpacity>
                                            <Image
                                                style={styles.viewcrausalImage}
                                                source={require('../assets/diamond.png')}
                                            ></Image>
                                        </TouchableOpacity>

                                        <Text style={styles.Goldtext}>Gold</Text>
                                        <Text style={styles.Perfecttext}>Perfect Diamond Jewellery</Text>
                                        <View style={styles.bottomsliderprice}>
                                            <Text style={{ ...gstyle.ordertext, color: ConstantVariables.colors.golden, }}>₹55.00</Text>
                                            <Text style={{ ...gstyle.ordertext, marginLeft: 2, }}>MRP </Text>
                                            <Text style={{ textDecorationLine: 'line-through', ...gstyle.ordertext, }}>₹75.00</Text>
                                        </View>
                                    </View>


                                    <View style={styles.horizontalscrool2}>

                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <TouchableOpacity>
                                                <View style={styles.newview}>
                                                    <Text style={styles.newtext}>
                                                        New
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>

                                            <View style={styles.heartimage}>
                                                <TouchableOpacity>
                                                    <Image
                                                        style={{ width: 20, height: 20 }}
                                                        source={require('../assets/heart.png')}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.black15}>

                                            <TouchableOpacity>
                                                <View style={styles.blackview}>
                                                    <Text style={styles.newtext}>
                                                        15%
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>
                                        </View>




                                        <TouchableOpacity>
                                            <Image
                                                style={styles.viewcrausalImage}
                                                source={require('../assets/diamond.png')}
                                            ></Image>
                                        </TouchableOpacity>

                                        <Text style={styles.Goldtext}>Gold</Text>
                                        <Text style={styles.Perfecttext}>Perfect Diamond Jewellery</Text>
                                        <View style={styles.bottomsliderprice}>
                                            <Text style={{ ...gstyle.ordertext, color: ConstantVariables.colors.golden, }}>₹55.00</Text>
                                            <Text style={{ ...gstyle.ordertext, marginLeft: 2, }}>MRP </Text>
                                            <Text style={{ textDecorationLine: 'line-through', ...gstyle.ordertext, }}>₹75.00</Text>
                                        </View>

                                    </View>


                                    <View style={styles.horizontalscrool2}>

                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <TouchableOpacity>
                                                <View style={styles.newview}>
                                                    <Text style={styles.newtext}>
                                                        New
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>

                                            <View style={styles.heartimage}>
                                                <TouchableOpacity>
                                                    <Image
                                                        style={{ width: 20, height: 20 }}
                                                        source={require('../assets/heart.png')}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.black15}>

                                            <TouchableOpacity>
                                                <View style={styles.blackview}>
                                                    <Text style={styles.newtext}>
                                                        15%
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>
                                        </View>




                                        <TouchableOpacity>
                                            <Image
                                                style={styles.viewcrausalImage}
                                                source={require('../assets/diamond.png')}
                                            ></Image>
                                        </TouchableOpacity>

                                        <Text style={styles.Goldtext}>Gold</Text>
                                        <Text style={styles.Perfecttext}>Perfect Diamond Jewellery</Text>
                                        <View style={styles.bottomsliderprice}>
                                            <Text style={{ ...gstyle.ordertext, color: ConstantVariables.colors.golden, }}>₹55.00</Text>
                                            <Text style={{ ...gstyle.ordertext, marginLeft: 2, }}>MRP </Text>
                                            <Text style={{ textDecorationLine: 'line-through', ...gstyle.ordertext, }}>₹75.00</Text>
                                        </View>

                                    </View>

















                                </View>
                            </ScrollView>

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



    FlatListview: {
        width: '100%',
        // marginHorizontal: '3%',
        // justifyContent: 'center',
        // alignItems: "center"


    },

    img: {
        width: 95,
        height: 70,
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 / 2
    },


    mainView: {
        // height:'90%',
        paddingHorizontal: 10,
        // marginLeft:10,
        width: "100%",
        marginTop: 10,


    },


    mainView2: {
        // height:'90%',
        paddingHorizontal: 10,
        width: "100%",
        // marginTop: 1,


    },

    mainhorizontalscroolview: {
        height: 270,
        flexDirection: 'row',
        // width:800,


    },

    mainhorizontalscrool: {
        height: 210,
        marginTop: 20,
        // width: 10,
        marginLeft: 10,
    },


    horizontalscrool: {

        width: '25%',
        borderWidth: 1,
        ...gstyle.borderColor,
        ...gstyle.center,
        // marginTop: 15,
        // padding: 15,
        alignItems: 'center',
        // marginLeft: 10
        // backgroundColor: 'red',

    },


    horizontalscrool2: {

        width: '25%',
        borderWidth: 1,
        ...gstyle.borderColor,
        ...gstyle.center,
        // marginTop: 15,
        // padding: 15,
        alignItems: 'center',
        marginLeft: 10
        // backgroundColor: 'red',

    },

    newview: {
        borderWidth: 1,
        borderRadius: 40 / 2,
        width: 50,
        ...gstyle.center,
        borderColor: ConstantVariables.colors.golden,
        backgroundColor: ConstantVariables.colors.golden,
        // marginTop:5,



    },

    newtext: {
        color: '#fff'
    },

    black15: {
        marginRight: 110,
        marginBottom: 5,
        // marginTop: 5,



    },

    blackview: {
        borderWidth: 1,
        borderRadius: 40 / 2,
        width: 50,
        ...gstyle.center,
        // borderColor: ConstantVariables.colors.golden,
        backgroundColor: ConstantVariables.colors.black,
        marginTop: 5,
    },





    productView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Quantityview1: {
        borderWidth: 1,
        flexDirection: 'row',
        // marginLeft: 10,
        ...gstyle.borderColor,
        width: 80,
        ...gstyle.center
    },
    Quantityview: {
        borderWidth: 2,
        padding: 10,
        borderColor: ConstantVariables.colors.golden,
    },

    minusetext: {
        // color: ConstantVariables.colors.golden,
        ...gstyle.alignSelf,
        fontSize: 25,
        marginRight: 20,



    },
    plusetext: {
        color: ConstantVariables.colors.golden,
        // ...gstyle.textfont, 
        fontSize: 20,
        marginTop: 3,
    },
    counttext: {
        // color: ConstantVariables.colors.golden,
        fontSize: 12,
        marginTop: 9,
        marginRight: 20,
    },

    crausalImage: {
        height: 135,
        width: 300,
        ...gstyle.alignSelf,
        // marginLeft: 9,
        //    alignItems:'center'

    },

    viewcrausalImage: {
        height: 75,
        width: 75,
        ...gstyle.alignSelf,
        // justifyContent:'space-between'


    },

    Goldtext: {
        ...gstyle.textfont
    },

    heartimage: {
        justifyContent: 'flex-end',
        marginLeft: 90
    },

    listView: {
        width: '100%',
        borderWidth: 1,
        ...gstyle.borderColor,
        ...gstyle.center,
        marginTop: 15,
        padding: 15,
        // backgroundColor:'green'

    },
    bottomslider: {
        width: '100%',
        borderWidth: 1,
        ...gstyle.borderColor,
        ...gstyle.center,
        marginTop: 15,
        padding: 15,
        alignItems: 'center',
        // marginLeft:50
        // backgroundColor: 'red',
    },

    youmighttext: {
        ...gstyle.alignSelf,
        marginTop: 80,
        ...gstyle.textfont,
        ...gstyle.fontWeight,

    },
    Perfecttext: {
        ...gstyle.center,
        // marginTop: 10,
        fontSize: 19,
        ...gstyle.ordertext,
        ...gstyle.fontWeight,
    },



    iconView: {
        width: '30%',
        ...gstyle.alignSelf,
        ...gstyle.center,

    },
    twobutton: {

        width: '100%', flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 10,

    },

    firstview: { width: '48%', },

    textinputbutton: {
        flexDirection: 'row',
        width: '62%',
        marginTop: 20,
        justifyContent: 'space-between',

    },
    addtowishview: {


        borderWidth: 1, borderColor: ConstantVariables.colors.golden,
        backgroundColor: ConstantVariables.colors.golden, ...gstyle.center,
        height: 45,


    },

    addtowishtext: {
        ...gstyle.button_text,
        ...gstyle.textfont,
        // ...gstyle.button_text,
        ...gstyle.fontWeight,
    },

    addtocartview: {
        borderWidth: 1, borderColor: ConstantVariables.colors.golden,
        backgroundColor: ConstantVariables.colors.golden, width: '175%', ...gstyle.center,
        height: 50,
    },
    TextInputhview: {

        borderWidth: 1, borderColor: ConstantVariables.colors.golden,
        width: '120%', ...gstyle.center, ...gstyle.borderColor,
        height: 40,

    },

    checkview: {
        borderWidth: 1, borderColor: ConstantVariables.colors.golden,
        backgroundColor: ConstantVariables.colors.golden, ...gstyle.center,
        height: 45,
    },
    addtocarttext: {
        ...gstyle.button_text,
        ...gstyle.textfont,
        // ...gstyle.button_text,
        ...gstyle.fontWeight,
    },
    Expectview: {
        marginTop: 40,
        ...gstyle.center,
        width: '100%'
    },

    Deliverytext: {
        marginTop: 5,
        ...gstyle.textfont,
    },
    detailsView: {
        width: '70%',
        flexDirection: 'row',
        paddingBottom: 10,

    },

    mrp: {
        flexDirection: 'row',
        // marginTop: 10,
        alignItems: 'center',
    },


    mrp2: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },

    bottomsliderprice: {
        flexDirection: 'row',
        // marginTop: 20,
        alignItems: 'center',
    },

    Threebuttons: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        // justifyContent:'space-between'
    },


    Metalboxview1: {
        height: 35,
        marginLeft: 10,
        backgroundColor: ConstantVariables.colors.golden,
        ...gstyle.center,
        width: '40%'
    },

    READMORE: {
        height: 35,
        // marginLeft: 10,
        marginTop: 20,
        backgroundColor: ConstantVariables.colors.golden,
        ...gstyle.center,
        width: '40%'
    },

    text: {
        marginLeft: 10,

    },

    bold: {
        ...gstyle.fontWeight,
    },

    save: {
        marginLeft: 10,
        color: ConstantVariables.colors.golden,

    },
    k22: {
        color: ConstantVariables.colors.golden,
        // ...gstyle.fontWeight,
    },



    Metalboxview: {
        borderWidth: 2,
        padding: 10,
        borderColor: ConstantVariables.colors.golden,
    },
    Threebuttonview: {
        borderWidth: 1,
        height: 40,
        // padding: 10,
        width: '34%',
        ...gstyle.center,
        ...gstyle.borderColor,
    },
    Metalboxtext: {
        color: ConstantVariables.colors.golden,

    },
    PRODUCTboxtext: {
        color: ConstantVariables.colors.golden,
        // ...gstyle.textfont,
        // ...gstyle.button_text,
        ...gstyle.fontWeight,
        fontSize: 11
    },
    PRICEboxtext: {
        ...gstyle.fontWeight,
        fontSize: 11
    },

    bynowtext: {
        color: ConstantVariables.colors.white,
        ...gstyle.button_text,
        ...gstyle.textfont,
        // ...gstyle.button_text,
        ...gstyle.fontWeight,
    },

    circleView: {
        borderWidth: 2,
        borderRadius: 40 / 2,
        height: 40,
        width: 40,

        ...gstyle.center,
        borderColor: ConstantVariables.colors.golden,
        marginLeft: 10,


    },



    priceView: {
        marginTop: 15,
        ...gstyle.center,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    priceText: {
        ...gstyle.ordertext,
        ...gstyle.fontWeight,
        fontFamily: 'arial'
    },

    priceAmountText: {
        fontFamily: 'arial',
        ...gstyle.priceAmountText,
    },

    quantityText: {
        ...gstyle.ordertext,
        paddingLeft: 25,
        fontFamily: 'arial',
        ...gstyle.fontWeight,
    },
    Quantityview: {
        flexDirection: 'row',
        marginLeft: 10,

    },
    minusetext: {
        // color: ConstantVariables.colors.golden,
        ...gstyle.alignSelf,
        fontSize: 25,
        marginRight: 5,
    },

    plusetext: {
        // color: ConstantVariables.colors.golden,
        fontSize: 18,
        marginTop: 3,
    },
    counttext: {
        color: ConstantVariables.colors.golden,
        fontSize: 12,
        marginTop: 3,
        marginRight: 5
    },



    wishText: {
        marginTop: 15,
        color: ConstantVariables.colors.golden,
        ...gstyle.textfont,
    },

    contentView: {
        width: '85%',
        marginTop: 10,
    },

    line: {
        width: width,
        ...gstyle.borderColor,
        borderWidth: 1,
        marginTop: 40,
        ...gstyle.alignSelf,
    },

    diamondText: {
        fontFamily: 'arial',
        ...gstyle.fontWeight,
        ...gstyle.ordertext,
    },

    crossView: {
        width: '15%',
        alignItems: 'center',
        marginTop: 4,
    },

    couponView: {
        width: "100%",
        marginTop: 5,
        ...gstyle.center,
        flexDirection: 'row',

    },

    couponView1: {
        height: "100%",
        marginTop: 1,
        // alignItems: 'center',
        marginLeft: 5,

    },

    applyText: {
        ...gstyle.ordertext,
        ...gstyle.fontWeight,

    },

    textView: {

        borderWidth: 1, borderColor: ConstantVariables.colors.golden,
        ...gstyle.center, ...gstyle.borderColor,
        height: 45,

    },

    inputText: {

        ...gstyle.borderColor,
        borderWidth: 1,
        paddingVertical: 10,
        width: '60%',
        paddingLeft: 15
    },

    couponView2: {
        backgroundColor: ConstantVariables.colors.golden,
        height: 50,
        width: '48%',
        paddingVertical: 10,
        ...gstyle.center,
        marginLeft: 2

    },

    couponText: {
        color: ConstantVariables.colors.white,

        paddingHorizontal: 5,
        fontFamily: 'arial',

        ...gstyle.fontWeight,

        ...gstyle.center,


    },

    totalView: {
        // height:'100%',
        width: '101%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        ...gstyle.borderColor,
        // marginTop: 1,
        ...gstyle.alignSelf,
        backgroundColor: 'rgba(0, 0, 0, 0.10)',
        // marginLeft:5,


    },

    amountView: {
        flexDirection: 'row',
        marginLeft: 5,
        height: 150,

        // justifyContent: 'space-between',
    },
    amounttexts: {
        ...gstyle.textfont,
    },
    Rstexts: {
        ...gstyle.fontWeight,
    },
    amountView1: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    checkText: {
        // ...gstyle.textfont,
        // ...gstyle.button_text,
        ...gstyle.fontWeight,

        color: ConstantVariables.colors.white,
        fontFamily: 'arial'
    },


    Discriptionview: {
        ...gstyle.center,
        marginTop: 40,
        // ...gstyle.ordertext,
        // ...gstyle.fontWeight,
    },


    Discriptiontext: {
        ...gstyle.alignSelf,
        // marginTop: 10,
        ...gstyle.textfont,
        ...gstyle.fontWeight,
        marginBottom: 10

    },

    map: {
        marginRight: 0,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    Mapbackground: {
        // backgroundColor: '#ffff',
        // margin: 5,
        // marginTop: 10,
        // paddingBottom: 10,
        // borderColor: '#2222',
        // borderWidth: .5,
        // borderRadius: 8,
        // backgroundColor: "#ffff",
        // shadowColor: "#C6C6C6",

        // shadowOffset: {
        //   width: 100,

        // },
        // shadowOpacity: .04,


        // elevation: 2,
    },
    img: {
        marginLeft: '2%',
        marginTop: '2%',
        width: 160,
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    //   txtValue:{
    //     alignSelf: 'center',
    //      marginTop: 10
    //   },


})


