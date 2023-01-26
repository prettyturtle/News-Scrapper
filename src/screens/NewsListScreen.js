import { Header } from "../header/Header"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getNewsList } from "../actions/news"
import { SingleLineInput } from "../components/SingleLineInput"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { NAVIGATION } from "../constants/Navigation"

export const NewsListScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")

  const onSubmitEditing = () => {
    if (query === "") {
      return
    }
    dispatch(getNewsList(query))
  }

  const newsList = useSelector((state) => state.news.newsList)

  const onPressListItem = (newsItem) => {
    navigation.push(NAVIGATION.NEWS_DETAIL.NAME, { newsItem })
  }

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="NEWS LIST" />
      </Header>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 24, paddingVertical: 12 }}>
          <SingleLineInput
            value={query}
            onChangeText={setQuery}
            placeholder="뉴스 검색어를 입력해 주세요..."
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={newsList}
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
    </View>
  )
}
