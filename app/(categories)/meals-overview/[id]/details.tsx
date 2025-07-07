import List from "@/components/meal-detail/list";
import Subtitle from "@/components/meal-detail/subtitle";
import MealDetails from "@/components/meal-details";
import { MEALS } from "@/data/dummy-data";
import { useFavouritesStore } from "@/store/favourites-control";
import { Ionicons } from "@expo/vector-icons";
import {
  Stack,
  useLocalSearchParams,
  useNavigation,
  usePathname,
  useRouter,
} from "expo-router";
import { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MealDetailsScreen = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const mealId = params.id;
  const navigation = useNavigation();
  const router = useRouter();

  const pathname = usePathname();

  console.log(pathname);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const { ids, addFavourite, removeFavourite } = useFavouritesStore();

  const mealIsFavourite = ids.includes(mealId);

  useEffect(() => {
    if (pathname.includes("favorites")) {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.replace("/favorites")}
            style={{ paddingRight: 33 }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    } else {
      // Reset to default back button
      navigation.setOptions({
        headerLeft: undefined,
      });
    }
  }, [pathname]);

  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite) {
      removeFavourite(mealId);
    } else {
      addFavourite(mealId);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={changeFavouriteStatusHandler}>
              <Ionicons
                name={mealIsFavourite ? "star" : "star-outline"}
                size={24}
                color={"white"}
              />
            </TouchableOpacity>
          ),
          title: "About the Meal",
        }}
      />
      <ScrollView style={styles.rootContainer}>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal?.title}</Text>
        <MealDetails
          affordability={selectedMeal?.affordability as string}
          complexity={selectedMeal?.complexity as string}
          duration={selectedMeal?.duration as number}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal?.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal?.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
