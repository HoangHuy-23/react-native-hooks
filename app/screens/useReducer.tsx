import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";

interface State {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

export default function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 32 }}>Count: {state.count}</Text>

      <Button title="Tăng" onPress={() => dispatch({ type: "increment" })} />
      <Button title="Giảm" onPress={() => dispatch({ type: "decrement" })} />
      <Button title="Reset" onPress={() => dispatch({ type: "reset" })} />
    </View>
  );
}
