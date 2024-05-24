import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, TextInput, Button} from 'react-native';
import {WebView} from 'react-native-webview';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Map = () => {
  const [mapUrl, setMapUrl] = useState(
    'https://leafletjs.com/examples/mobile/example.html#9.3077/2.3158',
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null); // Stores search results

  useEffect(() => {
    const unsubscribe = Dimensions.addEventListener('change', () => {
      setMapUrl(mapUrl => `${mapUrl}&width=${SCREEN_WIDTH}`);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Function to handle search
  const handleSearch = async () => {
    if (!searchQuery) return; // Handle empty search

    // Simulate fetching data (replace with actual API call)
    const results = await fetch(
      `https://api.example.com/search?q=${searchQuery}`,
    );
    const data = await results.json();

    // Assuming data contains coordinates for the searched country
    const {latitude, longitude} = data.country; // Replace with actual data structure

    // Update map center based on search results
    setMapUrl(
      `https://leafletjs.com/examples/mobile/example.html#9.3077/2.3158?center=${latitude},${longitude}`,
    );
    setSearchResults(data); // Update search results state (optional)
  };

  return (
    <View style={styles.mapContainer}>
      {/* WebView for displaying the Leaflet map */}
      <WebView source={{uri: mapUrl}} style={styles.map} />
      {/* Search container */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher..."
          onChangeText={setSearchQuery}
        />
        {/* Search button */}
        <Button title="Rechercher" onPress={handleSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: SCREEN_WIDTH / 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Map;
