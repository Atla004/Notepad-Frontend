import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Avatar, Searchbar } from "react-native-paper";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({
  placeholder,
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      right={() => (
        <>
          <Pressable
            style={styles.avatar}
            onPress={() => router.push({ pathname: `../Profile` })}
          >
            <Avatar.Text size={35} label="A" />
          </Pressable>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginRight: 15,
  },
  
});
