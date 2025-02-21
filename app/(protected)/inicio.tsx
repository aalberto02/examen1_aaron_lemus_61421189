import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function InicioScreen() {
    const router = useRouter();
    const { user, logout } = useAuth();

    const [scale] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.timing(scale, { toValue: 0.95, duration: 1000, useNativeDriver: true }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scale, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
    };

    return (
        <View style={styles.container}>
            <Ionicons name="home-outline" size={100} color="#3A4750" style={styles.iconMain} />
            <Text style={styles.titulo}>Inicio</Text>
            <Animated.View style={[styles.animatedView, { transform: [{ scale }] }]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/task")}
                    onPressIn={handlePressOut}
                    onPressOut={handlePressOut}
                >
                    <Ionicons name="list" size={28} color="white" />
                    <Text style={styles.buttonText}>Tareas</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.animatedView, { transform: [{ scale }] }]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/task/new")}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Ionicons name="add" size={28} color="white" />
                    <Text style={styles.buttonText}>Nueva Tarea</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.animatedView, { transform: [{ scale }] }]}>
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => { logout(); router.replace("/login"); }}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Ionicons name="log-out-outline" size={28} color="white" />
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F5F7FA",
    },
    iconMain: {
        marginBottom: 20,
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#3A4750",
        marginBottom: 5,
        textAlign: "center",
    },
    subText: {
        fontSize: 16,
        color: "#7D8C97",
        marginBottom: 30,
        textAlign: "center",
    },
    animatedView: {
        width: "85%",
        marginBottom: 15,
    },
    button: {
        flexDirection: "row",
        backgroundColor: "#4A90E2",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    logoutButton: {
        flexDirection: "row",
        backgroundColor: "#D9534F",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
});
