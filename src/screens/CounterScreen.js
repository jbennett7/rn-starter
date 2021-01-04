import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === number
    // action === change_increase || change_decrease 

    switch(action.type) {
        case 'change_increase':
            return state + 1;
        case 'change_decrease':
            return state - 1;
        default:
            return state;
};

const CounterScreen = () => {
    const [state, dispatch] =
        useReducer(reducer, 0);

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    dispatch(state, 'change_increase');
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    dispatch(state, 'change_decrease');
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
