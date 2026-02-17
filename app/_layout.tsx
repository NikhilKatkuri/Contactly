import { SafeAreaView } from "react-native-safe-area-context";

// expo
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ContactProvider } from "../src/providers/Contact";

const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ContactProvider>
        <StatusBar style="dark" />
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              presentation: "card",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="view"
            options={{
              presentation: "pageSheet",
              headerShown: false,
            }}
          />
        </Stack>
      </ContactProvider>
    </SafeAreaView>
  );
};

export default _layout;
