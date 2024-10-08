import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

export const FavoritesIcon = () => {
  return <Entypo name="star-outlined" size={24} color="black" />;
};

export const SunIcon = () => {
  return <Feather name="sun" size={24} color="black" />;
};

export const MoreIcon = () => {
  return <Feather name="more-vertical" size={24} color="black" />;
};

export const TrashIcon = () => {
  return <Feather name="trash-2" size={24} color="black" />;
};

export const FolderIcon = () => {
  return <FontAwesome6 name="folder" size={20} color="black" />;
};

export const BoxIcon = () => {
  return <Feather name="inbox" size={24} color="black" />;
};

export const PlusIcon = () => {
  <AntDesign name="plus" size={24} color="black" />;
};
