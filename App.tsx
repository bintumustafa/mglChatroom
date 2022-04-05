import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import ConnectionButton from './components/ConnectionButton';
import { Separator } from './components/separators';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width:150, height:150,
          marginTop:"15%",
        }}
        source={
          require("./assets/imgMgl.jpeg")
        }
      />
      <Text 
        style={{
          fontSize: 38,
          color: "rgba(255, 255, 255, 1)",
          fontWeight: "bold",
        }}>
          Discutez instantanément simplement!
      </Text>
      <View style={{flexDirection:"row", top:"55%"}}>
        <ConnectionButton title="Connexion" color={'white'}/>
        <ConnectionButton title ="Inscription" color={'#5D96F5'}/>      
        <StatusBar style="auto" />
      </View>
      </View>
  );
}

//Styled components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D96F5',
    position : 'relative',
    alignItems: 'center', 
  },
  
  
});
