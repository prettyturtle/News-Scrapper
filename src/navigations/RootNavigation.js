import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NAVIGATION } from "../constants/Navigation"
import { NewsDetailScreen } from "../screens/NewsDetailScreen"
import { NewsTabNavigation } from "./NewsTabNavigation"

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: "black",
      }}
    >
      <Stack.Screen
        name={NAVIGATION.NEWS_TAB.NAME}
        component={NewsTabNavigation}
      />
      <Stack.Screen
        name={NAVIGATION.NEWS_DETAIL.NAME}
        component={NewsDetailScreen}
      />
    </Stack.Navigator>
  )
}
