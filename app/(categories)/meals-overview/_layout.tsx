import { Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  const pathname = usePathname();
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          animation: pathname.startsWith("/meals-overview")
            ? "none"
            : "default",
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "white",
          contentStyle: {
            backgroundColor: "#3f2f25",
          },
        }}
      />
    </>
  );
};

export default Layout;
