import { useAuth } from "@/contexts/AuthContext";
import { Redirect,  Tabs } from "expo-router";

export default function ProtectedLayout() {
    const { isAllowed } = useAuth();
    if (!isAllowed) return <Redirect href="/login" />
    return <Tabs/>
}