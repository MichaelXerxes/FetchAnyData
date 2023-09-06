// import React, { Component } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   ImageBackground,
//   Image,
//   Dimensions,
//   StatusBar,
// } from "react-native";
// import MyFeedModal from "./MyFeedModal";
// import {
//   backgroundImageTopBar,
//   down2x,
//   backgroundImageScreen,
//   left_arrow_white4x,
//   infodetail2x,
//   netflixImage,
//   amazonImage,
//   disneyImage,
// } from "../assets";
// import { COLORS } from "../../../../framework/src/Globals";
// import UniversalLabelChild from "../../../../components/src/UniversalLabelChild";
// import OngoingComponentTabs from "./OngoingComponentTabs";
// import OngoingDropDown from "./OngoingDropDown";
// import { MockMyFeed } from "./MyFeedMockData";
// import CatalogueController from "../CatalogueController";

// const screenWidth = Dimensions.get("window").width;

// interface ViewMyFeedOngoingPropos {
//   item: MockMyFeed;
//   route: { params: any };
//   onClose: () => void;
//   navigationFromBlock: any;
//   navigation: any;
// }
// interface ViewMyFeedOngoingState {
//   isViewVisible: boolean;
//   selectedItem: any;
//   isModalVisible: boolean;
//   isDropdownVisible: boolean;
//   item: any;
// }

// class ViewMyFeedOngoing extends Component<
//   ViewMyFeedOngoingPropos,
//   ViewMyFeedOngoingState
// > {
//   constructor(props: ViewMyFeedOngoingPropos) {
//     super(props);
//     this.state = {
//       isViewVisible: false,
//       selectedItem: null,
//       isModalVisible: false,
//       isDropdownVisible: false,
//       item: null,
//     };
//   }

//   toggleModalVisibility = () => {
//     this.setState({ isModalVisible: !this.state.isModalVisible });
//   };
//   toggleDropdownVisibility = () => {
//     this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
//   };
//   getCurrentImage(item: MockMyFeed) {
//     console.log("imageSTreamer    ", item);
//     switch (item.imageStreamer) {
//       case "netflix.png":
//         return netflixImage;
//       case "amazon.png":
//         return amazonImage;
//       case "disney.png":
//         return disneyImage;
//       default:
//         return null;
//     }
//   }
//   componentDidMount(): void {
//     const { item } = this.props.route.params;
//     this.setState({ item: item });
//     console.log("RETURN    ", item);
//   }

//   render() {
//     const { item } = this.state;
//     // console.log("RETURN    ", item);

//     return (
//       <View style={styles.flexOne}>
//         <StatusBar translucent backgroundColor="transparent" />

//         <ImageBackground
//           source={backgroundImageScreen}
//           style={styles.container}
//         >
//           {/* <OngoingDropDown
//             isVisible={this.state.isDropdownVisible}
//             onClose={this.toggleDropdownVisibility}
//           />
//           <ImageBackground style={styles.topbar} source={backgroundImageTopBar}>
//             <View style={styles.imageRow}>
//               <TouchableOpacity
//                 onPress={() => {
//                   this.props.onClose();
//                 }}
//                 testID="leftArrowOngoing"
//               >
//                 <Image source={left_arrow_white4x} style={styles.arrowLeft} />
//               </TouchableOpacity>
//               <View style={styles.imageLogolView}>
//                 <Image
//                   source={this.getCurrentImage(item)}
//                   style={styles.imageStyle}
//                 />
//               </View>

