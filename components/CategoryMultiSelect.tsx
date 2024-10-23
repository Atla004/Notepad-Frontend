import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import AddCategoryDialog from "./AddCategoryDialog";
import Emoji from "./Emoji";
import { fetchData } from "@/services/localstorage";
import { getAllCategories } from "@/services/categories";
import { Category } from "@/types/apiResponses";
import { editLocalNote, getLocalNote } from "@/services/notelocalstorage";





const CategoryMultiSelect = () => {


  const userCategories = [
    { title: "Item 1", _id: "1", emoji: 0x1f60a },
    { title: "Item 2", _id: "2", emoji: 0x1f60a },
    { title: "Item 3", _id: "3", emoji: 0x1f60a },
    { title: "Item 4", _id: "4", emoji: 0x1f60a },
    { title: "Item 5", _id: "5", emoji: 0x1f60a },
    { title: "Item 6", _id: "6", emoji: 0x1f60a },
    { title: "Item 7", _id: "7", emoji: 0x1f60a },
    { title: "Item 8", _id: "8", emoji: 0x1f60a },
    { title: "Item 9", _id: "9", emoji: 0x1f60a },
    { title: "Item 10", _id: "10", emoji: 0x1f60a },
  ];
  

  
  const [selected, setSelected] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const getUserCategories = async () => {
    const username = await fetchData("username")
    const [categoriesData, data] = await Promise.all([
      getAllCategories(username),
      getLocalNote()
    ]);
    setSelected(data.categories);
    //console.log("categoriesData", categoriesData);
    setCategories(userCategories);


  }


  useEffect(() => {
    getUserCategories();
    return () => {

    }

  } , []);

  

  const categoryChip = (chip: Category) => {
    return (
      <View style={styles.categoriesItem}>
        <Text style={styles.selectedTextStyle}>{chip.title}</Text>
        <Emoji symbol={chip.emoji} />
      </View>
    );
  };

  const tinyCategoryChip = ({item , unSelect}: {item: Category, unSelect: any}  ) => {
    return (
      <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
        <View style={styles.tagsStyles}>
          <AntDesign color="black" name="close" size={17} />
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const handleChange = async (selectedItems: string[]) => {
    console.log("selectedItems", selectedItems);
    if (selectedItems.length > 5) {
      Alert.alert("Limit reached", "You can only select up to 5 items.");
      return;
    }
    setSelected(selectedItems);
    await editLocalNote({ categories: selectedItems });
    console.log("selectedItems", selectedItems);
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.input}
        data={userCategories}
        labelField="title"
        valueField="_id"
        placeholder="Select categories"
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={handleChange}
        renderItem={categoryChip}
        renderSelectedItem={(item, unSelect) => tinyCategoryChip({item, unSelect})}
      />

      <AddCategoryDialog />
    </View>
  );
};

export default CategoryMultiSelect;

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  input: {
    maxWidth: 300,
    width: "100%",
    alignSelf: "center",
  },
  icon: {
    marginRight: 5,
  },
  categoriesItem: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tagsStyles: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
