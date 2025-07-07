import MealItem from "@/components/meal-item";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import Meal from "@/models/meal";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

const MealsOverviewScreen = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const catId = params.id;
  const router = useRouter();

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  )?.title;

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
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.replace("/")}
              style={{ paddingHorizontal: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
          title: categoryTitle,
        }}
      />
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
