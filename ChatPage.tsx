import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const chatItems = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: '',
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI ...',
    shop: 'Shop LTD Food',
    image: '',
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: '',
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: '',
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: '',
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: '',
  },
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: '',
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI ...',
    shop: 'Shop LTD Food',
    image: '',
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: '',
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: '',
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: '',
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: '',
  },
];

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity>
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Chat</Text>
    <TouchableOpacity> 
      <Ionicons name="cart-outline" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

const ChatItem = ({ item }) => (
  <View style={styles.chatItem}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <View style={styles.chatInfo}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.shopName}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const BottomNavBar = () => (
  <View style={styles.bottomNav}>
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

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.infoText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
        <FlatList
          data={chatItems}
          renderItem={({ item }) => <ChatItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    padding: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  infoText: {
    padding: 10,
    backgroundColor: '#EEEEEE',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
  },
  shopName: {
    color: 'gray',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  chatButtonText: {
    color: 'white',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});

export default App;