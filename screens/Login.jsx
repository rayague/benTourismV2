import React, {useState, useContext} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAuth} from '../AuthContext';
import {useNavigation} from '@react-navigation/native';

const facebook = require('../assets/Serface.png');

export default function Login() {
  const navigation = useNavigation();
  const {setUser} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ForgotPassword = () => {
    navigation.navigate('Mot de passe oublié');
  };

  const handleRegister = () => {
    navigation.navigate('Inscription');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={facebook} style={styles.image} resizeMode="contain" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Votre Email"
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Votre Mot de Passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rememberView}>
          <View>
            <Pressable onPress={ForgotPassword}>
              <Text style={styles.forgetText}>Mot de passe oublié?</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Pressable
            style={styles.button}
            onPress={console.log('Alert:', Alert)}>
            <Text style={styles.buttonText}>Se Connecter</Text>
          </Pressable>
        </View>
        <Text style={styles.footerText} onPress={handleRegister}>
          Pas de compte ? <Text style={styles.signup}>S'inscrire</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 300,
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: '100%',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
    textAlign: 'center',
    marginHorizontal: 'auto',
  },
  button: {
    backgroundColor: '#4CAF50',
    height: 45,
    borderColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
    marginBottom: 50,
  },
  forgetText: {
    color: 'red',
    // fontWeight: 'bold',
  },
  footerText: {
    color: 'red',
    // fontWeight: 'bold',
  },
  signup: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
