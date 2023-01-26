import { Header } from "../header/Header"
import { FlatList, View, TouchableOpacity, Text } from "react-native"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { NAVIGATION } from "../constants/Navigation"
import { useEffect } from "react"
import { clippedTabFocus } from "../actions/news"

export const FavoriteNewsListScreen = () => {
  const navigation = useNavigation()
  const data = useSelector(state => state.news.favoriteNews)
  const dispatch = useDispatch()

  const onPressListItem = newsItem => {
    navigation.push(NAVIGATION.NEWS_DETAIL.NAME, { newsItem })
  }

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      dispatch(clippedTabFocus())
    }
  }, [isFocused])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="FAVORITE NEWS LIST" />
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => onPressListItem(item)}
              style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 8 }}
            >
              <Text
                style={{ fontSize: 24 }}
                numberOfLines={1}
              >
                {item.title}
              </Text>
              <Text
                style={{ fontSize: 16, color: "grey" }}
                numberOfLines={2}
              >
                {item.description}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
