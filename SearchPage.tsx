import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const usbAdapters = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZaxOqYkZcrqkhKVnO7j65o-9y7WpPUqbZg&s',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFmq-LGBM5V4UuWiZXVK1XF5J7fRTKLsgGA&s',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
   {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS 2 chân',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDcvOeI0b7GsQfKuzLGeIiBJKgBW3qfbfcA&s',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '4',
    name: 'Đầu chuyển từ Cổng USB sang VGA',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLJmwz7bdUaiNMDsWH6J7Zr2-eAu2UYBgNA&s',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
   {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmsjFvQRS1bGZJvQrvfd2CDKe0YCl-W0pXA&s',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmGNgfdSxe916YvpDKQUZk9JbQ01ug0F0XA&s',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '7',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://vn-test-11.slatic.net/p/87ed940bb0a1c97db5496a6b4e2f5f2b.png',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '8',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWKPd-RXkhz2Fl3l-m1u8dsRW92He4DdxGA&s',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
];

const MenuBar = () => (
  <View style={styles.menuBar}>
    <TouchableOpacity>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <View style={styles.searchBar}>
      <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
      <TextInput 
        placeholder="Tìm kiếm..."
        style={styles.searchInput}
      />
    </View>
    <TouchableOpacity>
      <Ionicons name="cart-outline" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="ellipsis-vertical" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

const BottomNavBar = () => (
  <View style={styles.bottomNavBar}>
    <TouchableOpacity>
      <Ionicons name="menu" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="home" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

const AdapterItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
    </View>
    <View style={styles.ratingContainer}>
      <Text style={styles.rating}>{'★'.repeat(Math.floor(item.rating))}</Text>
      <Text style={styles.reviews}>({item.reviews})</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MenuBar />
      <FlatList
        data={usbAdapters}
        renderItem={({ item }) => <AdapterItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  item: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 5,
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
  },
  discount: {
    color: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    color: 'gold',
  },
  reviews: {
    marginLeft: 5,
    fontSize: 12,
    color: 'gray',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default App;