"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { AppLogo } from "@/components/app-components";
import { AuthRedirect, useAuth } from "@/components/auth-context";
import { Button, Input, Label } from "@/components/ui";

export default function LoginPage() {
  const { user, login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [pending, setPending] = React.useState(false);
  if (user) return <AuthRedirect />;
  const submit = async (event: React.FormEvent) => { event.preventDefault(); setError(""); setPending(true); const success = await login(email, password, remember); setPending(false); if (success) router.replace(email.trim().toLowerCase() === "cashier@tsan.vn" || email.trim().toLowerCase() === "barista@tsan.vn" ? "/pos" : "/dashboard"); else setError("Email hoặc mật khẩu không đúng. Vui lòng thử lại."); };
  return <main className="flex min-h-screen items-center justify-center px-4 py-8"><section className="w-full max-w-sm"><div className="mb-8 flex justify-center"><AppLogo /></div><div className="rounded-lg border bg-surface p-6 shadow-sm"><div className="mb-6"><p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-primary">Không gian nội bộ</p><h1 className="text-xl font-semibold tracking-tight">Đăng nhập hệ thống</h1><p className="mt-1.5 text-sm leading-6 text-muted-foreground">Truy cập không gian quản lý T-San Tea & Coffee.</p></div><form className="flex flex-col gap-4" onSubmit={submit}><div className="flex flex-col gap-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="admin@t-san.vn" autoComplete="email" required /></div><div className="flex flex-col gap-1.5"><div className="flex items-center justify-between"><Label htmlFor="password">Mật khẩu</Label><button type="button" className="text-xs text-primary hover:underline">Quên mật khẩu?</button></div><div className="relative"><Input className="pr-10" id="password" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Nhập mật khẩu" autoComplete="current-password" required /><button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></div>{error && <p className="rounded-md border border-danger/20 bg-danger/10 px-3 py-2 text-xs text-danger" role="alert">{error}</p>}<label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} className="size-4 accent-[var(--primary)]" /> Ghi nhớ đăng nhập</label><Button className="w-full" type="submit" disabled={pending}>{pending ? "Đang xác thực..." : <>Tiếp tục <ArrowRight size={15} /></>}</Button></form><div className="mt-5 rounded-md bg-surface-secondary px-3 py-2.5 text-xs leading-5 text-muted-foreground">Tài khoản demo: <strong>admin@t-san.vn</strong> / <strong>admin123</strong></div></div><p className="mt-5 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground"><ShieldCheck size={13} /> Khu vực dành cho nhân viên T-San</p></section></main>;
}
