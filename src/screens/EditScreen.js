/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {BlogContext} from '../context/BlogContext';

const EditScreen = ({navigation, route}) => {
  const [values, setValues] = useState({
    title: '',
    content: '',
  });
  const {editBlog} = useContext(BlogContext);

  const _handleMultiInput = name => text => {
    setValues({...values, [name]: text});
  };

  const handleSubmit = () => {
    editBlog({...values, id: route.params.id});
    navigation.navigate('Blog List');
  };

  useEffect(() => {
    setValues({title: route.params.title, content: route.params.content});
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerForm}>Create Blog</Text>
      <View style={styles.formControl}>
        <Text style={styles.labelText}>Title</Text>
        <TextInput
          value={values.title}
          onChangeText={_handleMultiInput('title')}
          style={styles.inputText}
          placeholder="Enter title"
          autoCapitalize="none"
          keyboardAppearance="light"
          returnKeyLabel="next"
          returnKeyType="next"
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.labelText}>Content</Text>
        <TextInput
          value={values.content}
          onChangeText={_handleMultiInput('content')}
          style={styles.inputText}
          placeholder="Enter content"
          keyboardAppearance="light"
          autoCapitalize="none"
          returnKeyLabel="go"
          returnKeyType="go"
        />
      </View>
      <View>
        <Button title="Edit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
  headerForm: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  formControl: {
    marginBottom: 16,
  },
  inputText: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
  },
  labelText: {
    marginBottom: 8,
  },
});
