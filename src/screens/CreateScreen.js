import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {BlogContext} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const [initialForm, setInitialForm] = useState({
    title: '',
    content: '',
  });
  const {createBlog} = useContext(BlogContext);

  const _handleMultiInput = name => text => {
    setInitialForm({...initialForm, [name]: text});
  };

  const handleSubmit = () => {
    createBlog(initialForm);
    navigation.navigate('Blog List');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerForm}>Create Blog</Text>
      <View style={styles.formControl}>
        <Text style={styles.labelText}>Title</Text>
        <TextInput
          value={initialForm.title}
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
          value={initialForm.content}
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
        <Button title="Create" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default CreateScreen;

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
