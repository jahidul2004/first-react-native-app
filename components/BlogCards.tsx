import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function BlogCards() {
  return (
    <View>
      <Text style={styles.headingText}>BlogCards</Text>
      <View>
        {/* Card1 */}
        <View style={styles.card}>
          <Image
            height={300}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa70BgePn1Rsf41oiG6ac0_TAzpKXj4d9qg&s',
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>A cute cat wearing sunglass!!!</Text>
          <Text style={styles.cardDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            iusto corporis vero perferendis minus exercitationem voluptatibus ea
            consequuntur aliquid dignissimos?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Read More...</Text>
          </TouchableOpacity>
        </View>
        {/* Card2 */}
        <View style={styles.card}>
          <Image
            height={300}
            source={{
              uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Another cute cat!</Text>
          <Text style={styles.cardDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            iusto corporis vero perferendis minus exercitationem voluptatibus ea
            consequuntur aliquid dignissimos?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Read More...</Text>
          </TouchableOpacity>
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
  button: {
    backgroundColor: '#ea14bc',
    width: 100,
    borderRadius: 4,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    margin: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  cardImage: {
    borderRadius: 8,
  },
});
