import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing, Dimensions, TextInput, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');

  // Animaciones
  const scale = React.useRef(new Animated.Value(0.9)).current;
  const fadeIn = React.useRef(new Animated.Value(0)).current;
  const formSlide = React.useRef(new Animated.Value(300)).current;
  const buttonScale = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    // Animación del logo
    Animated.loop(
      Animated.sequence([ 
        Animated.timing(scale, {
          toValue: 1,
          duration: 1500,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.9,
          duration: 1500,
          easing: Easing.in(Easing.exp),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animación de entrada
    Animated.parallel([
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(formSlide, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.back(1)),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f9ff" />
      
      {/* Fondo decorativo */}
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />
      
      <Animated.View style={{ opacity: fadeIn }}>
        <Animated.Image
    source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/robot-234-458344.png' }} // Imagen PNG de robot desde IconScout
    style={[styles.logo, { transform: [{ scale }] }]}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View style={{ opacity: fadeIn }}>
        <Text style={styles.title}>¡Aprende Jugando!</Text>
        <Text style={styles.subtitle}>Inicia sesión para comenzar tu aventura</Text>
      </Animated.View>

      <Animated.View style={[styles.formContainer, { 
        opacity: fadeIn,
        transform: [{ translateY: formSlide }]
      }]}>
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <Animated.View style={{ 
          transform: [{ scale: buttonScale }],
          width: '100%',
          alignItems: 'center',
        }}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Register')}
          style={styles.secondaryButton}
        >
          <Text style={styles.secondaryButtonText}>Crear una cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Elementos decorativos */}
      <Animated.Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/686/686589.png' }}
        style={[styles.decorativeStar1, { opacity: fadeIn }]}
      />
      <Animated.Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/686/686589.png' }}
        style={[styles.decorativeStar2, { opacity: fadeIn }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    overflow: 'hidden',
  },
  bgCircle1: {
    position: 'absolute',
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: 'rgba(15, 98, 254, 0.05)',
    top: -200,
    left: -100,
  },
  bgCircle2: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'rgba(15, 98, 254, 0.03)',
    bottom: -150,
    right: -100,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 5,
    color: '#0F62FE',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 300,
    lineHeight: 22,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#0F62FE',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    shadowColor: '#0F62FE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: '#0F62FE',
  },
  secondaryButtonText: {
    color: '#0F62FE',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    color: '#0F62FE',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  decorativeStar1: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 50,
    right: 30,
    tintColor: '#FFD700',
  },
  decorativeStar2: {
    position: 'absolute',
    width: 30,
    height: 30,
    bottom: 80,
    left: 40,
    tintColor: '#FFD700',
  },
});
