import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const SearchInput = ({search, onSubmitText, onChange}) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={onChange}
        style={styles.textInput}
        onEndEditing={onSubmitText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ecf0f1',
    borderRadius: 4,
  },
});
