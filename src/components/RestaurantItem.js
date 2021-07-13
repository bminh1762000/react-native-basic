import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import FoodItem from './FoodItem';

const RestaurantItem = ({listFood, nameRestaurant}) => {
  const renderItem = ({item}) => (
    <FoodItem
      imageUrl={require(item.imageUri)}
      name={item.name}
      review={item.review}
      star={item.star}
    />
  );
  return (
    <View style={styles.resItem}>
      <Text style={styles.nameRes}>{nameRestaurant}</Text>
      <View style={styles.listFood}>
        {listFood.length > 0 ? (
          <FlatList
            data={listFood}
            renderItem={renderItem}
            key={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
          />
        ) : (
          <Text>No food</Text>
        )}
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  resItem: {
    marginTop: 8,
  },
  nameRes: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listFood: {
    marginTop: 8,
  },
});
