import {ms} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: ms(24),
  },
  textActivityContainer: {
    marginLeft: ms(20),
    marginTop: ms(8),
  },
  buttonContainer: {
    marginRight: ms(24),
  },
  button: {
    backgroundColor: '#16abf8',
    width: ms(100),
    height: ms(37),
    borderRadius: ms(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: ms(12),
  },
  textActivity: {
    fontSize: ms(16),
    fontWeight: 'bold',
  },
});
