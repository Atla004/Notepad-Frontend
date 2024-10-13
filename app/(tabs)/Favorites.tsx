import { useState } from "react";
import { FlatList, StyleSheet, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import CardNote from "@/components/CardNote";
import SearchBar from "@/components/SearchBar";

const data = [
  {
    id: 1,
    title: "Sin ganas de vivir",
    description: "porque...",
  },
  {
    id: 2,
    title: "a veces pienso...",
    description: "es mentira",
  },
];

export default function Favorites() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <SearchBar placeholder="Search..."/>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardNote title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
}

const styles = StyleSheet.create({



});
