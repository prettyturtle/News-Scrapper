import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NAVIGATION } from "../constants/Navigation"
import { Ionicons } from "@expo/vector-icons"
import { NewsListScreen } from "../screens/NewsListScreen"
import { FavoriteNewsListScreen } from "../screens/FavoriteNewsListScreen"
import { Text } from "react-native"

const BottomTab = createBottomTabNavigator()

export const NewsTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const getIconName = () => {
            if (route.name === NAVIGATION.FAVORITE_NEWS_LIST.NAME) {
              return "star"
            }

            return "home"
          }
          return (
            <Ionicons
              name={getIconName()}
              size={size}
              color={color}
            />
          )
        },
        tabBarLabel: ({ focused, color }) => {
          const getTabBarText = () => {
            if (route.name === NAVIGATION.FAVORITE_NEWS_LIST.NAME) {
              return "즐겨찾기"
            }
            return "홈"
          }
          return <Text style={{ color, fontSize: 12 }}>{getTabBarText()}</Text>
        },
      })}
    >
      <BottomTab.Screen
        name={NAVIGATION.NEWS_LIST.NAME}
        component={NewsListScreen}
      />
      <BottomTab.Screen
        name={NAVIGATION.FAVORITE_NEWS_LIST.NAME}
        component={FavoriteNewsListScreen}
      />
    </BottomTab.Navigator>
  )
}
