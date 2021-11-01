import {format} from 'date-fns';
import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  ToastAndroid,
  AlertIOS,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Snackbar from 'react-native-snackbar';
export const scaleFont = (fontSize = 12) => {
  return PixelRatio.getFontScale() * fontSize;
};

export const scaleHeight = (height = 0) => {
  return hp(`${height}%`);
};

export const scaleWidth = (width = 0) => {
  return wp(`${width}%`);
};

export const formatDate = (date, prefix = ' ') => {
  const time = new Date(date).getTime();
  const newDate = new Date(time);
  return format(newDate, `yyyy${prefix}MM${prefix}d`);
};

export const formatStringDate = (date, day = false) => {
  if (date) {
    const time = new Date(date).getTime();
    const newDate = new Date(time);

    if (day) {
      return format(newDate, 'E, d MMM yyyy');
    }
    return format(newDate, 'd MMM yyyy');
  }
  return 'Not Set';
};

export const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return year + '-' + (month < 10 ? '0' + month : month) + '-' + date; //format: dd-mm-yyyy;
};

// Status Bar
const {height, width} = Dimensions.get('window');
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const statusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

export const showToastMessage = msg => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Snackbar.show({
      text: msg,
      duration: Snackbar.LENGTH_SHORT,
    });
  }
};
