import React, {useState, useContext} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Modal,
  Text,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {db} from '../firebaseConfig'; // Assurez-vous que le chemin est correct
import {collection, addDoc, query, where, getDocs} from 'firebase/firestore';
import {AuthContext} from '../AuthContext';
import LoadingOverlay from '../components/LoadingOverlay';
// import bcrypt from 'bcryptjs';

// bcrypt.setRandomFallback(len => {
//   const buf = new Uint8Array(len);
//   return buf.map(() => Math.floor(Math.random() * 256));
// });

const facebook = require('../assets/home.png');

export default function Register() {
  const navigation = useNavigation();
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext); // Obtenez setIsAuthenticated du contexte d'authentification

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDateChange = (event: any, newDate: Date | undefined) => {
    const currentDate = newDate || selectedDate;
    setShowDatePicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const confirmDateSelection = () => {
    setShowDatePicker(false);
  };

  // Function to check if the email format is valid
  const isValidEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    navigation.navigate('Connexion', {screen: 'Login'});
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      // Vérifier si tous les champs sont remplis
      if (
        !lastName ||
        !firstName ||
        !nationality ||
        !email ||
        !number ||
        !password
      ) {
        Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
        setLoading(false);
        return;
      }

      // Vérifier si l'email est valide
      if (!isValidEmail(email)) {
        Alert.alert('Erreur', 'Veuillez saisir un email valide.');
        setLoading(false);
        return;
      }

      // Vérifier si l'email existe déjà dans la base de données
      const emailQuery = query(
        collection(db, 'Tourist'),
        where('email', '==', email),
      );
      const emailQuerySnapshot = await getDocs(emailQuery);
      if (!emailQuerySnapshot.empty) {
        Alert.alert(
          'Erreur',
          'Cet email est déjà utilisé. Veuillez vous connecter ou utiliser un autre email.',
        );
        setLoading(false);
        return;
      }

      // Hasher le mot de passe avant de le stocker
      // const hashedPassword = bcrypt.hashSync(password, 10);
      // Ajouter les données utilisateur à la collection 'Tourist'
      const userRef = await addDoc(collection(db, 'Tourist'), {
        lastName,
        firstName,
        nationality,
        email,
        number,
        // password: hashedPassword,
        password,
        dateOfBirth: selectedDate,
      });

      // Récupérer l'ID généré pour l'utilisateur inscrit
      const userId = userRef.id;

      // Ajouter les données utilisateur migrées à la collection 'User'
      await addDoc(collection(db, 'User'), {
        email,
        // password: hashedPassword,
        password,
        type_user: 'Touriste',
        id_connected: userId,
      });

      // Réinitialiser le formulaire après enregistrement
      setLastName('');
      setFirstName('');
      setNationality('');
      setEmail('');
      setNumber('');
      setPassword('');
      setSelectedDate(new Date());

      // Mettre à jour l'état d'authentification et rediriger l'utilisateur
      setIsAuthenticated(true);
      Alert.alert('Succès', 'Votre inscription a été enregistrée !', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Acceuil'), // Assurez-vous que 'Bienvenu' et 'RegisteredHome' existent
        },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert('Erreur', "Une erreur est survenue lors de l'inscription.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={loading} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={facebook} style={styles.image} resizeMode="contain" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Votre Nom"
            value={lastName}
            onChangeText={setLastName}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Vos ou Votre Prénom"
            value={firstName}
            onChangeText={setFirstName}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Votre Nationalité"
            value={nationality}
            onChangeText={setNationality}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Pressable style={styles.dateInput} onPress={toggleDatePicker}>
            <Text style={styles.dateText}>
              {selectedDate.toLocaleDateString('en-GB')}
            </Text>
          </Pressable>
          <Modal visible={showDatePicker} animationType="slide">
            <View style={styles.modalContainer}>
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
              <Pressable onPress={confirmDateSelection}>
                <Text>Confirm</Text>
              </Pressable>
            </View>
          </Modal>
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
            placeholder="Votre Numéro"
            value={number}
            onChangeText={setNumber}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de Passe"
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.rememberView}>
          <View style={styles.switch}></View>
          <View>
            <Pressable onPress={() => Alert.alert('Forget Password!')}>
              <Text onPress={handleLogin}>
                J'ai déjà un compte ?
                <Text style={styles.connexionText}>Me connecter</Text>
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </Pressable>
        </View>
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
  dateInput: {
    height: 50,
    borderColor: '#4CAF50',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    color: '#4CAF50',
    borderRadius: 7,
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
  connexionText: {
    color: 'red',
    fontWeight: 'bold',
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
  switch: {},
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
  dateText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
