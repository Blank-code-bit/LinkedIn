import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

export default function PostDetails() {
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <Text>Not found</Text>;
  }

  return <PostListItem post={post} />;
}
