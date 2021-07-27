import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import users from "../data/Users";
import NewMessageButton from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";


export default ContactsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chatRoom={chatRooms[0]} /> */}
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
