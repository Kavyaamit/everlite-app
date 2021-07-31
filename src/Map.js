
// import React, { Component } from 'react';
// import { SafeAreaView, Text, View, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native';

// import MapView, { Marker, PROVIDER_GOOGLE, } from 'react-native-maps';
// // import Maplocation from '../../../assets/svgImage/Maplocation.svg';
// // import Blackbackarrow from '../../../assets/svgImage/blackarrow.svg';
// const { width, height } = Dimensions.get('screen');

// const MyStatusBar = ({ backgroundColor, ...props }) => (
//     <View style={[styles.statusBar, { backgroundColor }]}>
//         <SafeAreaView>
//             <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//         </SafeAreaView>
//     </View>
// );

// export default class Map extends Component {




//     render() {

//         return (
//             <View style={styles.container}>
//                 <View style={{ height: height, width: width }}>
//                     <MapView
//                         style={styles.map}
//                         initialRegion={{
//                             //latitude: currentLatitude,
//                             //longitude: currentLongitude,
//                             latitude: 22.7196,
//                             longitude: 75.8577,
//                             latitudeDelta: 0.01,
//                             longitudeDelta: 0.01,
//                         }}
//                         provider={PROVIDER_GOOGLE}
//                     >
//                     </MapView>
//                     {/* <View style={{ marginTop: 90, position: 'absolute' }}>
//                         <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                             
//                             <Blackbackarrow />
//                         </TouchableOpacity>
//                     </View> */}

//                 </View>

                
//                 <View style={{ backgroundColor: '#fff', width: '100%', bottom: 0, position: 'absolute', height: '30%' }}>
//                     <TouchableOpacity  onPress={() => this.props.navigation.navigate('locationScreen')}>
//                         <View style={{ flexDirection: 'row', borderRadius: 5, width: '20%', backgroundColor: '#EEF2F6', marginTop: '5%', alignSelf: 'center', padding: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 250 }}>

//                             <Text style={{ fontSize: 15, color: '#07BD80', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', }}>Change</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <View style={{ flexDirection: 'row', marginLeft: '10%', alignItems: 'center' }}>
//                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Map')}>
//                             {/* <Maplocation
//                             /> */}
//                         </TouchableOpacity>
//                         <Text style={{ color: '#07BD80', fontSize: 20, marginLeft: '5%' }}>Koyambedu</Text>
//                     </View>
//                     <View style={{ marginLeft: '10%', marginTop: '1%' }}>
//                         <Text>
//                             no.13,Kanniyamman nagar,Koyambedu,
//                         </Text>
//                         <Text>
//                             Chennai-600095
//                         </Text>
//                     </View>




//                     <TouchableOpacity>
//                         <View style={{ flexDirection: 'row', borderRadius: 5, width: '80%', backgroundColor: '#07BD80', marginTop: '5%', alignSelf: 'center', padding: 15, justifyContent: 'center', alignItems: 'center', }}>
//                             <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', }}>CONFIRM lOCATION</Text>
//                         </View>
//                     </TouchableOpacity>

//                 </View>

//             </View>



//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         height: height - 10,
//         width: width,
//         backgroundColor: '#ffffff',
//         flex: 1,
//     },
//     header: {
//         backgroundColor: '#07BD80',
//         height: '15%',
//         width: '100%',
//         flexDirection: 'row'

//     },

//     map: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//     },


// });