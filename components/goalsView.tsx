import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface CourseGoalsInterface {
  key: string;
  value: string;
}

interface Props {
  courseGoals: CourseGoalsInterface[];
  handleDeleteItem: (indexToDelete: string) => void;
}

export default function GoalsView(props: Props) {
  return (
    <FlatList
      data={props.courseGoals.filter((courseGoal) => courseGoal.value)} //Filter out Null/Undefined/Blank Values
      renderItem={(itemData) => {
        return (
          <TouchableOpacity
            onPress={() => props.handleDeleteItem(itemData.item.key)}
          >
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
