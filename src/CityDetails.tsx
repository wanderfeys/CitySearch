import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const CityDetails = ({route}) => {
  const {link} = route.params;
  const [cityDetails, setCityDetails] = useState(null);

  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const response = await axios.get(link);
        setCityDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCityDetails();
  }, [link]);

  if (!cityDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  console.log(cityDetails);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cityDetails.full_name}</Text>
      <Text style={styles.population}>
        Population: {cityDetails.population}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  population: {
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CityDetails;
