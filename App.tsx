import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalsInput from "./components/goalsInput";
import GoalsView from "./components/goalsView";

export default function App() {
  interface CourseGoalsInterface {
    key: string;
    value: string;
  }

  const [courseGoals, setCourseGoals] = useState([{} as CourseGoalsInterface]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalText = (goalName: string) => {
    setCourseGoals([...courseGoals, { key: goalName, value: goalName }]);
    setIsModalVisible(false);
  };

  const handleDeleteItem = (key: string) => {
    setCourseGoals(courseGoals.filter((goal) => goal.key != key));
  };

  return (
    <View style={styles.mainWrapper}>
      <Button title={"Add new Goal"} onPress={() => setIsModalVisible(true)} />
      <GoalsInput isModalVisible={isModalVisible} addGoalText={addGoalText} />
      <GoalsView
        handleDeleteItem={handleDeleteItem}
        courseGoals={courseGoals}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 30,
  },
});
