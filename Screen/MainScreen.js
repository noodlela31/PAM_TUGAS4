import React from "react";
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Jadwal = [
  {
    id: "1",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "Air Asia",
    departureDate: "31 Okt 2023, 10:00",
    arrivalDate: "1 Nov 2023, 09:00",
  },
  {
    id: "2",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "Air Asia",
    departureDate: "31 Okt 2023, 13:00",
    arrivalDate: "1 Nov 2023, 05:00",
  },
  {
    id: "3",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "Lion Air",
    departureDate: "31 Okt 2023, 01:00",
    arrivalDate: "1 Nov 2023, 03:00",
  },
  {
    id: "4",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "Sriwijaya Air",
    departureDate: "31 Okt 2023, 07:00",
    arrivalDate: "1 Nov 2023, 12:00",
  },
  {
    id: "5",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "Batik Air",
    departureDate: "31 Okt 2023, 03:00",
    arrivalDate: "1 Nov 2023, 01:30",
  },
  {
    id: "6",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "Citilink",
    departureDate: "1 Nov 2023, 12:30",
    arrivalDate: "7 Mar 2022, 01:00",
  },
  {
    id: "7",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "Malindo Air",
    departureDate: "1 Nov 2023, 09:30",
    arrivalDate: "7 Mar 2022, 10:00",
  },
  {
    id: "8",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "Garuda Indonesia",
    departureDate: "1 Nov 2023, 09:00",
    arrivalDate: "7 Mar 2022, 01:30",
  },
  {
    id: "9",
    departureCity: "Lampung",
    arrivalCity: "Jakarta",
    airline: "AirAsia",
    departureDate: "7 Mar 2022, 01:00",
    arrivalDate: "7 Mar 2022, 24:00",
  },
];

const MainScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.departureCity} - {item.arrivalCity}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.airlineContainer}>
          <FontAwesome name="plane" size={28} color="black" />
          <Text style={styles.airline}>{item.airline}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
          <AntDesign name="enviromento" size={24} color="black" />
            {item.departureDate}
          </Text>
          <Text style={styles.date}>
          <AntDesign name="enviroment" size={24} color="black" />
            {item.arrivalDate}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>PLAN-NERS</Text>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <FontAwesome name="user" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle}>Jadwal Penerbangan</Text>
      </View>
      <FlatList
        data={Jadwal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.copyright}>
        == MILA OKTAVIANI CORPORATION ==
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9D1B9",
    marginTop: 20,
  },
  header: {
    width: "100%",
    backgroundColor: "#B9D1B9",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  subTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#ADEFD1FF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "red",
  },
  dateContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  airline: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  date: {
    color: "black",
  },
  copyright: {
    color: "white",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default MainScreen;