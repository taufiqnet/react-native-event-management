// rafce
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const EventDetailScreen = () => {
  const route = useRoute();
  const { eventId, title, description } = route.params || {}; // Handle case when params might be undefined

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Event Detail</Text>
      {eventId ? (
        <>
          <Text style={styles.detail}>Event ID: {eventId}</Text>
          <Text style={styles.detail}>Title: {title}</Text>
          <Text style={styles.detail}>Description: {description}</Text>
        </>
      ) : (
        <Text style={styles.error}>No event details available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default EventDetailScreen;
