import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { Text } from "react-native-paper";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

interface StoriesProps {}

const users = [
  {
    id: 1,
    url: require("../assets/home/query.jpg"),
    username: "stormerR",
  },
  {
    id: 2,
    url: require("../assets/home/space.jpg"),
    username: "stormerR",
  },
  {
    id: 3,
    url: require("../assets/home/human.jpg"),
    username: "stormerR",
  },
  {
    id: 4,
    url: require("../assets/home/space.jpg"),
    username: "stormerR",
  },
  {
    id: 5,
    url: require("../assets/home/space_bar.jpg"),
    username: "stormerR",
  },
  {
    id: 6,
    url: require("../assets/home/term.jpg"),
    username: "stormerR",
  },
  {
    id: 7,
    url: require("../assets/home/spac.jpg"),
    username: "stormerR",
  },
];

const Stories: React.FC<StoriesProps> = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((story) => (
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FastImage
              source={require("../assets/home/spac.jpg")}
              style={styles.story}
            />
            <Text style={styles.text}>{story.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth * 0.9,
    justifyContent: "space-between",
  },
  story: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
    resizeMode: "contain",
  },
  text: {
    marginTop: 6,
  },
});

export default Stories;
