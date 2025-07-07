import MealsList from "@/components/meals-list/meals-list";
import { MEALS } from "@/data/dummy-data";
import { useFavouritesStore } from "@/store/favourites-control";
import { StyleSheet, Text, View } from "react-native";

const Favourites = () => {
  const { ids } = useFavouritesStore();
  const displayedMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet!</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={displayedMeals} />;
};

export default Favourites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
});
