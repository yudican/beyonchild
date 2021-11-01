import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import ModalInformation from './src/components/atoms/Modal';
import Store from './src/config/redux/store';
import Routes from './src/config/routes';
import {PRIMARY_COLOR} from './src/utils/constant/color';
import Toast from 'react-native-toast-message';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR,
    accent: 'yellow',
  },
};
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Provider store={Store}>
        <View style={{flex: 1}}>
          <Toast ref={ref => Toast.setRef(ref)} />
          <ModalInformation />
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </View>
      </Provider>
    </PaperProvider>
  );
};

export default App;
