import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import UserListItem from "../components/UserListItem";
import users from "../../assets/data/users.json";
import { useNavigation } from "expo-router";

export default function SearchScreen() {
  const [Search, setSearch] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search users",
        onChangeText: setSearch,
      },
    });
  });

  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingTop: 150 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserListItem user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
