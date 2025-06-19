import { ScaledSheet } from 'react-native-size-matters';

export const style = ScaledSheet.create({
  headerContainer: {
    // borderWidth: 1,
    // padding: '20@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '20@vs',
    paddingRight: '10@s',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20@s',
  },
  applogo: {
    height: '48@vs',
    width: '48@s',
    marginLeft: '20@ms',
  },
  languageImg: {
    height: '40@vs',
    width: '110@s',
  },
});
