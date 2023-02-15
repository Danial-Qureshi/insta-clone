import React, { useMemo, useState } from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import FastImage from "react-native-fast-image";
import VideoPlayer from "react-native-video-controls";

/**
 * ? Local Imports
 */
import createStyles from "./CardItem.style";
import { ICardItem } from "@services/models";
import Text from "@shared-components/text-wrapper/TextWrapper";

const SLIDER_WIDTH = Dimensions.get("window").width * 0.85;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.9);

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: ICardItem;
  onPress: () => void;
}

const CardItem: React.FC<ICardItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { name, images, video } = data;

  const Header = () => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FastImage
        resizeMode="cover"
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.profilePicImageStyle}
      />
      <Text h5 color={colors.placeholder} style={styles.descriptionTextStyle}>
        {name}
      </Text>
    </View>
  );

  const VideoContainer = () => (
    <View style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}>
      <VideoPlayer
        disableFullscreen={true}
        disableSeekbar={true}
        disableTimer={true}
        disableBack={true}
        source={{ uri: video.videoUrl }}
        muted={true}
        style={styless.video}
        resizeMode={"cover"}
        tapAnywhereToPause={true}
      />
    </View>
  );

  const CarouselCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <View style={styless.container}>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        <Pagination
          dotsLength={images.length}
          activeDotIndex={activeIndex}
          dotStyle={styless.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          containerStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
        />
      </View>
    );
  };

  const renderItem = ({ item }: any) => {
    return (
      <View style={styless.itemContainer}>
        <Image source={item} style={styless.itemImage} />
      </View>
    );
  };

  return (
    <View style={[styles.container, style]} onPress={onPress}>
      <Header />
      <View style={styles.contentContainer}>
        {images ? <CarouselCards /> : <VideoContainer />}
      </View>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "rgba(225, 225, 225, 0.92)",
  },
  video: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default CardItem;
