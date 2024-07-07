import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <Text style={styles.logo}>CROSSBEE</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={24} color="black" />
          <Ionicons name="cart" size={24} color="black" />
          <Ionicons name="person" size={24} color="black" />
        </View>
      </View>

      <View style={styles.banner}>
        <Image style={styles.bannerImage} source={require('../assets/banner.png')} />
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Map through your categories here */}
          <TouchableOpacity style={styles.categoryItem}>
            <Text>Category 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text>Category 2</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Deals</Text>
        <View style={styles.sectionContent}>
          {/* Map through your best deals products here */}
          <View style={styles.productItem}>
            <Image style={styles.productImage} source={require('../assets/product.png')} />
            <Text>Product 1</Text>
          </View>
          <View style={styles.productItem}>
            <Image style={styles.productImage} source={require('../assets/product.png')} />
            <Text>Product 2</Text>
          </View>
        </View>
      </View>

      {/* Repeat for other sections like Upcoming Products, Latest Products, etc. */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
  banner: {
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  category: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  section: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
});

export default HomeScreen;
