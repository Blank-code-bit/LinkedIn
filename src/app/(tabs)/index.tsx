import { ActivityIndicator, FlatList, Text } from "react-native";
import PostListItem from "../../components/PostListItem";
import { gql, useQuery } from "@apollo/client";
// import posts from "../../../assets/data/posts.json";

const postList = gql`
  query PostListQuery {
    postList {
      id
      content
      image
      profile {
        id
        image
        name
        position
      }
    }
  }
`;

export default function HomeFeedScreen() {
  const { loading, error, data } = useQuery(postList);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Something went wrong!</Text>;
  }

  return (
    <FlatList
      data={data.postList}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}
