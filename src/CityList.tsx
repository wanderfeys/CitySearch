import React from 'react';
import {Text, FlatList, TouchableOpacity, StyleSheet, View} from 'react-native';

const CityList = ({cities, handleCityPress}) => {
  const renderCityItem = ({item}) => {
    const cityId = item._links['city:item'].href;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleCityPress(cityId)}>
        <Text style={styles.cityName}>{item.matching_full_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={cities}
      keyExtractor={item => item._links['city:item'].href}
      renderItem={renderCityItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  cityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  population: {
    fontSize: 14,
    marginTop: 8,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
  },
});

export default CityList;
