import React from "react";
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const DEFAULT_REGION = {
  latitude: 47.49813613587627,
  longitude: 19.058699240261515,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Teszt</Text>
      <MapView style={styles.map} region={DEFAULT_REGION}>
        <Marker
          title="Huroc Party Offline #1"
          coordinate={{
            latitude: 47.51003678805807,
            longitude: 19.033063266584136,
          }}
        />
        <Marker
          title="Huroc Party Offline #2"
          coordinate={{
            latitude: 47.50800670014786,
            longitude: 19.057058917088032,
          }}
        />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
