import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";

import {
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

function InputBox() {
  const [message, setMessage] = useState("");
  const onMicrophonePress = () => {
    console.warn("Hello");
  };
  const onSendPress = () => {
    console.warn("On Send");
  };
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          placeholder={"Type a message"}
          style={styles.textInput}
          multiline
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icons} />
        {!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icons} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={24} color="white" />
          ) : (
            <MaterialIcons name="send" size={24} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default InputBox;
