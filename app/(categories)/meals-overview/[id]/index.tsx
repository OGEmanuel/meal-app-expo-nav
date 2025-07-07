import MealsList from "@/components/meals-list/meals-list";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

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

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.replace("/")}
              style={{ paddingRight: 33 }}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
          title: categoryTitle,
        }}
      />
      <MealsList displayedMeals={displayedMeals} />
    </>
  );
};

export default MealsOverviewScreen;
