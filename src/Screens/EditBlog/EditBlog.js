import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import BlogContext from '../../Context/BlogContext';

const EditBlog = (props) => {
    const { dispatch } = useContext(BlogContext);
    const { title, content, id } = props.navigation.state.params;
    const [ formData, updateFormData ] = useState({
        title,
        content
    })
    return (
        <View>
            <Text style={styles.text}>Title</Text>
            <TextInput 
                onChangeText={(text) => updateFormData(oldData => {
                    return { ...oldData, title: text }
                })}
                value={formData.title}
            />
            <Text style={styles.text}>Content</Text>
            <TextInput 
                onChangeText={text => updateFormData(oldData => {
                    return {...oldData, content: text}
                })}
                value={formData.content}
            />
            <TouchableOpacity
                onPress={() => {
                    dispatch( {type: 'editBlog', newBlog: {
                        title: formData.title,
                        content: formData.content,
                        id
                    }})
                }}>
                <Text style={styles.button}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

EditBlog.navigationOptions = () => {
    return {
        title: "Edit Blog"
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
    }
});

export default withNavigation(EditBlog);