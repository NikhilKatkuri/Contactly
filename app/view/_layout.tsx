// expo
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]/index"
        options={{
          presentation: "pageSheet",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default _layout;
