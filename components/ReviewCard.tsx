import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ReviewCard() {
  return (
    <View>
      <Text style={styles.headingText}>ReviewCard</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
              }}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Jahidul Islam Jihad</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit.
            </Text>
            <Text style={styles.cardRating}>Rating: 5</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
              }}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Jahidul Islam Jihad</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit.
            </Text>
            <Text style={styles.cardRating}>Rating: 5</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
              }}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Jahidul Islam Jihad</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit.
            </Text>
            <Text style={styles.cardRating}>Rating: 5</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
              }}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Jahidul Islam Jihad</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit.
            </Text>
            <Text style={styles.cardRating}>Rating: 5</Text>
          </View>
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
    padding: 8,
    flexDirection: 'column',
    gap: 12,
  },
  card: {
    borderColor: '#9f9a9a',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    flexDirection: 'row',
    gap: 8,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.28)',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  cardRating: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardContent: {
    width: '80%',
  },
});
