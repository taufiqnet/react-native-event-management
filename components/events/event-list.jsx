import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";

const EventList = () => {
  const renderItem = ({ item }) => {
    return <EventItem id={item.id} title={item.title} description={item.description} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Event List</Text>
      <FlatList
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => console.log("Refreshing ...")} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container takes up available space
    padding: 20,
  },
  item: {
    padding: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Optional styling for better item separation
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default EventList;
