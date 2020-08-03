import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Modal,
} from "react-native";

interface Props {
  addGoalText: (itemText: string) => void;
  isModalVisible: boolean;
}

export default function GoalsInput(props: Props) {
  const [itemText, setItemText] = useState("");

  const handleTextChange = (
    item: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setItemText(item.nativeEvent.text);
  };

  const handleGoalInputButton = () => {
    props.addGoalText(itemText);
    setItemText("");
  };

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.insideWrapper}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChange={handleTextChange}
          value={itemText}
        />
        <Button title="add" onPress={handleGoalInputButton} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  insideWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
  },
});
