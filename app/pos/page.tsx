"use client";

import { ArrowLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { ProtectedRoute } from "@/components/auth-context";
import { Button } from "@/components/ui";

function PosContent() { return <main className="min-h-screen bg-background"><header className="flex h-16 items-center justify-between border-b bg-surface px-4 sm:px-6"><Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft size={16} />Tổng quan</Link><span className="flex items-center gap-2 text-sm font-semibold"><ShoppingCart size={17} className="text-primary" />Bán hàng POS</span><span className="w-20" /></header><div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center px-6 text-center"><div className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary-muted text-primary"><ShoppingCart size={25} /></div><p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-primary">Module đang phát triển</p><h1 className="text-2xl font-semibold tracking-tight">Quầy bán hàng T-San</h1><p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">Màn hình POS sẽ được kết nối với sản phẩm, tồn kho và đơn hàng trong milestone tiếp theo.</p><Link href="/dashboard"><Button className="mt-6">Quay về tổng quan</Button></Link></div></main>; }
export default function PosPage() { return <ProtectedRoute><PosContent /></ProtectedRoute>; }
