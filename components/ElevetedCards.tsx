import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevetedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevetedCards</Text>
      <ScrollView horizontal={true} style={[styles.container]}>
        <View style={[styles.card, styles.card1]}>
          <Text>1</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>2</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>3</Text>
        </View>
        <View style={[styles.card, styles.card4]}>
          <Text>4</Text>
        </View>
        <View style={[styles.card, styles.card5]}>
          <Text>5</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 6,
  },
  card1: {
    backgroundColor: '#0da578',
  },
  card2: {
    backgroundColor: '#4aca0f',
  },
  card3: {
    backgroundColor: '#cc18a8',
  },
  card4: {
    backgroundColor: '#e6ff01',
  },
  card5: {
    backgroundColor: '#a52828',
  },
});
