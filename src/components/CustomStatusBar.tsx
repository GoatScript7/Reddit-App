import {useIsFocused} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const CustumStatusBar = props => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default CustumStatusBar;
