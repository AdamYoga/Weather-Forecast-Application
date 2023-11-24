import React, { Component } from 'react';
import {
  View,
  Text,
  Box,
  HStack,
  ScrollView,
  Center,
  VStack,
  Image,
  Divider,
} from 'native-base';
import { ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Header } from '../components';

class DetailWeatherScreen extends Component {
  render() {
    const { route } = this.props;
    const lokasi = route.params.nama;
    const temperature = route.params.temp;
    const time = route.params.time;
    const img1 = route.params.img1;
    const condition = route.params.condition;
    const feelsLike = route.params.feelsLike;
    const indeks = route.params.indeks;
    const lembap = route.params.lembap;
    const hujan = route.params.hujan;
    const awan = route.params.awan;
    const pressure = route.params.pressure;
    const angin = route.params.angin;
    const jarakpandang = route.params.jarakpandang;
    const terbit = route.params.terbit;
    const sunset = route.params.sunset;
    const perjam1 = route.params.perjam1;
    const perjam1Temp1 = route.params.perjam1Temp1;
    const perjam1Condition = route.params.perjam1Condition;
    const perjam2 = route.params.perjam2;
    const perjam2Temp = route.params.perjam2Temp;
    const perjam2Condition = route.params.perjam2Condition;
    const perjam3 = route.params.perjam3;
    const perjam3Temp = route.params.perjam3Temp;
    const perjam3Condition = route.params.perjam3Condition;
    const perjam4 = route.params.perjam4;
    const perjam4Temp = route.params.perjam4Temp;
    const perjam4Condition = route.params.perjam4Condition;
    const perjam5 = route.params.perjam5;
    const perjam5Temp = route.params.perjam5Temp;
    const perjam5Condition = route.params.perjam5Condition;
    const perjam6 = route.params.perjam6;
    const perjam6Temp = route.params.perjam6Temp;
    const perjam6Condition = route.params.perjam6Condition;
    const perjam7 = route.params.perjam7;
    const perjam7Temp = route.params.perjam7Temp;
    const perjam7Condition = route.params.perjam7Condition;
    const perjam8 = route.params.perjam8;
    const perjam8Temp = route.params.perjam8Temp;
    const perjam8Condition = route.params.perjam8Condition;
    return (
      <View flex={1} bg={'#D2E5FF'}>
        <Header title="Detail Cuaca" backButton={true} />
        <ScrollView>
          <Center>
            <Box w="95%" alignItems="center" my="4">
              <Ionicons name="ios-location" size={25}  />
              <Text fontWeight="bold" fontSize="2xl"> {lokasi} </Text>
              <Text pt="2px" fontWeight="light" fontSize="md">
               {time}
              </Text>
              <Box w="90%">
                <HStack alignItems="center" justifyContent="center" my="5">
                {/* <Image source ={{uri : `${img1}`}} w={100} h={100} alt='INI gambar' /> */}
                  <Text fontWeight="bold" fontSize="5xl" pl={2}>
                    {temperature}ᴼC
                  </Text>
                </HStack>
              </Box>
              <Text alignItems="center" fontWeight="bold" fontSize="2xl">
                {condition}
              </Text>
              <Box w="90%" mt={2} pb={2} alignItems="center">
                <Text fontWeight="medium" fontSize="xl">
                  Cuaca Perjam
                </Text>
                <VStack
                  w="100%"
                  space={1}
                  justifyContent="center"
                  bg="#ADCFFE"
                  rounded="md"
                  shadow={3}>
                  <Box w="100%" h="20">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" ml={3} my={8}>
                        {perjam1}
                      </Text>
                      <Box w="65%" p={3} alignItems="center">
                        <HStack justifyContent="center">
                          <Image
                            source={require('../assets/cuaca.png')}
                            h={'35'}
                            w={'50'}
                            alt ="gagal"
                          />
                          <Text fontWeight="bold" fontSize="sm" pl={2} pt={2}>
                            {perjam1Temp1}ᴼC
                          </Text>
                        </HStack>
                        <Text fontWeight="bold" fontSize="sm" pt={1}>
                          {perjam1Condition}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Divider bg="#90BFFF" />
                  <Box w="100%" h="20">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" ml={3} my={7}>
                        {perjam2}
                      </Text>
                      <Box w="65%" p={3} alignItems="center">
                        <HStack justifyContent="center">
                          <Image
                            source={require('../assets/cuaca.png')}
                            h={'35'}
                            w={'50'}
                            alt ="gagal"
                          />
                          <Text fontWeight="bold" fontSize="sm" pl={2} pt={2}>
                            {perjam2Temp}ᴼC
                          </Text>
                        </HStack>
                        <Text fontWeight="bold" fontSize="sm" pt={1}>
                          {perjam2Condition}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Divider bg="#90BFFF" />
                  <Box w="100%" h="20">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" ml={3} my={7}>
                        {perjam3}
                      </Text>
                      <Box w="65%" p={3} alignItems="center">
                        <HStack justifyContent="center">
                          <Image
                            source={require('../assets/cuaca.png')}
                            h={'35'}
                            w={'50'}
                            alt ="gagal"
                          />
                          <Text fontWeight="bold" fontSize="sm" pl={2} pt={2}>
                            {perjam3Temp}ᴼC
                          </Text>
                        </HStack>
                        <Text fontWeight="bold" fontSize="sm" pt={1}>
                          {perjam3Condition}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Divider bg="#90BFFF" />
                  <Box w="100%" h="20">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" ml={3} my={7}>
                        {perjam4}
                      </Text>
                      <Box w="65%" p={3} alignItems="center">
                        <HStack justifyContent="center">
                          <Image
                            source={require('../assets/cuaca.png')}
                            h={'35'}
                            w={'50'}
                            alt ="gagal"
                          />
                          <Text fontWeight="bold" fontSize="sm" pl={2} pt={2}>
                            {perjam4Temp}ᴼC
                          </Text>
                        </HStack>
                        <Text fontWeight="bold" fontSize="sm" pt={1}>
                          {perjam4Condition}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Divider bg="#90BFFF" />
                  <Box w="100%" h="20">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" ml={3} my={7}>
                        {perjam5}
                      </Text>
                      <Box w="65%" p={3} alignItems="center">
                        <HStack justifyContent="center">
                          <Image
                            source={require('../assets/cuaca.png')}
                            h={'35'}
                            w={'50'}
                            alt ="gagal"
                          />
                          <Text fontWeight="bold" fontSize="sm" pl={2} pt={2}>
                            {perjam5Temp}ᴼC
                          </Text>
                        </HStack>
                        <Text fontWeight="bold" fontSize="sm" pt={1}>
                          {perjam5Condition}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Divider bg="#90BFFF" />
                  <Box w="100%" h="20">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" ml={3} my={7}>
                        {perjam6}
                      </Text>
                      <Box w="65%" p={3} alignItems="center">
                        <HStack justifyContent="center">
                          <Image
                            source={require('../assets/cuaca.png')}
                            h={'35'}
                            w={'50'}
                            alt ="gagal"
                          />
                          <Text fontWeight="bold" fontSize="sm" pl={2} pt={2}>
                            {perjam6Temp}ᴼC
                          </Text>
                        </HStack>
                        <Text fontWeight="bold" fontSize="sm" pt={1}>
                          {perjam6Condition}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Divider bg="#90BFFF" />
                  <Box w="100%" h="20">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" ml={3} my={7}>
                        {perjam7}
                      </Text>
                      <Box w="65%" p={3} alignItems="center">
                        <HStack justifyContent="center">
                          <Image
                            source={require('../assets/cuaca.png')}
                            h={'35'}
                            w={'50'}
                            alt ="gagal"
                          />
                          <Text fontWeight="bold" fontSize="sm" pl={2} pt={2}>
                            {perjam7Temp}ᴼC
                          </Text>
                        </HStack>
                        <Text fontWeight="bold" fontSize="sm" pt={1}>
                          {perjam7Condition}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>

                  <Divider bg="#90BFFF" />
                  <Box w="100%" h="20">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" ml={3} my={7}>
                        {perjam8}
                      </Text>
                      <Box w="65%" p={3} alignItems="center">
                        <HStack justifyContent="center">
                          <Image
                            source={require('../assets/cuaca.png')}
                            h={'35'}
                            w={'50'}
                            alt ="gagal"
                          />
                          <Text fontWeight="bold" fontSize="sm" pl={2} pt={2}>
                            {perjam8Temp}ᴼC
                          </Text>
                        </HStack>
                        <Text fontWeight="bold" fontSize="sm" pt={1}>
                          {perjam8Condition}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
              <Box w="90%" mt={3} alignItems="center">
                <Text fontWeight="medium" fontSize="xl">
                  Rincian
                </Text>
                <Box w="100%" bg="#90BFFF" rounded="md" shadow={3} mb={5}>
                  <Image
                    source={require('../assets/sunrise.png')}
                    h={'50'}
                    w="95%"
                    mx={3}
                    mt={5}
                    alt ="gagal"
                  />
                  <HStack justifyContent={'center'} mx={1} mb={2}>
                    <Text fontWeight="bold">{terbit}</Text>
                  </HStack>
                  <Box alignItems="center">
                      <Text fontWeight="bold" p={2}>
                        Sunrise{' '}
                      </Text>
                    </Box>
                </Box>
                <Box w="100%" bg="#90BFFF" rounded="md" shadow={3} mb={5}>
                  <Image
                    source={require('../assets/bulan.png')}
                    h={'60'}
                    w="95%"
                    mx={3}
                    mt={5}
                    alt ="gagal"
                  />
                  <VStack>
                    <HStack justifyContent={'center'} mx={1} mb={1}>
                      <Text fontWeight="bold">{sunset}</Text>
                    </HStack>
                    <Box alignItems="center">
                      <Text fontWeight="bold" p={2}>
                        Sunset{' '}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
                <HStack w="100%" mb={3}>
                  <Box w="49%" bg="#90BFFF" rounded="md" shadow={3} mr={2}>
                    <Text mx={2} pt={3} pl={1} fontSize="xs" fontWeight="bold">
                      <Ionicons name="ios-thermometer" size={20} />
                      TERASA SEPERTI
                    </Text>
                    <Box alignItems="center" w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        pl={2}
                        pt={2}
                        mb={2}>
                        {feelsLike}ᴼC
                      </Text>
                    </Box>
                  </Box>
                  <Box w="49%" bg="#90BFFF" rounded="md" shadow={3}>
                    <Text mx={2} pt={3} fontSize="xs" fontWeight="bold">
                      <Ionicons name="ios-sunny" size={20} /> INDEKS UV
                    </Text>
                    <Box alignItems="center" w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        pl={2}
                        pt={2}
                        mb={2}>
                        {indeks}
                      </Text>
                    </Box>
                  </Box>
                </HStack>
                <HStack w="100%" mb={3}>
                  <Box w="49%" bg="#90BFFF" rounded="md" shadow={3} mr={2}>
                    <Text mx={2} pt={3} fontSize="xs" fontWeight="bold">
                      <Ionicons name="rainy" size={20} />
                      POTENSI HUJAN
                    </Text>
                    <Box alignItems="center" w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        pl={2}
                        pt={2}
                        mb={2}>
                        {hujan}%
                      </Text>
                    </Box>
                  </Box>
                  <Box w="49%" bg="#90BFFF" rounded="md" shadow={3}>
                    <Text mx={2} pt={3} fontSize="xs" fontWeight="bold">
                      <Ionicons name="ios-water" size={20} /> KELEMBAPAN
                    </Text>
                    <Box alignItems="center" w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        pl={2}
                        pt={2}
                        mb={2}>
                        {lembap}%
                      </Text>
                    </Box>
                  </Box>
                </HStack>
                <HStack w="100%" mb={3}>
                  <Box w="49%" bg="#90BFFF" rounded="md" shadow={3} mr={2}>
                    <Text mx={2} pt={3} fontSize="xs" fontWeight="bold">
                      <Ionicons name="ios-cloud" size={20} />
                      TUTUPAN AWAN
                    </Text>
                    <Box alignItems="center" w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        pl={2}
                        pt={2}
                        mb={2}>
                        {awan} %
                      </Text>
                    </Box>
                  </Box>
                  <Box w="49%" bg="#90BFFF" rounded="md" shadow={3}>
                    <Text mx={2} pt={3} fontSize="xs" fontWeight="bold">
                      <Ionicons name="speedometer" size={20} /> TEKANAN
                    </Text>
                    <Box alignItems="center" w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        pl={2}
                        pt={2}
                        mb={2}>
                        {pressure} hPa
                      </Text>
                    </Box>
                  </Box>
                </HStack>
                <HStack w="100%" mb={3}>
                  <Box w="49%" bg="#90BFFF" rounded="md" shadow={3} mr={2}>
                    <Text mx={2} pt={3} fontSize="xs" fontWeight="bold">
                      <Ionicons name="ios-thermometer" size={20} />
                      KECEPATAN ANGIN
                    </Text>
                    <Box alignItems="center" w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        pl={2}
                        pt={2}
                        mb={2}>
                        {angin} KM/H
                      </Text>
                    </Box>
                  </Box>
                  <Box w="49%" bg="#90BFFF" rounded="md" shadow={3}>
                    <Text mx={2} pt={3} fontSize="xs" fontWeight="bold">
                      <Ionicons name="ios-eye" size={20} /> JARAK PANDANG
                    </Text>
                    <Box alignItems="center" w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        pl={2}
                        pt={2}
                        mb={2}>
                        {jarakpandang} ft
                      </Text>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Center>
        </ScrollView>
      </View>
    );
  }
}

export default DetailWeatherScreen;
