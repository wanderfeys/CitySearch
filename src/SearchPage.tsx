import React, {useState} from 'react';
import {View, TextInput, Button, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import debounce from 'lodash/debounce';
import {useNavigation} from '@react-navigation/native';
import CityList from './CityList';

const SearchPage = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [cities, setCities] = useState([]);

  const handleSearch = async (searchText: string) => {
    try {
      const response = await axios.get(
        `https://api.teleport.org/api/cities/?search=${searchText}`,
      );

      const cities = response.data._embedded['city:search-results'];
      setCities(cities);
    } catch (error) {
      console.error(error);
    }
  };

  const debouncedSearch = debounce(handleSearch, 300);

  const handleEndEditing = () => {
    debouncedSearch(searchQuery);
  };

  const handleCityPress = (link: any) => {
    navigation.navigate('CityDetails', {link});
  };

  return (
    <View style={{paddingHorizontal: 15, paddingTop: 10}}>
      <TextInput
        style={{
          height: 30,
          borderRadius: 5,
          paddingLeft: 5,
          borderWidth: 0.5,
          borderBottomColor: 'black',
        }}
        placeholder="Enter city name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onEndEditing={handleEndEditing}
      />
      <Button title="Search" onPress={() => handleSearch(searchQuery)} />

      <CityList cities={cities} handleCityPress={handleCityPress} />
    </View>
  );
};

export default SearchPage;
