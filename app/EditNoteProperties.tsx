import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Chip,
  TextInput,
  Divider,
  Dialog,
  Portal,
  Text,
} from "react-native-paper";
import { Pressable } from "react-native";
import { FavoritesIcon, TrashIcon } from "@/components/Icon";
import CategorySheet from "@/components/CategorySheet";
import DropdownPriority from "@/components/DropdownPriority";
import { Stack } from "expo-router";

const EditNoteProperties = () => {
  const [noteName, setNoteName] = useState("");
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const data = [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
    { id: 3, title: "Category 3" },
    { id: 4, title: "Category 4ffff" },
    { id: 5, title: "Category 5" },
    // Agrega más elementos según sea necesario
  ];

  return (
    <View>
      <Stack.Screen
        options={{
          title: `Edit Note Properties`,
          headerShown: true,
          headerRight: () => {
            return (
              <>
                <Pressable onPress={() => console.log("Bookmark")}>
                  <FavoritesIcon />
                </Pressable>
                <Pressable onPress={showDialog}>
                  <TrashIcon />
                </Pressable>

                <Portal>
                  <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Icon icon="alert" />
                    <Dialog.Title style={styles.title}>
                      This is a title
                    </Dialog.Title>
                    <Dialog.Content>
                      <Text variant="bodyMedium">This is simple dialog</Text>
                    </Dialog.Content>
                  </Dialog>
                </Portal>
              </>
            );
          },
        }}
      />

      <TextInput
        style={styles.input}
        label="name"
        value={noteName}
        mode="outlined"
        onChangeText={(text) => setNoteName(text)}
      />
      <Divider />
      <Text variant="bodySmall">Categories</Text>
      <View style={styles.chipContainer}>
        {data.map((item) => (
          <Chip
            key={item.id}
            icon="close"
            onPress={() => console.log("close")}
            style={styles.chips}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              variant="bodySmall"
              style={styles.chipText}
            >
              {item.title}
            </Text>
          </Chip>
        ))}
      </View>

      <CategorySheet />
      <Divider />
      <Text variant="bodySmall">Priority</Text>
      <DropdownPriority />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    maxWidth: 200,
    width: "100%",
  },
  card: {
    width: 250,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  chipContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chips: {
    margin: 4,
    width: 100,
  },
  chipText: {
    width: "100%",
  },
});

export default EditNoteProperties;
