import { Header } from "../header/Header"
import { View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Spacer } from "../components/Spacer"
import WebView from "react-native-webview"
import { useDispatch, useSelector } from "react-redux"
import { clipNewsItem } from "../actions/news"

export const NewsDetailScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()

  const onPressBack = () => {
    navigation.pop()
  }

  const onPressFavorite = () => {
    dispatch(clipNewsItem(route.params.newsItem))
  }

  const isClipped =
    useSelector(state =>
      state.news.favoriteNews.filter(item => item.link === route.params.newsItem.link),
    ).length > 0

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Button
            iconName="arrow-back"
            onPress={onPressBack}
          />
          <Spacer
            direction="h"
            spacing={8}
          />
          <Header.Title title="NEWS DETAIL" />
        </Header.Group>
        <Header.Button
          iconName={isClipped ? "heart" : "heart-outline"}
          onPress={onPressFavorite}
        />
      </Header>
      <WebView
        mediaPlaybackRequiresUserAction={true}
        source={{
          uri: route.params.newsItem.link,
        }}
        style={{ flex: 1 }}
      />
    </View>
  )
}
