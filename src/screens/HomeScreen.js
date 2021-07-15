import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import ListBlog from '../components/ListBlog';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.navigate('Create');
          }}
          style={styles.headerRight}>
          <Icon name="plus" size={30} />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text style={styles.nameText}>List Blog</Text>
      </View>
      <ListBlog />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerName: {
    marginLeft: 16,
    marginVertical: 16,
  },
  nameText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  headerRight: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  btnText: {
    color: 'white',
  },
});
