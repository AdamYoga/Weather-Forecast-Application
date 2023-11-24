import React, { Component } from "react";
import {
  View,
  Text,
  Box,
  HStack,
  ScrollView,
  Center,
  Spinner,
  VStack,
  Pressable,
  Input,
  Image,
  IconButton,
  Toast,
} from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      region: [],
      contry: [],
      name: [],
      temp: " ",
      time: " ",
      img1: [],
      condition: [],
      terbit: " ",
      sunset: " ",
      feelsLike: " ",
      indeks: " ",
      lembap: " ",
      hujan: " ",
      awan: " ",
      pressure: " ",
      angin: " ",
      jarakpandang: " ",
      perjam1: " ",
      perjam1Temp1: " ",
      perjam1Condition: " ",
      perjam2: " ",
      perjam2Temp: " ",
      perjam2Condition: " ",
      perjam3: " ",
      perjam3Temp: " ",
      perjam3Condition: " ",
      perjam4: " ",
      perjam4Temp: " ",
      perjam4Condition: " ",
      perjam5: " ",
      perjam5Temp: " ",
      perjam5Condition: " ",
      perjam6: " ",
      perjam6Temp: " ",
      perjam6Condition: " ",
      perjam7: " ",
      perjam7Temp: " ",
      perjam7Condition: " ",
      perjam8: " ",
      perjam8Temp: " ",
      perjam8Condition: " ",
      isLoading: true,
      isFetching: false,
      list: [],
    };
  }

  fetchLocation = (key) => {
    console.log(key);
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e401fc4faee14e2f9cd124601230502&q=${key}`
    )
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          name: json.location.name,
          region: json.location.region,
          country: json.location.country,
          temp: json.current.temp_c,
          time: json.location.localtime,
          img1: json.current.condition.icon,
          condition: json.current.condition.text,
          feelsLike: json.current.feelslike_c,
          indeks: json.current.uv,
          lembap: json.current.humidity,
          hujan: json.forecast.forecastday[0].day.daily_chance_of_rain,
          awan: json.current.cloud,
          pressure: json.current.pressure_mb,
          angin: json.current.wind_kph,
          jarakpandang: json.current.vis_km,
          terbit: json.forecast.forecastday[0].astro.sunrise,
          sunset: json.forecast.forecastday[0].astro.sunset,
          perjam1: json.forecast.forecastday[0].hour[0].time,
          perjam1Temp1: json.forecast.forecastday[0].hour[0].temp_c,
          perjam1Condition: json.forecast.forecastday[0].hour[0].condition.text,
          perjam2: json.forecast.forecastday[0].hour[3].time,
          perjam2Temp: json.forecast.forecastday[0].hour[3].temp_c,
          perjam2Condition: json.forecast.forecastday[0].hour[3].condition.text,
          perjam3: json.forecast.forecastday[0].hour[6].time,
          perjam3Temp: json.forecast.forecastday[0].hour[6].temp_c,
          perjam3Condition: json.forecast.forecastday[0].hour[6].condition.text,
          perjam4: json.forecast.forecastday[0].hour[9].time,
          perjam4Temp: json.forecast.forecastday[0].hour[9].temp_c,
          perjam4Condition: json.forecast.forecastday[0].hour[9].condition.text,
          perjam5: json.forecast.forecastday[0].hour[12].time,
          perjam5Temp: json.forecast.forecastday[0].hour[12].temp_c,
          perjam5Condition: json.forecast.forecastday[0].hour[12].condition.text,
          perjam6: json.forecast.forecastday[0].hour[15].time,
          perjam6Temp: json.forecast.forecastday[0].hour[15].temp_c,
          perjam6Condition: json.forecast.forecastday[0].hour[15].condition.text,
          perjam7: json.forecast.forecastday[0].hour[18].time,
          perjam7Temp: json.forecast.forecastday[0].hour[18].temp_c,
          perjam7Condition: json.forecast.forecastday[0].hour[18].condition.text,
          perjam8: json.forecast.forecastday[0].hour[21].time,
          perjam8Temp: json.forecast.forecastday[0].hour[21].temp_c,
          perjam8Condition: json.forecast.forecastday[0].hour[21].condition.text,
        })
      )
      .catch((error) => console.error(error))
      .finally(() =>
        this.setState({
          isLoading: false,
          isFetching: false,
        })
      );
  };

  getFavorite = async () => {
    try {
      const value = await AsyncStorage.getItem("@Bookmark");
      if (value !== null) {
        this.setState({ list: JSON.parse(value) });
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.getFavorite();
  };

  handleAdd = () => {
    const prevList = this.state.list;
    const {
      name,
      region,
      country,
      temp,
      time,
      condition,
      img1,
      feelsLike,
      indeks,
      lembap,
      hujan,
      awan,
      pressure,
      angin,
      jarakpandang,
      terbit,
      sunset,
      perjam1,
      perjam1Temp1,
      perjam1Condition,
      perjam2,
      perjam2Temp,
      perjam2Condition,
      perjam3,
      perjam3Temp,
      perjam3Condition,
      perjam4,
      perjam4Temp,
      perjam4Condition,
      perjam5,
      perjam5Temp,
      perjam5Condition,
      perjam6,
      perjam6Temp,
      perjam6Condition,
      perjam7,
      perjam7Temp,
      perjam7Condition,
      perjam8,
      perjam8Temp,
      perjam8Condition,
    } = this.state;
    this.setState(
      {
        list: [
          ...prevList,
          {
            name: name,
            region: region,
            country: country,
            temp: temp,
            time: time,
            condition: condition,
            img1: img1,
            feelsLike: feelsLike,
            indeks: indeks,
            lembap: lembap,
            hujan: hujan,
            awan: awan,
            pressure: pressure,
            angin: angin,
            jarakpandang: jarakpandang,
            terbit: terbit,
            sunset: sunset,
            perjam1: perjam1,
            perjam1Temp1: perjam1Temp1,
            perjam1Condition: perjam1Condition,
            perjam2: perjam2,
            perjam2Temp: perjam2Temp,
            perjam2Condition: perjam2Condition,
            perjam3: perjam3,
            perjam3Temp: perjam3Temp,
            perjam3Condition: perjam3Condition,
            perjam4: perjam4,
            perjam4Temp: perjam4Temp,
            perjam4Condition: perjam4Condition,
            perjam5: perjam5,
            perjam5Temp: perjam5Temp,
            perjam5Condition: perjam5Condition,
            perjam6: perjam6,
            perjam6Temp: perjam6Temp,
            perjam6Condition: perjam6Condition,
            perjam7: perjam7,
            perjam7Temp: perjam7Temp,
            perjam7Condition: perjam7Condition,
            perjam8: perjam8,
            perjam8Temp: perjam8Temp,
            perjam8Condition: perjam8Condition,
          },
        ],
      },
      () => {
        try {
          AsyncStorage.setItem("@Bookmark", JSON.stringify(this.state.list));
        } catch (e) {
          console.error(e.message);
        }
      }
    );
  };

  getInput = () => {
    const { inputValue } = this.state;
    this.fetchLocation(inputValue);
    this.setState({ isLoading: true });
  };

  render() {
    const { navigation } = this.props;
    const {
      inputValue,
      name,
      region,
      country,
      temp,
      time,
      condition,
      img1,
      feelsLike,
      indeks,
      lembap,
      hujan,
      awan,
      pressure,
      angin,
      jarakpandang,
      terbit,
      sunset,
      perjam1,
      perjam1Temp1,
      perjam1Condition,
      perjam2,
      perjam2Temp,
      perjam2Condition,
      perjam3,
      perjam3Temp,
      perjam3Condition,
      perjam4,
      perjam4Temp,
      perjam4Condition,
      perjam5,
      perjam5Temp,
      perjam5Condition,
      perjam6,
      perjam6Temp,
      perjam6Condition,
      perjam7,
      perjam7Temp,
      perjam7Condition,
      perjam8,
      perjam8Temp,
      perjam8Condition,
      isLoading,
    } = this.state;

    return (
      <View flex={1} bg={"#D2E5FF"}>
        <Header title="Home" />
        <ScrollView>
          <Center>
            <Box w="100%" h="200" alignItems="center" justifyContent="center">
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/a5/a2/10/a5a210b0c40572c7298d1b7d3eee26fd.gif",
                }}
                alt="Anda Sedang Offline :("
                size="xl"
                w="100%"
                h={200}
              />
              <Box w="95%" alignItems="center" justifyContent="center">
                <Text mt={5} fontWeight="bold" fontSize="2xl">
                  {" "}
                  Selamat Datang di Thor Weather!{" "}
                </Text>
                <Text mt={1} mb={5} fontSize="md">
                  {" "}
                  Semoga harimu menyenangkan{" "}
                </Text>
              </Box>
            </Box>
            <Box mt={10} mx="15px" mb="7.5px" w="90%">
              <HStack space={1}>
                <Input
                  size="lg"
                  w="85%"
                  h={39}
                  my={5}
                  onChangeText={(char) => this.setState({ inputValue: char })}
                  onSubmitEditing={this.getInput}
                  value={inputValue}
                  borderWidth={1}
                  borderColor="#034BAD"
                  placeholder="Search"
                />
                <IconButton
                  w="14%"
                  h={39}
                  my={5}
                  borderRadius="sm"
                  bg="#034BAD"
                  variant="solid"
                  icon={
                    <Ionicons name="ios-search" size={15} color="#D2E5FF" />
                  }
                  onPress={this.getInput}
                />
              </HStack>
            </Box>
            {isLoading ? (
              <Box flex={1} justifyContent={"center"}>
                <Spinner size="large" color={"black"} />
              </Box>
            ) : name == "" ? null : (
              <Pressable
                bg={"#90BFFF"}
                p={"15px"}
                w="90%"
                shadow="5"
                borderRadius="5"
                onPress={() =>
                  navigation.navigate("DetailWeatherScreen", {
                    nama: name,
                    temp: temp,
                    time: time,
                    condition: condition,
                    img1: img1,
                    feelsLike: feelsLike,
                    indeks: indeks,
                    lembap: lembap,
                    hujan: hujan,
                    awan: awan,
                    pressure: pressure,
                    angin: angin,
                    jarakpandang: jarakpandang,
                    terbit: terbit,
                    sunset: sunset,
                    perjam1: perjam1,
                    perjam1Temp1: perjam1Temp1,
                    perjam1Condition: perjam1Condition,
                    perjam2: perjam2,
                    perjam2Temp: perjam2Temp,
                    perjam2Condition: perjam2Condition,
                    perjam3: perjam3,
                    perjam3Temp: perjam3Temp,
                    perjam3Condition: perjam3Condition,
                    perjam4: perjam4,
                    perjam4Temp: perjam4Temp,
                    perjam4Condition: perjam4Condition,
                    perjam5: perjam5,
                    perjam5Temp: perjam5Temp,
                    perjam5Condition: perjam5Condition,
                    perjam6: perjam6,
                    perjam6Temp: perjam6Temp,
                    perjam6Condition: perjam6Condition,
                    perjam7: perjam7,
                    perjam7Temp: perjam7Temp,
                    perjam7Condition: perjam7Condition,
                    perjam8: perjam8,
                    perjam8Temp: perjam8Temp,
                    perjam8Condition: perjam8Condition,
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
                  <Box width={"85%"} pr={"5px"}>
                    <VStack>
                      <Text
                        fontSize={"18px"}
                        fontWeight={"bold"}
                        mb={1}
                        numberOfLines={1}
                      >
                        {name}
                      </Text>
                      <Text mb={"5px"} numberOfLines={1}>
                        <Ionicons name="ios-location" size={20} />
                        {name}, {region}, {country}
                      </Text>
                    </VStack>
                  </Box>
                  <Box width={"15%"} alignItems={"center"} borderRadius={18}>
                    <TouchableOpacity onPress={() => {}}>
                      <Ionicons
                        name="ios-add-circle"
                        color={"#034BAD"}
                        size={40}
                        onPress={() => {
                          this.handleAdd(),
                            Toast.show({
                              description: " Lokasi berhasil ditambahkan",
                            });
                        }}
                      />
                    </TouchableOpacity>
                  </Box>
                </HStack>
              </Pressable>
            )}
          </Center>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
