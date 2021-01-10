import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BlogContext from '../../Context/BlogContext';
import { Feather } from '@expo/vector-icons';

const BlogList = (props) => {
    const { state, dispatch } = useContext(BlogContext);

    const itemList = (item) => {
        return (
            <View style={styles.itemRow}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('EditBlog', item)}>
                        <Text>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch({ type: 'deleteItem', id: item.id})
                    }}>
                    <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => dispatch({ type: 'addAutoBlog'})}>
                <Text style={styles.addButton}>Add Blog</Text>
            </TouchableOpacity>
            <FlatList 
                data={state}
                keyExtractor={ (item, index) => {
                    return `${item.title}-${index}`;
                }}
                renderItem={({item}) => itemList(item)}
            />
        </>
    )
}

BlogList.navigationOptions = (props) => {
    console.log(props);
    return {
        headerRight() {
            return (
                <TouchableOpacity onPress={() => { props.navigation.navigate('NewBlog') }}>
                    <Feather name='plus' size={30} style={ styles.addIcon }/>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 2
    },
    icon: {
        fontSize: 24
    },
    addButton: {
        alignSelf: 'center',
        padding: 20,
        borderWidth: 1,
        backgroundColor: 'blue',
        color: 'white',
        marginVertical: 10
    },
    addIcon: {
        marginRight: 5
    }
})

export default BlogList;