import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
            { name: 'Jane', age: 20 },
            { name: 'John', age: 25 },
            { name: 'Jim', age: 28 },
            { name: 'Joan', age: 33 },
            { name: 'Jen', age: 38 },
            { name: 'Joe', age: 43 },
            { name: 'Jess', age: 40 },
            { name: 'Janet', age: 23 },
            { name: 'Jason', age: 19 }
    ]
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>
                           {item.name} - Age {item.age}
                       </Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 4
    }
});

export default ListScreen;
