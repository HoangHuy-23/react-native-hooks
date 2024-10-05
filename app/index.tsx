import { Link, Redirect, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.title}>List of screens.</Text>
      <View style={style.list_screen}>
        <Link style={style.list_item} href={"/screens\\useStateView"}>
          1. UseState screen
        </Link>
        <Link style={style.list_item} href={"/screens\\useReducer"}>
          2. UseReducer screen
        </Link>
        {/*
        <Link style={style.list_item} href={"/screens/1_b"}>
          3. 1_b screen
        </Link>
        <Link style={style.list_item} href={"/screens/1_c"}>
          4. 1_c screen
        </Link>
        <Link style={style.list_item} href={"/screens/1_d"}>
          5. 1_d screen
        </Link>
        <Link style={style.list_item} href={"/screens/1_e"}>
          6. 1_e screen
        </Link>
        <Link style={style.list_item} href={"/screens/2_a"}>
          7. 2_a screen
        </Link>
        <Link style={style.list_item} href={"/screens/xmlEye"}>
          8. XMLEye screen
        </Link> */}
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
