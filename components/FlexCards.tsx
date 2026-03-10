import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlexCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlexCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.card4]}>
          <Text>Card 4</Text>
        </View>
      </View>
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
    flexDirection: 'row',
  },
  card: {
    width: '20%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 8,
  },
  card1: {
    backgroundColor: '#ac1313',
  },
  card2: {
    backgroundColor: '#13ac13',
  },
  card3: {
    backgroundColor: '#1313ac',
  },
  card4: {
    backgroundColor: '#ac13ac',
  },
});
