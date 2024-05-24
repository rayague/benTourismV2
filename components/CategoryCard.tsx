import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {Ionicons} from '@expo/vector-icons';

type Category = {
  name: string;
  icon: 'md-build' | 'md-cut' | 'md-laptop' | 'arrow-forward';
  color: string;
};

const categories: Category[] = [
  {name: 'Acc Repair', icon: 'md-build', color: '#ffbc99'},
  {name: 'Beauty', icon: 'md-cut', color: '#cabdff'},
  {name: 'Appliance', icon: 'md-laptop', color: '#b1e5fc'},
  {name: 'See All', icon: 'arrow-forward', color: '#ececec'},
];

const CategoryCard = () => {
  const renderCategory = ({name, icon, color}: Category) => (
    <View key={name}>
      <TouchableOpacity
        style={[styles.category, {backgroundColor: color}]}></TouchableOpacity>
      <Text style={styles.categoryTitle}>{name}</Text>
    </View>
  );

  return <View style={styles.container}>{categories.map(renderCategory)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 16,
  },
  category: {
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
  categoryTitle: {
    marginTop: 15,
    color: '#333',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CategoryCard;
