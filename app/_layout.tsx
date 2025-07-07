import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <GestureHandlerRootView>
        <Drawer
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            sceneStyle: {
              backgroundColor: "#3f2f25",
            },
            drawerContentStyle: {
              backgroundColor: "#351401",
            },
            drawerInactiveTintColor: "white",
            drawerActiveTintColor: "#351401",
            drawerActiveBackgroundColor: "#e4baa1",
          }}
        >
          <Drawer.Screen
            name="(categories)/index"
            options={{
              title: "All Categories",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="list" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="favorites/index"
            options={{
              title: "Favorites",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="star" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="(categories)/meals-overview"
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}
