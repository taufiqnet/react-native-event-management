// rafce
import { useNavigation } from "expo-router";
import { StyleSheet, View } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
  const navigation = useNavigation()
  return (    
    <View style={styles.screen}>
        <EventList />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
    }
})

export default HomeScreen