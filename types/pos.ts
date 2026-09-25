import type { CatalogProduct, ModifierOption } from "@/types/catalog";

export type CartItemModifier = { id: string; name: string; price: number };
export type CartItem = { id: string; product: CatalogProduct; variant: { name: string; price: number; sku: string }; sugar: string; ice: string; modifiers: CartItemModifier[]; note: string; quantity: number };
export type PaymentMethod = "cash" | "qr" | "card" | "other";
export type PosOrderType = "Tại quầy" | "Mang đi" | "Tại bàn" | "Giao hàng";
export type PosProduct = CatalogProduct & { soldOut?: boolean; badge?: string; modifierOptions?: ModifierOption[] };
export const paymentLabels: Record<PaymentMethod, string> = { cash: "Tiền mặt", qr: "Chuyển khoản / QR", card: "Thẻ", other: "Khác" };
export const orderTypes: PosOrderType[] = ["Tại quầy", "Mang đi", "Tại bàn", "Giao hàng"];
import { formatVND } from "@/lib/format";

export const money = formatVND;

export function cartItemPrice(item: CartItem) { return (item.variant.price + item.modifiers.reduce((sum, modifier) => sum + modifier.price, 0)) * item.quantity; }
export function cartTotal(items: CartItem[]) { return items.reduce((sum, item) => sum + cartItemPrice(item), 0); }
