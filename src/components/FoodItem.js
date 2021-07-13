import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const FoodItem = ({imageUrl, name, star, review}) => {
  return (
    <View style={styles.foodItem}>
      <Image source={imageUrl} style={styles.imgItem} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.descText}>
        {star} Stars, {review} Reviews
      </Text>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  foodItem: {
    marginRight: 16,
    borderRadius: 12,
  },
  imgItem: {
    width: 250,
    height: 150,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
    marginTop: 8,
  },
  descText: {
    fontSize: 14,
    color: '#dfe6e9',
    marginTop: 8,
  },
});
