import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactList: {
    uid: number;
    name: string;
    status: string;
    imageURI: string;
  }[] = [
    {
      uid: 1,
      name: 'Jahidul Islam Jihad',
      status: 'Online',
      imageURI:
        'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
    },
    {
      uid: 2,
      name: 'Sojib Sikder',
      status: 'Offline',
      imageURI:
        'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
    },
    {
      uid: 3,
      name: 'Siyam Amin',
      status: 'Online',
      imageURI:
        'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
    },
    {
      uid: 4,
      name: 'Ismail Hossain',
      status: 'Offline',
      imageURI:
        'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
    },
  ];

  const showAlert = (title: string, status: string, message: string) => {
    const finalTitle = `${title} (${status})`;
    Alert.alert(finalTitle, message);
  };
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contactList?.map(contact => (
          <View style={styles.contactItem} key={contact.uid}>
            <View>
              <Image
                style={styles.contactImage}
                source={{
                  uri: `${contact.imageURI}`,
                }}
              />
            </View>
            <View>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.statusText}>{contact.status}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  showAlert(
                    contact.name,
                    contact.status,
                    'Thank you for clicking me! I am working properly!!!',
                  );
                }}
                style={styles.contactButton}
              >
                <Text style={{ color: '#fff' }}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  container: {},
  contactItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    gap: 12,
  },
  statusText: {
    fontSize: 14,
    color: '#666',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  contactButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
});
