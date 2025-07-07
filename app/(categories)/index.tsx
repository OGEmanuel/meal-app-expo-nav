import CategoryGridTile from "@/components/category-grid-tile";
import { CATEGORIES } from "@/data/dummy-data";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

interface Category {
  id: string;
  title: string;
  color: string;
}

export default function HomeScreen() {
  const router = useRouter();
  const renderCategoryItem = (item: Category) => {
    const pressHandler = () => {
      router.push(`/meals-overview/${item.id}`);
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData.item)}
      numColumns={2}
    />
  );
}
