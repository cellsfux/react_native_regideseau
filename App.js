import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navigations from './app/navigation/Navigations';


export default function App() {
  return (
    <View style={{flex: 1}} >
        <Navigations/>
      <StatusBar style="auto" />
    </View>
  );
}


