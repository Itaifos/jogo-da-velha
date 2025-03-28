import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native"
import Placar from "./componentes/Placar"
import Temporizador from "./componentes/Temporizador"
import IndicadorJogador from "./componentes/IndicadorJogador"
import Tabuleiro from "./componentes/Tabuleiro"


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4EADFF" barStyle="light-content" />
      <View style={styles.conteudo}>
        <Placar />
        <Temporizador />
        <IndicadorJogador />
        <Tabuleiro />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4EADFF",
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
})

