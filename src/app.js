import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Left, Right, Body, Header, Title } from 'native-base';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={ { flex: 1 } }>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Tech Stack</Title>
                    </Body>
                    <Right />
                </Header>

                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;