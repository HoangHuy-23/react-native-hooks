import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 32 }}>Count: {count}</Text>
      <Button title="Tăng" onPress={() => setCount(count + 1)} />
      <Button title="Giảm" onPress={() => setCount(count - 1)} />
    </View>
  );
}
