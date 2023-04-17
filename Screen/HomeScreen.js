import { React, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color="white" />
        <Text style={styles.title}>PLAN-NERS</Text>
        <TouchableOpacity onPress={() => navigation.navigate("User")}>
          <FontAwesome name="user" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.UIContainer}>
        <Text>Lokasi Asal</Text>
        <View style={styles.textInputContainer}>
        <AntDesign name="enviromento" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setDeparture}
            value={departure}
            placeholder="contoh: Lampung"
            selectTextOnFocus={false}
          />
        </View>
        <Text>Lokasi Tujuan</Text>
        <View style={styles.textInputContainer}>
        <AntDesign name="enviroment" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setDestination}
            value={destination}
            placeholder="contoh: Kalimantan"
          />
        </View>
        <Text>Tanggal Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          <MaterialIcons name="date-range" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setDate}
            value={date}
            placeholder="DD/MM/YYYY"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
          <Text style={styles.button}>CARI</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          == MILA OKTAVIANI CORPORATION ==
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#DAE8E5",
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    fontSize: 15,
    fontWeight: "bold",
    color: "#B9D1B9",
    borderWidth: 1,
    borderColor: "#B9D1B9",
  },
  container: {
    flex: 1,
    backgroundColor: "#B9D1B9",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 200,
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#DAE8E5",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 50,
    justifyContent: "space-between",
    width: "110%",
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 3,
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#B9D1B9",
  },
  title: {
    color: "white",
    fontSize: 35,
  },
  UIContainer: {
    backgroundColor: "#DAE8E5",
    margin: "auto",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  copyright: {
    color: "#B9D1B9",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default HomeScreen;
