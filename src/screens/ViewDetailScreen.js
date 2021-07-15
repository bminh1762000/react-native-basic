/* eslint-disable react-hooks/exhaustive-deps */
import React, {useLayoutEffect, useEffect, useContext, useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {BlogContext} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/AntDesign';

const ViewDetailScreen = ({navigation, route}) => {
  const {blogList} = useContext(BlogContext);
  const [blog, setBlog] = useState(null);

  const onNavEdit = () => {
    if (blog) {
      navigation.navigate('Edit', {
        id: blog.id,
        title: blog.title,
        content: blog.content,
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onNavEdit} style={styles.headerRight}>
          <Icon name="edit" size={30} color="#000" />
        </Pressable>
      ),
    });
  }, [navigation, blog?.id]);

  useEffect(() => {
    const findBlog = blogList.find(item => item.id === route.params.itemId);
    setBlog(findBlog);
  }, []);

  return (
    <View style={styles.viewItem}>
      {!blog ? (
        <Text>No data</Text>
      ) : (
        <>
          <Text style={styles.titleText}>{blog.title}</Text>
          <Text style={styles.contentText}>{blog.content}</Text>
        </>
      )}
    </View>
  );
};

export default ViewDetailScreen;

const styles = StyleSheet.create({
  viewItem: {
    borderWidth: 2,
    borderColor: '#000',
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  headerRight: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  btnText: {
    color: 'white',
  },
});
