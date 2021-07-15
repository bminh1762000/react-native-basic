import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ItemBlog = ({name, onSelect, onView}) => {
  return (
    <Pressable onPress={onView}>
      <View style={styles.container}>
        <Text style={styles.nameItem}>{name}</Text>
        <Pressable onPress={onSelect} style={styles.btnDelete}>
          <Icon name="delete" size={25} color="red" />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default ItemBlog;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  nameItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnDelete: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
