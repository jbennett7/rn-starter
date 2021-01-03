import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Joseph Bennett';
    return (
        <View>
            <Text style={styles.Title}>Getting started with react native!</Text>
	    <Text style={styles.Subhead1}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Title: {
        fontSize: 45
    },
    Subhead1: {
        fontSize: 20
    }
});

export default ComponentsScreen;
