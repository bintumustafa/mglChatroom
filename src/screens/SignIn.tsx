import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import ConnectionButton from '/home/bintumustafa/Bureau/projetMob2022/mglChatroom/src/components/ConnectionButton';

export default function SignIn() {
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
      <Text 
        style={{
          fontSize:22,
          fontWeight:'bold',
          top: "15%",        }}
      >   Connectez-vous
      </Text>
      <TextInput style={{top:'25%'}}
        placeholder="Entrer votre numéro de téléphone"
      />
      <View style={{flexDirection:"row", top:"90%", backgroundColor: '#5D96F5', width:"auto" }}>
        <ConnectionButton title="Se connecter" color={'#5D96F5'}></ConnectionButton>
      </View>
      <View style={{flexDirection:"row", top:"95%"}}> 
          <Text>Pas inscrit? </Text>
          <TouchableOpacity>
            <Text>S'inscrire</Text></TouchableOpacity>
      </View>
      
    </View>
  );
}

//Styled components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position : 'relative',
    alignItems: 'center', 
  },
  
  
});