//               <View style={styles.topBarViewText}>
//                 <Text style={styles.titleImageRowText}>Fast Production</Text>
//                 <Text style={styles.logoTopBarLink}>
//                   http ://hardcodelink.com/in/
//                 </Text>
//                 <TouchableOpacity>
//                   <Text style={styles.viewDetailText}>View Detail</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.flexOne} />
//               <TouchableOpacity>
//                 <Image source={infodetail2x} style={styles.arrowLeft} />
//               </TouchableOpacity>
//             </View>
//           </ImageBackground>
//           <View style={{ marginTop: 80 }}>
//             <View style={styles.rowUnderTopBar}>
//               <View style={{ flex: 1, justifyContent: "center" }}>
//                 <Text style={styles.colorDarkBlueGrey}>Showing 37 Results</Text>
//               </View>
//               <View
//                 style={{
//                   flexDirection: "row",
//                 }}
//               >
//                 <Text style={styles.colorBlack}>Approved</Text>
//                 <TouchableOpacity onPress={this.toggleDropdownVisibility}>
//                   <Image source={down2x} style={styles.dow2x} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           <View
//             style={{
//               paddingHorizontal: 3,
//               flex: 1,
//               marginTop: 5,
//               marginBottom: 5,
//             }}
//           >
//             <OngoingComponentTabs activeOngoingTab={0} />
//           </View>
//           <View style={styles.bottomButton}>
//             <View style={styles.buttonStyle}>
//               <TouchableOpacity
//                 testID="bottomButtonAddOngoing"
//                 onPress={this.toggleModalVisibility}
//               >
//                 <Text style={styles.buttonStyleText}>+ Add Your Creative</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <MyFeedModal
//             isModalVisible={this.state.isModalVisible}
//             handleToggleModal={this.toggleModalVisibility}
//             navigationFromParrent={this.props.navigation}
//           />
//           {this.state.isModalVisible ? (
//             <View />
//           ) : (
//             <View style={styles.overflowView}>
//               <UniversalLabelChild
//                 option="My Feed FastProduction"
//                 onButtonPressCampaigneLabel={() => {}}
//               />
//             </View>
//           )} */}
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height + 50,
//   },
//   flexOne: { flex: 1 },
//   topbar: {
//     paddingHorizontal: 20,
//     width: screenWidth,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     paddingTop: 30,
//     overflow: "hidden",
//     shadowColor: "#000000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.6,
//     shadowRadius: 10,
//     zIndex: 1,
//     elevation: 1,
//     height: 140,
//   },
//   imageRow: {
//     flexDirection: "row",
//     marginTop: 10,
//     alignItems: "center",
//     height: 55,
//   },
//   imageLogolView: {
//     width: 37,
//     height: 37,
//     borderRadius: 5,
//     backgroundColor: COLORS.white,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 10,
//   },
//   imageStyle: {
//     width: 43,
//     height: 43,
//     borderRadius: 5,
//   },
//   topBarViewText: { alignItems: "flex-start", marginLeft: 10 },
//   titleImageRowText: {
//     flex: 3,
//     fontSize: 17,
//     color: COLORS.white,
//     fontWeight: "bold",
//     marginTop: 5,
//   },
//   logoTopBarLink: { color: COLORS.white, fontSize: 12 },
//   viewDetailText: {
//     color: COLORS.white,
//     fontSize: 10,
//     textDecorationLine: "underline",
//   },
//   dow2x: {
//     width: 10,
//     height: 5,
//     marginTop: 5,
//     marginLeft: 3,
//   },
//   iconImageRowStyle: { margin: 10 },
//   rowUnderTopBar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//   },
//   overflowView: {
//     marginHorizontal: 15,
//     position: "absolute",
//     left: 0,
//     right: 0,
//     borderRadius: 10,
//     shadowColor: "#000000",
//     shadowOffset: { width: 20, height: -25 },
//     shadowOpacity: 0.5,
//     shadowRadius: 2,
//     elevation: 15,
//     backgroundColor: COLORS.white,
//     zIndex: 110,
//     height: 90,
//     top: 110,
//   },
//   bottomButton: {
//     alignItems: "center",
//   },
//   buttonStyle: {
//     width: "80%",
//     backgroundColor: "#5F5347",
//     height: 50,
//     justifyContent: "center",
//     borderRadius: 5,
//   },
//   buttonStyleText: {
//     color: "#D7CCC2",
//     fontSize: 17,
//     fontWeight: "bold",
//     alignItems: "center",
//     justifyContent: "center",
//     alignContent: "center",
//     textAlign: "center",
//   },
//   arrowLeft: {
//     width: 18,
//     height: 18,
//   },
//   colorBlack: { color: COLORS.black },
//   colorDarkBlueGrey: { color: COLORS.darkBlueGrey },
// });

// export default ViewMyFeedOngoing;
