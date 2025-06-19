import { ScaledSheet } from 'react-native-size-matters';

export const style = ScaledSheet.create({
  descriptionContainer: {
    marginTop: '70@vs',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10@s',
  },
  description: {
    textAlign: 'center',
    fontSize: '14@ms0.3',
  },
  uploadImg: {
    height: '80@vs',
    width: '89%',
  },
  talk: {
    height: '80@vs',
    width: '80%',
  },
  imgContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '20@vs',
  },
  doctorImg: {
    height: '40%',
    width: '100%',
    marginTop: '40@vs',
  },
});
