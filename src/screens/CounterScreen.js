import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement' }

    switch(action.type) {
        case 'increment':
          return {...state, count: state.count + 1}
        case 'decrement':
          return {...state, count: state.count - 1}
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] =
        useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    dispatch(state, 'increment');
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    dispatch(state, 'decrement');
                }}
            />
            <Text>Current Count: {state}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
