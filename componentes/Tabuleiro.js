import { StyleSheet, View } from "react-native"
import Celula from "./Celula"


const Tabuleiro = () => {
  return (
    <View style={styles.tabuleiro}>
      <View style={styles.linha}>
        <Celula />
        <Celula />
        <Celula />
      </View>
      <View style={styles.linha}>
        <Celula />
        <Celula />
        <Celula />
      </View>
      <View style={styles.linha}>
        <Celula />
        <Celula />
        <Celula />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabuleiro: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    width: "80%",
    aspectRatio: 1,
  },
  linha: {
    flex: 1,
    flexDirection: "row",
  },
})

export default Tabuleiro

