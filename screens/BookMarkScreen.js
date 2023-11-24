import React, { Component } from "react";
import {
  View,
  Text,
  Box,
  HStack,
  Center,
  Spinner,
  FlatList,
  VStack,
  Pressable,
  Toast,
} from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

class BookmarkScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      List: [],
      isLoading: true,
    };
  }

  getFavorite = async () => {
    try {
      const value = await AsyncStorage.getItem("@Bookmark");
      if (value !== null) {
        this.setState({ List: JSON.parse(value) });
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleDeleteList = (index) => {
    const deleteList = this.state.List.filter(
      (List, ListIndex) => ListIndex !== index
    );
    this.setState({ List: deleteList }, () => {
      try {
        AsyncStorage.setItem("@Bookmark", JSON.stringify(this.state.List));
      } catch (e) {
        console.error(e.message);
      }
    });
  };

  componentDidMount() {
    this.getFavorite();
  }

  onRefresh = () => {
    this.getFavorite();
  };
  render() {
    const { List, isLoading } = this.state;
    const { navigation } = this.props;
    console.log(List);
    return (
      <View flex={1} bg={"#D2E5FF"}>
        <Header title="Lokasi Tersimpan" />
        <Center justifyContent={"center"}>
          {isLoading ? (
            <Box flex={1} justifyContent={"center"}>
              <Spinner size="large" color={"black"} />
            </Box>
          ) : (
            <FlatList
              data={List}
              onRefresh={this.onRefresh}
              refreshing={isLoading}
              renderItem={({ item, index }) => {
                return (
                  <Pressable
                    bg={"#90BFFF"}
                    mt={"5"}
                    ml={'5'}
                    p={"15px"}
                    w="90%"
                    shadow="5"
                    borderRadius="md"
                    onPress={() =>
                      navigation.navigate("DetailWeatherScreen", {
                        nama: item.name,
                        temp: item.temp,
                        time: item.time,
                        condition: item.condition,
                        img1: item.img1,
                        feelsLike: item.feelsLike,
                        indeks: item.indeks,
                        lembap: item.lembap,
                        hujan: item.hujan,
                        awan: item.awan,
                        pressure: item.pressure,
                        angin: item.angin,
                        jarakpandang: item.jarakpandang,
                        terbit: item.terbit,
                        sunset: item.sunset,
                        perjam1: item.perjam1,
                        perjam1Temp1: item.perjam1Temp1,
                        perjam1Condition: item.perjam1Condition,
                        perjam2: item.perjam2,
                        perjam2Temp: item.perjam2Temp,
                        perjam2Condition: item.perjam2Condition,
                        perjam3: item.perjam3,
                        perjam3Temp: item.perjam3Temp,
                        perjam3Condition: item.perjam3Condition,
                        perjam4: item.perjam4,
                        perjam4Temp: item.perjam4Temp,
                        perjam4Condition: item.perjam4Condition,
                        perjam5: item.perjam5,
                        perjam5Temp: item.perjam5Temp,
                        perjam5Condition: item.perjam5Condition,
                        perjam6: item.perjam6,
                        perjam6Temp: item.perjam6Temp,
                        perjam6Condition: item.perjam6Condition,
                        perjam7: item.perjam7,
                        perjam7Temp: item.perjam7Temp,
                        perjam7Condition: item.perjam7Condition,
                        perjam8: item.perjam8,
                        perjam8Temp: item.perjam8Temp,
                        perjam8Condition: item.perjam8Condition,
                      })
                    }
                    _pressed={{
                      bg: "#C7E1E0",
                    }}
                  >
                    <HStack
                      width={"100%"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box width={"90%"} pr={"5px"}>
                        <VStack>
                          <Text
                            fontSize={"18px"}
                            fontWeight={"bold"}
                            mb={1}
                            numberOfLines={1}
                          >
                            {item.name}
                          </Text>
                          <HStack alignItems={"center"}>
                            <Text mb={"5px"} numberOfLines={1}>
                              <Ionicons name="ios-location" size={20} />
                              {item.region}, {""}
                            </Text>
                            <Text numberOfLines={1}>{item.country}</Text>
                          </HStack>
                        </VStack>
                      </Box>
                      <Box
                        width={"15%"}
                        alignItems={"center"}
                        borderRadius={18}
                      >
                        <TouchableOpacity onPress={() => {}}>
                          <Ionicons
                            name="ios-remove-circle"
                            color={"#034BAD"}
                            size={40}
                            onPress={() => {
                              this.handleDeleteList(index),
                                Toast.show({
                                  description: " Lokasi berhasil dihapus",
                                });
                            }}
                          />
                        </TouchableOpacity>
                      </Box>
                    </HStack>
                  </Pressable>
                );
              }}
            />
          )}
        </Center>
      </View>
    );
  }
}

export default BookmarkScreen;
