import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
const Stack = createNativeStackNavigator<StackParamList>();

type PropsHome = StackScreenProps<StackParamList, 'Home'>;
const HomeScreen = ({ route, navigation }: PropsHome) => {
  const window = useWindowDimensions();
    return (
      <View style={styles.container}>
      <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', { userId: 'akaver' })}
      />
      <Text>Phone size: {window.width}x{window.height}</Text>
      <Text></Text>
  </View>
    );
}
type PropsDetails = StackScreenProps<StackParamList, 'Details'>;
const DetailsScreen = ({ route, navigation }: PropsDetails) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen {route.params.userId}</Text>
        </View>
    );
}

export type StackParamList = {
  Home: undefined;
  Details: { userId: string };
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home Screen' }}/>
        <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Details Screen' }}  initialParams={{ userId: 'def value' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
