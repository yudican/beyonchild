import React from 'react';
import {Platform, SafeAreaView, View} from 'react-native';
import {PRIMARY_COLOR} from '../../utils/constant/color';
import {scaleHeight, statusBarHeight} from '../../utils/helper';

const Layout = ({
  children,
  style,
  backgroundColor = '#fff',
  statusBar = false,
}) => {
  if (Platform.OS === 'ios') {
    return (
      <View style={[{flex: 1, backgroundColor}, style]}>
        {statusBar && <StatusBar />}
        {children}
      </View>
    );
  }
  return (
    <View style={[{flex: 1, backgroundColor}, style]}>
      {!statusBar && <StatusBar />}
      {children}
    </View>
  );
};

const StatusBar = () => (
  <View
    style={{
      height: statusBarHeight + scaleHeight(2.5),
      backgroundColor: PRIMARY_COLOR,
    }}
  />
);

export default Layout;
