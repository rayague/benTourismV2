import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

const Mapping = () => {
  const route = useRoute();
  const {location} = route.params || {
    location: {latitude: 9.3077, longitude: 2.3158},
  }; // Coordonnées pour centrer sur l'Afrique
  const zoomLevel = route.params?.zoomLevel || 3; // Zoom par défaut pour voir toute l'Afrique

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    location.longitude - 5
  },${location.latitude - 5},${location.longitude + 5},${
    location.latitude + 5
  }&layer=mapnik&marker=${location.latitude},${location.longitude}`;

  return (
    <View style={styles.mapContainer}>
      {/* WebView for displaying the map */}
      <WebView source={{uri: mapUrl}} style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Mapping;
