import { ArrowRight, ShieldCheck } from "lucide-react";
import { AppLogo } from "@/components/app-components";
import { Button, Input, Label } from "@/components/ui";

export default function LoginPage() {
  return <main className="flex min-h-screen items-center justify-center px-4 py-8"><section className="w-full max-w-sm"><div className="mb-8 flex justify-center"><AppLogo /></div><div className="rounded-lg border bg-surface p-6 shadow-sm"><div className="mb-6"><h1 className="text-xl font-semibold tracking-tight">Đăng nhập hệ thống</h1><p className="mt-1.5 text-sm leading-6 text-muted-foreground">Truy cập không gian quản lý T-San Tea & Coffee.</p></div><div className="space-y-4"><div className="space-y-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="ban@t-san.vn" /></div><div className="space-y-1.5"><Label htmlFor="password">Mật khẩu</Label><Input id="password" type="password" placeholder="••••••••" /></div><Button className="w-full" type="button">Tiếp tục <ArrowRight size={15} /></Button></div></div><p className="mt-5 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground"><ShieldCheck size={13} /> Khu vực dành cho nhân viên T-San</p></section></main>;
}
