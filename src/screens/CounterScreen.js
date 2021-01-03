import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

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
                onPress={() => {
                    counter--;
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
