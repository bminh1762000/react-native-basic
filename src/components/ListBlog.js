import React, {useContext} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {BlogContext} from '../context/BlogContext';
import ItemBlog from './ItemBlog';

const ListBlog = () => {
  const {blogList, deleteBlog} = useContext(BlogContext);
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <ItemBlog
      name={item.title}
      onSelect={() => deleteBlog(item)}
      onView={() => navigation.navigate('View Detail', {itemId: item.id})}
    />
  );
  return (
    <View>
      <FlatList
        data={blogList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListBlog;

const styles = StyleSheet.create({});
