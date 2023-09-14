import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
}
const CustomButton: React.FC<Props> = ({ onPress, title }) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };
  return (
    <TouchableOpacity onPress={onPress} onPressIn={onFocus} onPressOut={onBlur}>
      <View
        style={isFocus ? [styles.container, styles.focused] : styles.container}
      >
        <Text style={isFocus ? [styles.title, { color: "red" }] : styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 6,
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  focused: {
    borderColor: "red",
  },
});

export default CustomButton;
