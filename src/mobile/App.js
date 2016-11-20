import React from 'react';
import {treeConnect} from '../state';
import {
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Container, Content, Button, Header, Title, Footer, FooterTab, Icon } from 'native-base';

const mapGetToProps = (get) => ({
    gps: get.gpsData()
});

const url = 'https://xkcd.com'

const google = () => {
  Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
}

const App = ({gps = 0}) => (
    <Container> 
        <Header>
            <Title>Header</Title>
        </Header>

        <Content>
            <Button onPress={google}> Click Me! </Button>
            <Text>{gps || 'Acquiring GPS Signal...' }</Text>
        </Content>

        <Footer>
            <FooterTab>
                <Button transparent>
                    <Icon name='ios-call' />
                </Button>  
            </FooterTab>
        </Footer>
    </Container>
);

export default treeConnect(mapGetToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});