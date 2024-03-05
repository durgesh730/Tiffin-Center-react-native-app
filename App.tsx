import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./Navigation/HomeNavigation";
import {
  Appbar,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from "react-native-paper";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <NavigationContainer>
      <Provider>
        <HomeNavigation />
      </Provider>
    </NavigationContainer>
  );
}
