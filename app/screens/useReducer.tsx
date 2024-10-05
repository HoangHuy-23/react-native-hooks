import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";

// Định nghĩa kiểu dữ liệu cho state
interface State {
  count: number;
}

// Định nghĩa kiểu dữ liệu cho action
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// Khai báo reducer: nó xử lý các hành động và cập nhật state
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
  // Khởi tạo useReducer với reducer và state mặc định
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>Count: {state.count}</Text>

      <Button
        title="Tăng"
        onPress={() => dispatch({ type: "increment" })} // Gọi action 'increment'
      />
      <Button
        title="Giảm"
        onPress={() => dispatch({ type: "decrement" })} // Gọi action 'decrement'
        //style={{ marginTop: 10 }}
      />
      <Button
        title="Reset"
        onPress={() => dispatch({ type: "reset" })} // Gọi action 'reset'
        //style={{ marginTop: 10 }}
      />
    </View>
  );
}
