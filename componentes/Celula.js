import { StyleSheet, View } from "react-native"


const Celula = () => {
  return <View style={styles.celula}></View>
}

const styles = StyleSheet.create({
  celula: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Celula

