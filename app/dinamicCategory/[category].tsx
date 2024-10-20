import { router, Stack, useLocalSearchParams } from "expo-router";
import { Button, FlatList, Pressable, StyleSheet, View } from "react-native";
import { NoteHtml } from "@/components/NoteHtml";
import { FavoritesIcon, SettingsIcon } from "@/components/Icon";
import { Text, useTheme } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import CardNote from "@/components/CardNote";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

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

const CategoryNotes = () => {
  const { category } = useLocalSearchParams();
  const theme = useTheme();
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <Stack.Screen
        options={{
          title: `${category}`,
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.primaryContainer,
          },
        }}
      />
      <StatusBar />
      <SearchBar
        placeholder="Search Notes..."
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <CardNote title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  headersLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: 80,
  },
});

export default CategoryNotes;
