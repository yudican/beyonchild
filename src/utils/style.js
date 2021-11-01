import {DARK_COLOR} from './constant/color';

export const shadow = {
  shadowColor: DARK_COLOR,
  shadowOffset: {width: 0, height: 4},
  shadowRadius: 6,
  shadowOpacity: 0.2,
  elevation: 5,
};

export const flexBetweenRow = {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};

export const horizontalAnimation = {
  cardStyleInterpolator: ({current, layouts}) => {
    console.log('current', current);
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};
