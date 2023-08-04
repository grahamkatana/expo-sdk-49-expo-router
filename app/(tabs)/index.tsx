import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  RefreshControl,
  useColorScheme
} from "react-native";
import { useContext } from "react";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { createRandomUser } from "@/utils/generate-dummy-data";
import { ThreadsContext } from "@/context/thread-context";
import ThreadsItem from "@/components/ThreadsItem";
// const user = createRandomUser()
// console.log(JSON.stringify(user,null,2))

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const threads = useContext(ThreadsContext);
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:colorScheme==='dark' ? '#00000020':'#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 10,
          paddingTop: Platform.select({ android: 60 }),
        }}
        refreshControl={
          <RefreshControl
            onRefresh={() => console.log("Refreshing")}
            tintColor={"transparent"}
            refreshing={false}
          />
        }
      >
        {threads.map((thread) => (
          <ThreadsItem {...thread} key={thread.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
