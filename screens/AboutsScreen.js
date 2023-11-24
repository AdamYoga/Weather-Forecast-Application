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
  Heading,
  Divider,
} from 'native-base';
import { Header } from '../components';

class InformationScreen extends Component {
  render() {
    return (
      <View flex={1} bg={'#D2E5FF'}>
        <Header title="About" />
        <ScrollView>
          <Center>
            <Box alignItems={'center'} w={'80%'} bg={'#fff'} my={'5'}>
              <Image
                source={require('../assets/logo.png')}
                h={'250'}
                w={'100%'}
              />
            </Box>
            <Box alignItems={'center'} w="85%">
              <Divider mt="5px" mb="10px" bg="#90BFFF" />
              <Heading>Tentang Aplikasi</Heading>
              <Text mx={5} textAlign={'center'} my={3}>
                Aplikasi Thor Weather merupakan salah satu aplikasi prakiraan
                cuaca.
              </Text>
              <Divider mt="5px" mb="10px" bg="#90BFFF" />
            </Box>

            <Box w="85%">
              <Center>
                <Heading mb="10px" alignItems={'center'}>
                  Informasi Aplikasi
                </Heading>
              </Center>
              <VStack>
                <HStack justifyContent={'space-between'}>
                  <Text fontWeight={'bold'}>Dibuat Oleh</Text>
                  <Text>RAGNA Team</Text>
                </HStack>
                <HStack justifyContent={'space-between'}>
                  <Text fontWeight={'bold'}>API</Text>
                  <Text>Weather API</Text>
                </HStack>
              </VStack>
              <Divider mt="15px" mb="10px" bg="#90BFFF" />
            </Box>

            <Box w="85%">
              <Center>
                <Heading mb="10px" alignItems={'center'}>
                  RAGNA Team
                </Heading>
              </Center>
              <VStack bg='#034BAD' rounded='5%'>
                <HStack justifyContent={'center'} w="100%">
                  <Box alignItems={'center'} w={'23%'} my={'3'} mx={'2'}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/564x/a0/e7/32/a0e732b4013afe33d094a63205481422.jpg',
                      }}
                      h={'75'}
                      w={'100%'}
                      rounded="100%"
                      ml={5}
                    />
                  </Box>
                  <Box my={'5'} justifyContent={'center'} ml={2} w="70%">
                    <Text fontSize="md" ml={3} color='#fff'>
                      Ghaly Pramudya A.M.
                    </Text>
                  </Box>
                </HStack>
                <HStack justifyContent={'center'} w="100%">
                  <Box alignItems={'center'} w={'23%'} my={'2'} mx={'2'}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/564x/15/44/26/15442664210982f03932d3ee28b4bd1f.jpg',
                      }}
                      h={'75'}
                      w={'100%'}
                      rounded="100%"
                      ml={5}
                    />
                  </Box>
                  <Box my={'5'} justifyContent={'center'} ml={2} w="70%">
                    <Text fontSize="md" ml={3} color='#fff'>
                      Adam Yoga Yudhistira
                    </Text>
                  </Box>
                </HStack>
                <HStack justifyContent={'center'} w="100%">
                  <Box alignItems={'center'} w={'23%'} my={'2'} mx={'2'}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/564x/cb/5d/f9/cb5df989e8266ee5b15f8077f24fb736.jpg',
                      }}
                      h={'75'}
                      w={'100%'}
                      rounded="100%"
                      ml={5}
                    />
                  </Box>
                  <Box my={'5'} justifyContent={'center'} ml={2} w="70%">
                    <Text fontSize="md" ml={3} color='#fff'>
                      Rizki Afifatus Sa'diyah
                    </Text>
                  </Box>
                </HStack>
                <HStack justifyContent={'center'} w="100%">
                  <Box alignItems={'center'} w={'23%'} my={'2'} mx={'2'}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/564x/33/6f/7c/336f7ce10109237cce3d9573c3ee7c56.jpg',
                      }}
                      h={'75'}
                      w={'100%'}
                      rounded="100%"
                      ml={5}
                    />
                  </Box>
                  <Box my={'5'} justifyContent={'center'} ml={2} w="70%">
                    <Text fontSize="md" ml={3} color='#fff'>
                      Nabila Indri Rissanti
                    </Text>
                  </Box>
                </HStack>
                <HStack justifyContent={'center'} w="100%">
                  <Box alignItems={'center'} w={'23%'} my={'3'} mx={'2'}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/564x/b9/cd/45/b9cd45ef89e57df62f515184c423cca9.jpg',
                      }}
                      h={'75'}
                      w={'100%'}
                      rounded="100%"
                      ml={5}
                    />
                  </Box>
                  <Box my={'5'} justifyContent={'center'} ml={2} w="70%">
                    <Text fontSize="md" ml={3} color='#fff'>
                      Aulia Wahyuningtiyas
                    </Text>
                  </Box>
                </HStack>
              </VStack>
              <Divider mt="15px" mb="10px" bg="#90BFFF" />
            </Box>
          </Center>
        </ScrollView>
      </View>
    );
  }
}

export default InformationScreen;