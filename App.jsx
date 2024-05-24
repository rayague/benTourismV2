// App.js
import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Infos from './screens/Infos';
import Chat from './screens/Chat';
import Account from './screens/Account';
import Agency from './screens/Agency';
import Mapping from './screens/Mapping';
import Booking from './screens/Booking';
import Event from './screens/Event';
import Login from './screens/Login';
import Register from './screens/Register';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider} from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import ForgotPassword from './screens/ForgotPassword';
import FormBooking from './screens/FormBooking';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          source={require('./assets/home.png')}
          style={styles.drawerImage}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const screenOptions = {
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: true,
  headerStyle: {
    backgroundColor: '#4CAF50',
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
    height: 120,
  },
  headerTitleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  tabBarStyle: {
    elevation: 1,
    height: 60,
  },
  drawerStyle: {
    backgroundColor: '#fff',
    width: 300,
    fontWeight: 'bold',
  },
};

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Acceuil"
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={screenOptions}>
            <Drawer.Screen name="Acceuil" component={Home} />
            <Drawer.Screen name="Nos Cultures" component={Infos} />
            <Drawer.Screen name="Mes Réservations">
              {props => (
                <ProtectedRoute {...props}>
                  <Booking {...props} />
                </ProtectedRoute>
              )}
            </Drawer.Screen>
            <Drawer.Screen name="Messagerie">
              {props => (
                <ProtectedRoute {...props}>
                  <Chat {...props} />
                </ProtectedRoute>
              )}
            </Drawer.Screen>
            <Drawer.Screen name="Évènements">
              {props => (
                <ProtectedRoute {...props}>
                  <Event {...props} />
                </ProtectedRoute>
              )}
            </Drawer.Screen>
            <Drawer.Screen name="Agences Touristiques">
              {props => (
                <ProtectedRoute {...props}>
                  <Agency {...props} />
                </ProtectedRoute>
              )}
            </Drawer.Screen>
            <Drawer.Screen
              name="Formulaire de Réservation"
              options={{drawerItemStyle: {display: 'none'}}}>
              {props => (
                <ProtectedRoute {...props}>
                  <FormBooking {...props} />
                </ProtectedRoute>
              )}
            </Drawer.Screen>
            <Drawer.Screen name="Mon Compte" component={Account} />
            <Drawer.Screen name="Map" component={Mapping} />
            <Drawer.Screen
              name="Connexion"
              component={Login}
              options={{drawerItemStyle: {display: 'none'}}}
            />
            <Drawer.Screen
              name="Inscription"
              component={Register}
              options={{drawerItemStyle: {display: 'none'}}}
            />
            <Drawer.Screen
              name="Mot de passe oublié"
              component={ForgotPassword}
              options={{drawerItemStyle: {display: 'none'}}}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#4CAF50',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  drawerImage: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
  },
  drawerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
});

export default App;
