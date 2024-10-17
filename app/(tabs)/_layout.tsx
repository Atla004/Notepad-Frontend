import * as React from "react";
import { BottomNavigation, Text, useTheme } from "react-native-paper";
import Categories from "./Categories";
import Favorites from "./Favorites";
import Home from "./Home";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const TCategories = () => <Categories />;

const TFavorites = () => <Favorites />;

const TNotes = () => <Home />;

const Tabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "Home",
      title: "Notes",
      focusedIcon: "inbox",
      unfocusedIcon: "inbox-outline",
    },
    {
      key: "Categories",
      title: "Categories",
      focusedIcon: "folder",
      unfocusedIcon: "folder-outline",
    },

    {
      key: "Favorites",
      title: "Favorites",
      focusedIcon: "star",
      unfocusedIcon: "star-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: TNotes,
    Favorites: TFavorites,
    Categories: TCategories,
  });
  const thme = useTheme();
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeIndicatorStyle={{ backgroundColor: thme.colors.scrim }}
    />
  );
};

export default function App() {
  const insets = useSafeAreaInsets();
  const thme = useTheme();
  return (
    <>
      <StatusBar backgroundColor={thme.colors.surface} />
      <SafeAreaView style={{ flex: 1, paddingBottom: insets.bottom }}>
        <Tabs />
      </SafeAreaView>
    </>
  );
}
