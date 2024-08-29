import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  View,
  Button,
  SafeAreaView,
  TextInput,
  Text,
} from "react-native";

import batSinal from "./assets/bat-sinal.png";
import batman from "./assets/batman.png";
import { useState } from "react";

export default function App() {
  const [viewBatSinal, setViewBatSinal] = useState<boolean>(true);
  const [viewForm, setViewForm] = useState<boolean>(false);
  const [viewBatman, setViewBatman] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [observation, setObservation] = useState<string>("");

  function handlerActivateButton() {
    setViewBatSinal(false);
    setViewForm(true);
  }

  function handlerSendButton() {
    setViewForm(false);
    setViewBatman(true);
  }

  function handlerBackButton() {
    setViewBatman(false);
    setViewBatSinal(true);

    setName("");
    setPhone("");
    setLocation("");
    setObservation("");
  }

  return (
    <>
      <View
        style={[
          styles.containerBatSinal,
          { display: viewBatSinal ? "flex" : "none" },
        ]}
      >
        <Image source={batSinal} />

        <Button
          title="Ativar Bat-Sinal"
          onPress={handlerActivateButton}
          color="#000"
        />
        <StatusBar style="auto" />
      </View>
      <SafeAreaView
        style={[styles.containerForm, { display: viewForm ? "flex" : "none" }]}
      >
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Telefone"
          keyboardType="numeric"
          maxLength={9}
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          placeholder="Localização"
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          placeholder="Observação"
          multiline
          numberOfLines={4}
          style={styles.inputMulti}
          maxLength={100}
          value={observation}
          onChangeText={setObservation}
        />
        <Button title="Enviar" onPress={handlerSendButton} color="#000" />
      </SafeAreaView>
      <View
        style={[
          styles.containerBatSinal,
          { display: viewBatman ? "flex" : "none" },
        ]}
      >
        <Image source={batman} />

        <Text style={{ fontSize: 32, fontWeight: "bold" }}>Estou indo!</Text>
        <View>
          <Text>{name}</Text>
          <Text>{phone}</Text>
          <Text>{location}</Text>
          <Text>{observation}</Text>
        </View>

        <Button title="Voltar" onPress={handlerBackButton} color="#000" />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerBatSinal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
  inputMulti: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});
