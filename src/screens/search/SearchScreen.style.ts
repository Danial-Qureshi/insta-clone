import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  headline_text: ViewStyle;
  explore_text: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      // alignItems: "center",
      // justifyContent: "center",
    },
    headline_text: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 50,
      marginLeft: 20,
    },
    explore_text: {
      marginTop: 5,
      marginBottom: 10,
      color: "white",
      marginLeft: 20,
      fontSize: 12,
      fontWeight: "600",
    },
  });
};
