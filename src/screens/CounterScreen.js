import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    // TODO: fix this
    let counter = 0;
    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    counter++;
                }}
            />
            <Button
                title="Decrease"
                onPress{() => {
                    counter--;
                }}
            />
            <Text>Current Count:</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
