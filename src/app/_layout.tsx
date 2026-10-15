
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#0B0B0D",
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="user/index" />
      </Stack>
    </>
  );
}
