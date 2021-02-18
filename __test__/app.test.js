import {mount} from 'enzyme';
import React from 'react';
import App from '../App';

describe('App', () => {
    describe('#Text', () => {
        if('should render the text Welcome to React Native! in our first text tag', () => {
            const app = mount(<App/>);
            cont text = app.find('Text').at(0).text();
            expect(text).toEqual('Welcome to React Native!');
        });
    });
});
