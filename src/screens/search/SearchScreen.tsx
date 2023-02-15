import React, { useMemo, useState, useEffect } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { ScreenWidth, ScreenHeight } from "@freakycoder/react-native-helpers";

/**
 * ? Local Imports
 */
import createStyles from "./SearchScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import FastImage from "react-native-fast-image";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [filteredImages, setFilteredImages] = useState([]);

  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text.length > 3) {
      setFilteredImages(
        images.filter((image) =>
          image.name.toLowerCase().includes(text.trim().toLowerCase()),
        ),
      );
      setImages(filteredImages);
    } else {
      loadImages();
    }
  };

  useEffect(() => {
    // Load initial images
    loadImages();
  }, []);

  const loadImages = () => {
    // Load images from an API or other data source
    // For this example, we'll load some images from a local file
    setImages([
      { url: require("../../assets/home/query.jpg"), name: "query" },
      { url: require("../../assets/home/human.jpg"), name: "human" },
      { url: require("../../assets/home/space.jpg"), name: "space" },
      { url: require("../../assets/home/space_bar.jpg"), name: "space_bar" },
      { url: require("../../assets/home/term.jpg"), name: "term" },
      { url: require("../../assets/home/terminater.jpg"), name: "terminater" },
      {
        url: require("../../assets/home/human_being.jpg"),
        name: "human_being",
      },
      { url: require("../../assets/home/quering.jpg"), name: "quering" },
      { url: require("../../assets/home/quit.jpg"), name: "quit" },
      { url: require("../../assets/home/quiter.jpg"), name: "quiter" },
      { url: require("../../assets/home/spac.jpg"), name: "spac" },
    ]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={handleSearch}
            value={search}
          />
        </View>
        <View style={styles.container}>
          {images.map((call) => (
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <FastImage
                source={call.url}
                style={{
                  height: ScreenHeight / 3,
                  width: ScreenWidth / 3 - 5,
                  borderRadius: 10,
                  margin: 2,
                }}
              />
              <Text>{call.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
