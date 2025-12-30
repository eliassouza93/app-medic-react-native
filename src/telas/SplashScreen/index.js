import { View } from "react-native";
import styles from "./styles";
import LottieView from "lottie-react-native";
import preload from "../../assets/preload.json";
import React, { useState, useEffect } from "react";

export default function SplashScreen({ navigation }) {
  const [carregada, setCarregada] = useState(false);

  function animacaoFinalizada() {
    setTimeout(() => {
      setCarregada(true);
    }, 500);
  }

  React.useEffect(() => {
    if (carregada) {
      navigation.replace("Onboarding");
    }
  }, [carregada, navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={preload}
        loop={false}
        autoPlay={true}
        onAnimationFinish={animacaoFinalizada}
      />
    </View>
  );
}
