import { Link, Redirect, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.title}>List of screens.</Text>
      <View style={style.list_screen}>
        <Link style={style.list_item} href={"/screens\\useStateView"}>
          1. UseState example
        </Link>
        <Link style={style.list_item} href={"/screens\\useReducer"}>
          2. UseReducer example
        </Link>

        <Link style={style.list_item} href={"/screens\\useEffect"}>
          3. UseEffect example
        </Link>
        <Link style={style.list_item} href={"/screens\\useRef"}>
          4. UseRef example
        </Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  list_screen: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  list_item: {
    fontSize: 18,
    borderWidth: 1,
    width: 240,
    padding: 6,
    borderRadius: 8,
  },
});
