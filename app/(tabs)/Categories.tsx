import { useState } from "react";
import { FlatList, StyleSheet, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import FABNewNote from "@/components/FABNewNote";
import CardNote from "@/components/CardNote";

const data = [
  {
    id: 1,
    title: "Sin ganas de vivir",
    description: "porque...",
  },
  {
    id: 2,
    title: "a fffveces pienso...",
    description: "es mentira",
  },
];

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardNote title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <FABNewNote />
    </>
  );
}

const styles = StyleSheet.create({});
