import { StyleSheet, View, Text } from "react-native"



const Temporizador = () => {
  return (
    <View style={styles.temporizador}>
      <Text style={styles.temporizadorTexto}>0:05</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  temporizador: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
    width: "40%",
    alignItems: "center",
  },
  temporizadorTexto: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default Temporizador

