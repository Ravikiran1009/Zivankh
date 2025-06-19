import { ScaledSheet } from 'react-native-size-matters';

export const style = ScaledSheet.create({
  btnContainer: {
    flexDirection: 'row',
    borderWidth: 0.8,
    alignItems: 'center',
    gap: '10@s',
    padding: '6@ms',
    // paddingHorizontal: '6@s',
    borderRadius: '6@msr',
    backgroundColor: '#95b6be',
  },
  btnText: {
    color: 'white',
    fontSize: '15@ms0.3',
  },
  iconSize: {
    fontSize: '13@ms0.3',
  },
});
