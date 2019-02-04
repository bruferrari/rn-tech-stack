import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Container, Left, Right, Body, Header, Title } from 'native-base';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
            <Header>
                <Left/>
                <Body>
                    <Title>Tech Stack</Title>
                </Body>
                <Right />
            </Header>
                <Container>
                    <LibraryList />
                </Container>
            </View>
        </Provider>
    );
};

export default App;