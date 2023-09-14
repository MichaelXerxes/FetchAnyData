// import React, { ReactNode } from "react";
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   ImageBackground,
//   StatusBar,
// } from "react-native";
// import { backgroundImageScreen } from "../../blocks/catalogue/src/assets";
// import UniversalNavigationCustomButton from "./UniversalNavigationCustomButton";
// import UniversalCustomTopBar from "./UniversalCustomTopBar";
// import UniversalLabelChild from "./UniversalLabelChild";
// import { COLORS } from "../../framework/src/Globals";

// export type OptionType = "Campaign" | "My Feed" | "Profile" | "Wallet";
// export type OptionTypeUniversal =
//   | "Campaign"
//   | "CampaigneFastProduction"
//   | "My Feed"
//   | "My Feed Current Balance"
//   | "My Feed FastProduction"
//   | "Profile"
//   | "Wallet";
// interface ButtonInterface {
//   label: OptionType;
// }
// export type CampaigneLabelButtons = "Open" | "Applied" | "Assign";

// const NAV_BUTTONS: ButtonInterface[] = [
//   { label: "Campaign" },
//   { label: "My Feed" },
//   { label: "Profile" },
//   { label: "Wallet" },
// ];
// const screenWidth = Dimensions.get("window").width;
// const screenHeight = Dimensions.get("window").height;

// interface Props {
//   children: ReactNode;
//   typeNameProp: OptionType;
//   typeUniversalLabel: OptionTypeUniversal;
//   labelHeight?: number;
//   topBarHeight?: number;
//   topBarAbsoluteTopPosition?: number;
//   topBarTitle: string;
//   onCampaigneLabelChange?: (selectedButton: string) => void;
//   goToSettingsBlock?: () => void;
//   completeKYCPArrent?: () => void;
//   goToAnyBlock: (label: string) => Promise<void>;
// }
// class UniversalAppBackGroundAllInOne extends React.Component<Props> {
//   constructor(props: Props) {
//     super(props);
//   }

//   handleButtonPress = (selectedButton: string) => {
//     if (this.props.onCampaigneLabelChange) {
//       this.props.onCampaigneLabelChange(selectedButton);
//     }
//   };

//   render() {
//     const {
//       children,
//       labelHeight = 80,
//       topBarHeight = 200,
//       topBarAbsoluteTopPosition = 160,
//       typeNameProp = "Campaign",
//       topBarTitle = "Campaign",
//       goToSettingsBlock,
//       completeKYCPArrent,
//       typeUniversalLabel = "Campaign",
//       goToAnyBlock,
//     } = this.props;

//     return (
//       <View style={styles.container}>
//         <StatusBar translucent backgroundColor="transparent" />
//         <View style={styles.viewImageBackground}>
//           <ImageBackground
//             style={styles.containerImageBackground}
//             source={backgroundImageScreen}
//           >
//             <View style={styles.view}>{children}</View>
//           </ImageBackground>
//           <View style={styles.topbarView}>
//             <UniversalCustomTopBar
//               option={typeNameProp}
//               topBarHeight={topBarHeight}
//               titleImageRow={topBarTitle}
//               iconImageRowName="bell-o"
//               goToAnyBlock={goToSettingsBlock}
//             />
//           </View>
//           <View
//             style={[
//               styles.overflowView,
//               { height: labelHeight, top: topBarAbsoluteTopPosition },
//             ]}
//           >
//             <UniversalLabelChild
//               option={typeUniversalLabel}
//               onButtonPressCampaigneLabel={this.handleButtonPress}
//               completeKYC={completeKYCPArrent}
//             />
//           </View>
//         </View>
//         <View style={styles.navigationBottomView}>
//           {NAV_BUTTONS.map((button) => (
//             <UniversalNavigationCustomButton
//               // navigation={navigation}
//               label={button.label}
//               selected={typeNameProp === button.label}
//               //  onLabelSelect={onLabelSelect}
//               goToAnyBlock={goToAnyBlock}
//             />
//           ))}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: "relative",
//     width: screenWidth,
//     height: screenHeight,
//     backgroundColor: "white",
//   },
//   viewImageBackground: {
//     width: screenWidth,
//     height: screenHeight - 20,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   containerImageBackground: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     overflow: "hidden",
//     width: "100%",
//     height: "100%",
//   },
//   topbarView: { position: "absolute", width: "100%", height: "100%" },

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
//     zIndex: 2,
//   },
//   view: {
//     paddingTop: 20, //@@@affetc in mYfeed
//     paddingHorizontal: 10,
//   },

//   bottomBarIcon: { paddingTop: 5 },
//   navigationBottomView: {
//     flexDirection: "row",
//     alignContent: "space-between",
//     justifyContent: "space-between",
//     marginTop: 10,
//     paddingHorizontal: 20,
//   },
// });

// export default UniversalAppBackGroundAllInOne;
