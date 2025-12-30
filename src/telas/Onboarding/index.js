import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import FundoOndulado from "../../componentes/FundoOndulado";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import { Formulario } from "../../componentes/Formulario";
import itens from "./cards";
import styles from "./styles";
import { Carrocel } from "../../componentes/Carrocel";

export default function Onboarding({ navigation }) {
  const [fazerLogin, setFazerLogin] = useState(false);
  const [altura, setAltura] = useState(250);

  const animacaoCustomizada = {
    duration: 1200,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7,
    },
  };

  LayoutAnimation.configureNext(animacaoCustomizada);

  function avancar() {
    if (fazerLogin) {
      navigation.navigate("Principal");
    } else {
      setAltura(400);
      LayoutAnimation.linear();
      setFazerLogin(true);
    }
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

        <View style={styles.carrosselArea}>
          {!fazerLogin && <Carrocel data={itens} />}
        </View>
        <Image
          source={require("../../assets/medica.png")}
          style={styles.medicaImg}
        />
        <FundoOndulado height={altura}>
          <View style={styles.infoArea}>
            {fazerLogin ? (
              <Formulario
                titulo="Olá! Acesse sua conta"
                texto="Entre com suas informações. Senão tiver uma conta ainda crie uma agora"
              />
            ) : (
              <View>
                <Text style={styles.titulo}>Gerencie as suas consultas</Text>
                <Text style={styles.texto}>
                  Você consegue gerenciar todas suas consultas e ver o tempo
                  médio de cada, e a quantidade de consultas realizadas.
                </Text>
              </View>
            )}

            <TouchableOpacity style={styles.botao} onPress={avancar}>
              <Text style={styles.botaoTexto}>
                {fazerLogin ? "Entrar" : "Começar"}
              </Text>
            </TouchableOpacity>
          </View>
        </FundoOndulado>
      </View>
    </TelaDeFundo>
  );
}
