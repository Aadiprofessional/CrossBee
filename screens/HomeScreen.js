// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import AutoImageSlider from '../components/AutoImageSlider'; // Import AutoImageSlider component
import HelpBox from '../components/HelpBox'; // Import HelpBox component
import { colors } from '../styles/color';

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
  ];

  return (
    <ScrollView style={styles.container}>
      <CustomHeader />
      <AutoImageSlider />
      <View style={styles.backgroundContainer}>
        <View style={styles.topHalf} />
        <View style={styles.bottomHalf} />
        <HelpBox />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <TouchableOpacity style={styles.categoryItem} key={category.id}>
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Deals</Text>
        <View style={styles.sectionContent}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backgroundContainer: {
    height: 200, // Adjust height as needed
    position: 'relative',
  },
  topHalf: {
    backgroundColor: colors.main,
    height: '30%',
  },
  bottomHalf: {
    backgroundColor: '#FFFFFF',
    height: '50%',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
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
