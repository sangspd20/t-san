"use client";

import { ProtectedRoute } from "@/components/auth-context";
import { PosScreen } from "@/components/pos/pos-screen";

export default function PosPage() {
  return <ProtectedRoute><PosScreen /></ProtectedRoute>;
}
