import React, { useRef, useState } from "react";
import { View, Text, Button } from "react-native";

export default function TimerApp() {
  const countRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [renderCount, setRenderCount] = useState<number>(0);

  const startTimer = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        countRef.current += 1;
        setRenderCount(countRef.current);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    countRef.current = 0;
    setRenderCount(0);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>Timer: {renderCount}</Text>
      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Stop Timer" onPress={stopTimer} />
      <Button title="Reset Timer" onPress={resetTimer} />
    </View>
  );
}
