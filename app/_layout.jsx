import { Stack } from 'expo-router';
import React from 'react';

const RootLayout = () => {
  return (
    // <>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
