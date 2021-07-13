import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import RestaurantItem from './RestaurantItem';

const ListRestaurant = ({listRestaurant}) => {
  const renderItem = ({item}) => (
    <RestaurantItem listFood={item.listFood} nameRestaurant={item.name} />
  );
  return (
    <FlatList
      data={listRestaurant}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  );
};

export default ListRestaurant;

const styles = StyleSheet.create({});
