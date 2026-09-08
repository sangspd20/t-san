"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

type UserRole = "admin" | "staff";
type User = { name: string; email: string; role: UserRole; store: string };

const USERS = [
  { email: "admin@t-san.vn", password: "admin123", user: { name: "Nguyễn Minh Anh", email: "admin@t-san.vn", role: "admin" as const, store: "Cơ sở Quận 1" } },
  { email: "staff@t-san.vn", password: "staff123", user: { name: "Trần Thu Hà", email: "staff@t-san.vn", role: "staff" as const, store: "Cơ sở Quận 1" } },
];
const SESSION_KEY = "t-san-session";

const AuthContext = React.createContext<{ user: User | null; login: (email: string, password: string, remember: boolean) => Promise<boolean>; logout: () => void }>({ user: null, login: async () => false, logout: () => undefined });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    try { setUser(JSON.parse(localStorage.getItem(SESSION_KEY) || "null")); } catch { setUser(null); }
  }, []);

  const login = React.useCallback(async (email: string, password: string, remember: boolean) => {
    const match = USERS.find((entry) => entry.email === email.trim().toLowerCase() && entry.password === password);
    if (!match) return false;
    setUser(match.user);
    if (remember) localStorage.setItem(SESSION_KEY, JSON.stringify(match.user));
    else sessionStorage.setItem(SESSION_KEY, JSON.stringify(match.user));
    return true;
  }, []);

  const logout = React.useCallback(() => { setUser(null); localStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(SESSION_KEY); }, []);
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() { return React.useContext(AuthContext); }

export function ProtectedRoute({ children, adminOnly = false }: { children: React.ReactNode; adminOnly?: boolean }) {
  const { user } = useAuth();
  const router = useRouter();
  React.useEffect(() => { if (user === null) return; if (adminOnly && user.role !== "admin") router.replace("/dashboard"); }, [adminOnly, router, user]);
  if (!user || (adminOnly && user.role !== "admin")) return <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">Đang kiểm tra phiên đăng nhập...</div>;
  return <>{children}</>;
}

export function AuthRedirect() {
  const { user } = useAuth();
  const router = useRouter();
  React.useEffect(() => { if (user) router.replace("/dashboard"); }, [router, user]);
  return null;
}

export { SESSION_KEY };
