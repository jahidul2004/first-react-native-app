import { ScrollView } from 'react-native';
import React from 'react';
import FlexCards from './components/FlexCards';
import ElevetedCards from './components/ElevetedCards';
import BlogCards from './components/BlogCards';
import ReviewCard from './components/ReviewCard';

const App = () => {
  return (
    <ScrollView>
      <FlexCards />
      {/* Eleveted Cards */}
      <ElevetedCards />

      {/* Blog cards */}
      <BlogCards />

      {/* Review cards */}
      <ReviewCard />
    </ScrollView>
  );
};

export default App;
