import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function TimerApp() {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (!isRunning && count !== 0) {
      if (timer) clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>Timer: {count}</Text>
      <Button
        title={isRunning ? "Pause" : "Start"}
        onPress={() => setIsRunning(!isRunning)}
      />
      <Button
        title="Reset"
        onPress={() => {
          setCount(0);
          setIsRunning(false);
        }}
      />
    </View>
  );
}
