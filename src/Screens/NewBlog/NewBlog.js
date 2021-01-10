import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import BlogContext from '../../Context/BlogContext';

const NewBlog = (props) => {
    const { dispatch } = useContext(BlogContext);
    const [ formData, updateFormData ] = useState({
        title: "",
        content: ""
    })
    return (
        <View>
            <Text style={styles.text}>Title</Text>
            <TextInput 
                onChangeText={(text) => updateFormData(oldData => {
                    return { ...oldData, title: text }
                })}
                value={formData.title}
                placeholder="Title"
                style={styles.input}
            />
            <Text style={styles.text}>Content</Text>
            <TextInput 
                onChangeText={text => updateFormData(oldData => {
                    return {...oldData, content: text}
                })}
                value={formData.content}
                placeholder="Content"
                style={styles.input}
            />
            <TouchableOpacity
                onPress={() => {
                    dispatch( {type: 'addBlog', newBlog: {
                        title: formData.title,
                        content: formData.content
                    }})
                }}>
                <Text style={styles.button}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

NewBlog.navigationOptions = () => {
    return {
        title: "New Blog"
    }
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 18
    },
    button: {
        marginVertical: 50,
        alignSelf: 'center',
        padding: 20,
        backgroundColor: 'blue',
        color: 'white'
    },
    input: {
        margin: 20,
        borderWidth: 1,
        padding: 5
    }
});

export default withNavigation(NewBlog);