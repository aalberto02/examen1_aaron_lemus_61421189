import { AuthProvider } from "@/contexts/AuthContext";
import { Stack } from "expo-router";



// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
      <AuthProvider>
          <Stack />
      </AuthProvider>
  )
}