
import { ScrollView } from 'react-native';
import React from 'react';
import CatagoryCard from './CatagoryCard';

const Catagories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CatagoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CatagoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 2"
      />
      <CatagoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CatagoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CatagoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 2"
      />
      <CatagoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
    </ScrollView>
  );
}

export default Catagories;
