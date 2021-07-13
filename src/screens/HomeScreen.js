/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchInput from '../components/SearchInput';
import ListRestaurant from '../components/ListRestaurant';
import useResult from '../customHook/useResult';

const HomeScreen = () => {
  const [textSearch, setTextSearch] = useState('');
  const [getListRestaurant, listRestaurant, errorMessage] = useResult();

  const handleChange = search => {
    setTextSearch(search);
  };

  const handleSubmit = () => {
    getListRestaurant(textSearch);
  };

  return (
    <View style={styles.homeContainer}>
      <View>
        <SearchInput
          search={textSearch}
          onSubmitText={handleSubmit}
          onChange={handleChange}
        />
      </View>
      <View>
        {errorMessage && <View>Something error occurred</View>}
        <ListRestaurant listRestaurant={listRestaurant} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    marginHorizontal: 8,
  },
});
