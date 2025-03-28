import { StyleSheet, View, Text } from "react-native"
import { X, Circle } from "lucide-react-native"


const Placar = () => {
  return (
    <View style={styles.placar}>

      <View style={styles.placarItem}>
        <X size={24} color="#FF5757" strokeWidth={5}/>
        <Text style={styles.placarTexto}>01</Text>
      </View>

      <View style={styles.placarItem}>
        <Circle size={24} color="#7ED957" strokeWidth={5}/>
        <Text style={styles.placarTexto}>01</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  placar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 15,
    width: "80%",
    justifyContent: "space-around",
  },
  placarItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  placarTexto: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default Placar

