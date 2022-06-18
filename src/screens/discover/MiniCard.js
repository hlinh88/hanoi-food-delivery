import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Zocial,
} from "@expo/vector-icons";
import { BLACK, GREY, LIGHT_BLUE, WHITE } from "../../styles/colors";
import YoutubePlayer from "react-native-youtube-iframe";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Modal from "react-native-modal";

const MiniCard = ({ videoId, title, channelTitle, description, avatar }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [openChannel, setOpenChannel] = useState(false);

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.videoCardHolder}>
        <TouchableOpacity
          style={styles.videoImageHolder}
          onPress={() => setPlayVideo(!playVideo)}
        >
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
            }}
            style={styles.videoImage}
          />
        </TouchableOpacity>

        <View style={styles.titleHolder}>
          <TouchableOpacity onPress={() => setPlayVideo(!playVideo)}>
            <Text
              style={styles.videoTitle}
              ellipsizeMode="tail"
              numberOfLines={3}
            >
              {title}
            </Text>
          </TouchableOpacity>

          <View style={styles.channelHolder}>
            <TouchableOpacity onPress={() => setOpenChannel(true)}>
              <View style={styles.channelHolder}>
                <Image
                  source={{
                    uri: avatar,
                  }}
                  style={styles.channelAva}
                />
                <Text style={styles.channelTitle}>{channelTitle}</Text>
                <MaterialIcons name="verified" size={14} color={WHITE} />
              </View>
            </TouchableOpacity>
            <Modal
              isVisible={openChannel}
              onBackdropPress={() => setOpenChannel(false)}
              animationIn={"fadeIn"}
              animationOut={"fadeOut"}
            >
              <View style={styles.channelModal}>
                <TouchableOpacity
                  style={styles.channelTopInfo}
                  onPress={() =>
                    Linking.openURL("https://www.youtube.com/c/rmit/featured")
                  }
                >
                  <Image
                    source={{ uri: avatar }}
                    style={styles.channelBigAva}
                  />
                  <Text style={styles.channelBigTitle}>{channelTitle}</Text>
                  <MaterialIcons name="verified" size={20} color={WHITE} />
                </TouchableOpacity>
                <View style={styles.channelSecondInfo}>
                  <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.channelThirdInfo}>
                  <Text style={styles.channelBigTitle}>Links</Text>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL("https://www.rmit.edu.au/")
                      }
                    >
                      <MaterialCommunityIcons
                        name="web"
                        size={15}
                        color={LIGHT_BLUE}
                      />
                      <Text style={styles.linkText}>RMIT Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL(
                          "https://www.facebook.com/RMITuniversity"
                        )
                      }
                    >
                      <FontAwesome5
                        name="facebook"
                        size={15}
                        color={LIGHT_BLUE}
                      />
                      <Text style={styles.linkText}>Facebook</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL("https://twitter.com/RMIT")
                      }
                    >
                      <FontAwesome
                        name="twitter"
                        size={15}
                        color={LIGHT_BLUE}
                      />
                      <Text style={styles.linkText}>Twitter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL(
                          "https://www.instagram.com/rmituniversity/"
                        )
                      }
                    >
                      <FontAwesome
                        name="instagram"
                        size={15}
                        color={LIGHT_BLUE}
                      />
                      <Text style={styles.linkText}>Instagram</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL("http://www1.rmit.edu.au/programs")
                      }
                    >
                      <Ionicons name="school" size={15} color={LIGHT_BLUE} />
                      <Text style={styles.linkText}>Future Students</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL("https://www.rmit.edu.au/students")
                      }
                    >
                      <Ionicons name="school" size={15} color={LIGHT_BLUE} />
                      <Text style={styles.linkText}>Current Students</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL(
                          "https://www.rmit.edu.au/alumni-and-giving/alumni"
                        )
                      }
                    >
                      <Ionicons name="school" size={15} color={LIGHT_BLUE} />
                      <Text style={styles.linkText}>Alumni</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL("https://www.rmit.edu.au/news")
                      }
                    >
                      <Entypo name="news" size={15} color={LIGHT_BLUE} />
                      <Text style={styles.linkText}>News</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL(
                          "https://deimos.apple.com/WebObjects/Core.woa/Browse/rmit.edu.au"
                        )
                      }
                    >
                      <Zocial name="itunes" size={15} color={LIGHT_BLUE} />
                      <Text style={styles.linkText}>RMIT on iTunesU</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.flexRow}
                      onPress={() =>
                        Linking.openURL(
                          "https://www.flickr.com/photos/rmit/collections/"
                        )
                      }
                    >
                      <Entypo
                        name="flickr-with-circle"
                        size={15}
                        color={LIGHT_BLUE}
                      />
                      <Text style={styles.linkText}>Flickr</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            {playVideo ? (
              <TouchableOpacity onPress={() => setPlayVideo(!playVideo)}>
                <AntDesign name="caretup" size={16} color={WHITE} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setPlayVideo(!playVideo)}>
                <AntDesign name="caretdown" size={16} color={WHITE} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {playVideo && (
        <View style={styles.youtubeVideo}>
          <YoutubePlayer
            height={250}
            play={false}
            videoId={videoId}
            width={widthPercentageToDP(95)}
          />
        </View>
      )}
    </View>
  );
};

export default MiniCard;
