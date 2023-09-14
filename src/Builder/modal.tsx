// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
//   Image,
//   Dimensions,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from "react-native";
// import { X2x } from "../assets";
// import { COLORS } from "../../../../framework/src/Globals";
// import { fakeDataOngoing } from "./OngoingMockData";
// import CommentsBox from "./CommentsBox";
// import ViewMyFeedOngoingController from "./ViewMyFeedOngoingController";
// import { OngoingItemCustomModalProps } from "../consts";

// const screenHeight = Dimensions.get("window").height;

// interface ModalProps extends OngoingItemCustomModalProps {}

// interface State {
//   // image: string | null;
//   // itemData: typeof fakeDataOngoing[0];
//   item: any;
// }

// class OngoingItemCustomModal extends Component<ModalProps, State> {
//   constructor(props: ModalProps) {
//     super(props);
//     this.state = {
//       // itemData: null,
//       item: null,
//     };
//   }
//   componentDidMount(): void {
//     console.log("Custom Modal Component did mount");
//     //   const paramsData = this.getParmsData();
//     //   if (paramsData) {
//     //     console.log("Custom Modal Ongoing past parms", paramsData);
//     //     this.setState({ item: paramsData });
//     //   } else {
//     //     console.log("Params data is not available");
//     //   }
//   }
//   handleToggleModal = () => {
//     this.props.navigation.goBack();
//   };

//   getParmsData = () => {
//     // return this.props.route.params.ongoingItem;
//   };

//   render() {
//     const value=this.props.route.params.ongoingItem;
//     const { item } = this.state;
//     //const { image } = item;
//     console.log(
//       "OngoingItemCustomModal is renderin ##########################################################################################g",
//       item
//     );
//     return (
//       <View>
//         <View style={styles.shadowOverlay} />
//         <View style={styles.modalOverlay}>
//           {/* <View style={styles.modalContent}>
//             <View
//               style={{
//                 justifyContent: "flex-end",
//                 alignItems: "flex-end",
//               }}
//             >
//               <TouchableOpacity onPress={this.handleToggleModal}>
//                 <Image source={X2x} style={styles.close} />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.content}>
//               {item?.image !== null ? (
//                 <View style={{ height: 550 }}>
//                   <Image
//                     source={{ uri: item?.image }}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       marginTop: 10,
//                     }}
//                     resizeMode="stretch"
//                   />
//                 </View>
//               ) : (
//                 <View>
//                   <Text>Error</Text>
//                 </View>
//               )}
//               <View style={styles.reelView}>
//                 <Text style={styles.reelText}>{item.attributes.type}</Text>
//               </View>

//               <CommentsBox />
//             </View>
//           </View> */}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   modalOverlay: {
//     // flex: 7,
//     //marginTop: 75,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     // backgroundColor: "white",
//     // // marginTop: 80,

//     // // borderTopLeftRadius: 20,
//     // // borderTopRightRadius: 20,
//     // height: screenHeight,
//   },
//   close: { width: 20, height: 20, marginTop: 20, marginRight: 20 },
//   shadowOverlay: {
//     // position: "absolute",
//     // top: 0,
//     // left: 0,
//     // right: 0,
//     height: 75,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     //flex: 1,
//   },
//   modalContent: {
//     backgroundColor: "white",
//     // marginTop: 80,

//     // borderTopLeftRadius: 20,
//     // borderTopRightRadius: 20,
//     height: screenHeight,
//   },
//   content: {
//     flexDirection: "column",
//     paddingHorizontal: 12,
//     height: screenHeight,
//   },
//   reelView: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottomWidth: 0.5,
//     borderBottomColor: COLORS.lightGray,
//     width: "100%",
//     height: 60,
//     marginBottom: 10,
//   },
//   reelText: {
//     color: COLORS.black,
//     fontSize: 22,
//     fontWeight: "700",
//   },
// });

// export default OngoingItemCustomModal;
