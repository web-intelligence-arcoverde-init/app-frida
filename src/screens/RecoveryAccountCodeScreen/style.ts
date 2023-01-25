import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  codeFieldRoot: {width: '100%', justifyContent: 'space-around'},
  cell: {
    width: 48,
    paddingTop: 8,
    height: 48,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusCell: {
    borderColor: '#00000030',
  },
});
