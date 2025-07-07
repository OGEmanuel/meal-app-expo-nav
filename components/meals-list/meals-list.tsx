import Meal from "@/models/meal";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./meal-item";

const MealsList = (props: { displayedMeals: Meal[] }) => {
  const { displayedMeals } = props;
  const renderMealItem = (itemData: Meal) => {
    return (
      <MealItem
        title={itemData.title}
        imageUrl={itemData.imageUrl}
        affordability={itemData.affordability}
        complexity={itemData.complexity}
        duration={itemData.duration}
        id={itemData.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
