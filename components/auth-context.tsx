"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

type UserRole = "ADMIN" | "MANAGER" | "CASHIER" | "BARISTA";
export type MockUser = { id: string; name: string; email: string; role: UserRole; store: string };

type AuthContextValue = {
  user: MockUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, remember?: boolean) => Promise<boolean>;
  logout: () => void;
};

const SESSION_KEY = "tsan_mock_session";
const USERS: Array<{ email: string; password: string; user: MockUser }> = [
  { email: "admin@tsan.vn", password: "123456", user: { id: "admin-1", name: "Nguyễn Minh Anh", email: "admin@tsan.vn", role: "ADMIN", store: "Cơ sở Quận 1" } },
  { email: "manager@tsan.vn", password: "123456", user: { id: "manager-1", name: "Trần Thu Hà", email: "manager@tsan.vn", role: "MANAGER", store: "Cơ sở Quận 1" } },
  { email: "cashier@tsan.vn", password: "123456", user: { id: "cashier-1", name: "Lê Minh Khoa", email: "cashier@tsan.vn", role: "CASHIER", store: "Cơ sở Quận 1" } },
  { email: "barista@tsan.vn", password: "123456", user: { id: "barista-1", name: "Phạm Ngọc Mai", email: "barista@tsan.vn", role: "BARISTA", store: "Cơ sở Quận 1" } },
];

const AuthContext = React.createContext<AuthContextValue | null>(null);

function isMockUser(value: unknown): value is MockUser {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<MockUser>;
  return typeof candidate.id === "string" && typeof candidate.name === "string" && typeof candidate.email === "string" && typeof candidate.store === "string" && ["ADMIN", "MANAGER", "CASHIER", "BARISTA"].includes(candidate.role ?? "");
}

function destinationFor(user: MockUser) {
  return user.role === "ADMIN" || user.role === "MANAGER" ? "/dashboard" : "/pos";
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<MockUser | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(SESSION_KEY);
      const parsed: unknown = stored ? JSON.parse(stored) : null;
      if (isMockUser(parsed)) setUser(parsed);
      else if (stored) localStorage.removeItem(SESSION_KEY);
    } catch {
      localStorage.removeItem(SESSION_KEY);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = React.useCallback(async (email: string, password: string) => {
    const match = USERS.find((entry) => entry.email === email.trim().toLowerCase() && entry.password === password);
    if (!match) return false;
    localStorage.setItem(SESSION_KEY, JSON.stringify(match.user));
    setUser(match.user);
    return true;
  }, []);

  const logout = React.useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  return <AuthContext.Provider value={{ user, isAuthenticated: user !== null, isLoading, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

function LoadingState() {
  return <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">Đang kiểm tra phiên đăng nhập...</div>;
}

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  React.useEffect(() => { if (!isLoading && !isAuthenticated) router.replace("/login"); }, [isAuthenticated, isLoading, router]);
  if (isLoading || !isAuthenticated) return <LoadingState />;
  return <>{children}</>;
}

export function ManagementRoute({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const allowed = user?.role === "ADMIN" || user?.role === "MANAGER";
  React.useEffect(() => { if (!isLoading && !isAuthenticated) router.replace("/login"); else if (!isLoading && isAuthenticated && !allowed) router.replace("/pos"); }, [allowed, isAuthenticated, isLoading, router]);
  if (isLoading || !isAuthenticated || !allowed) return <LoadingState />;
  return <>{children}</>;
}

export function AuthRedirect() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  React.useEffect(() => { if (!isLoading && user) router.replace(destinationFor(user)); }, [isLoading, router, user]);
  if (isLoading || user) return <LoadingState />;
  return null;
}

export { SESSION_KEY };
export type { UserRole };
