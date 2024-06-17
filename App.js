import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    SkranjiR: require("./assets/fonts/Skranji/Skranji-Regular.ttf"),
    SkranjiB: require("./assets/fonts/Skranji/Skranji-Bold.ttf"),
  });

  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.tituloprincipal}>NORSE MYTHOLOGY</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("./assets/norsebanner.jpeg")}
          style={styles.banner}
        />
      </View>
      <View>
        <Text> CREAMOS UN CONTADOR!</Text>
        <Text>{contador}</Text>
        <TouchableOpacity
          style={{ backgroundColor: "blue" }}
          onPress={aumentarContador}
        >
          <Text style={{ color: "white" }}>AUMENTAR EN 1...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>REALMS</Text>
      </View>
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={() => {
            alert("Yendo...");
          }}
        >
          <Image
            source={require("./assets/Helheim.jpeg")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>HELHEIM - Underground</Text>
        </TouchableOpacity>
        <View>
          <Image
            source={require("./assets/Niflheim.jpeg")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>NIFLHEIM - Frost & Ice</Text>
        </View>
        <View>
          <Image
            source={require("./assets/Muspelheim.webp")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>MUSPELHEIM - Hot & Fire</Text>
        </View>
        <View>
          <Image
            source={require("./assets/Nidavellir.jpeg")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>NIDAVELLIR - Dwarves Land</Text>
        </View>
        <View>
          <Image
            source={require("./assets/Alfheim.jpeg")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>ALFHEIM - Land of the Elves</Text>
        </View>
        <View>
          <Image
            source={require("./assets/jotunheim.png")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>JOTUNHEIM - Giant's land</Text>
        </View>
        <View>
          <Image
            source={require("./assets/vanaheim.jpeg")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>
            VANAHEIM - Home of the Vanir
          </Text>
        </View>
        <View>
          <Image
            source={require("./assets/midgard.jpeg")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>MIDGARD - Abode of mankind</Text>
        </View>
        <View>
          <Image
            source={require("./assets/asgard.jpeg")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>ASGARD - Home of Aesir Gods</Text>
        </View>
        <View>
          <Image
            source={require("./assets/Valhalla.jpg")}
            style={styles.films}
          />
          <Text style={styles.textoSubtitulo}>
            VALHALLA - Hall of slain warriors
          </Text>
        </View>
      </ScrollView>

      <Text style={styles.titulo}> ÆSIR GODS</Text>

      <ScrollView horizontal>
        <View style={styles.listado}>
          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/odin.jpg")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>ODIN</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/thor.webp")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>THOR</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/loki.jpeg")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>LOKI</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/Mimir.jpg")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>MIMIR</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/frigga.jpeg")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>FRIGGA</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/heimdall.jpeg")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>HEIMDALL</Text>
          </View>
          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/Tyr.webp")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>TYR</Text>
          </View>
        </View>
      </ScrollView>

      <Text style={styles.titulo}> VANIR GODS</Text>

      <ScrollView horizontal>
        <View style={styles.listado}>
          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/frey.webp")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>FREY</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/freya.jpeg")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>FREYA</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/Njord.webp")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>NJORD</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/nerthus.jpeg")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>NERTHUS</Text>
          </View>

          <View style={styles.listadoItem}>
            <Image
              source={require("./assets/gullveig.jpeg")}
              style={styles.character}
            />
            <Text style={styles.textoSubtitulo}>GULLVEIG</Text>
          </View>
        </View>
      </ScrollView>

      <Text style={styles.titulo}>MONSTERS AND OTHER BEASTS</Text>
      <View style={styles.listado}>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/jormungandr.webp")}
            style={styles.character}
          />
          <Text style={styles.textoSubtitulo}>JORMUNGANDR</Text>
        </View>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/ratatosk.jpeg")}
            style={styles.character}
          />
          <Text style={styles.textoSubtitulo}>RATATOSK</Text>
        </View>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/Vedrfolnir.webp")}
            style={styles.character}
          />
          <Text style={styles.textoSubtitulo}>VEDRFOLNIR</Text>
        </View>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/fenrir.jpeg")}
            style={styles.character}
          />
          <Text style={styles.textoSubtitulo}>FENRIR WOLF</Text>
        </View>

        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/wight.webp")}
            style={styles.character}
          />
          <Text style={styles.textoSubtitulo}>WIGHT</Text>
        </View>

        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/garm.jpeg")}
            style={styles.character}
          />
          <Text style={styles.textoSubtitulo}>GARM</Text>
        </View>

        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/sleipnir.jpeg")}
            style={styles.character}
          />
          <Text style={styles.textoSubtitulo}>SLEIPNIR</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  banner: {
    flex: 1,
    resizeMode: "contain",
    height: 250,
    marginTop: 15,
  },
  tituloprincipal: {
    fontFamily: "SkranjiB",

    fontSize: 24,
    marginRight: 12,
    textAlign: "center",
    marginTop: 50,
  },
  titulo: {
    fontFamily: "SkranjiR",
    fontSize: 24,
    marginRight: 12,
    textAlign: "center",
  },
  films: {
    width: 250,
    height: 300,
    marginRight: 10,
    resizeMode: "cover",
    borderRadius: 30,
  },
  character: {
    width: 200,
    height: 250,
    resizeMode: "cover",
    marginRight: 10,
    marginVertical: 8,
    borderRadius: 30,
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listadoItem: {
    flexBasis: "48%",
  },
  textoSubtitulo: {
    textAlign: "center",
    fontFamily: "Cochin",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
  },
});
