import { StyleSheet, View, Text } from "react-native"



const IndicadorJogador = () => {
  return (
    <View style={styles.indicadorJogador}>
      <Text style={styles.indicadorJogadorTexto}>Vez: Jogador 1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  indicadorJogador: {
    marginTop: 20,
    marginBottom: 20,
  },
  indicadorJogadorTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
})

export default IndicadorJogador

