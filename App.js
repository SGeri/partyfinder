import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
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

      <View
        style={{
          position: "absolute",
          width: "100%",
          top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: "center",
            borderWidth: 2,
            borderRadius: 30,
            borderColor: "purple",
            backgroundColor: "white",
            padding: 10,
          }}
          activeOpacity={0.6}
        >
          <Text>Rendezvény keresése...</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
