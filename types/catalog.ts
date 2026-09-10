export type ProductStatus = "ACTIVE" | "INACTIVE";
export type ModifierType = "SINGLE" | "MULTIPLE";
export type CatalogProduct = { id: string; sku: string; name: string; category: string; price: number; status: ProductStatus; image?: string; variants: { name: string; price: number; sku: string }[]; modifierGroups: string[]; channels: string[] };
export type Category = { id: string; name: string; productCount: number; status: ProductStatus };
export type ModifierOption = { id: string; name: string; price: number; active: boolean };
export type ModifierGroup = { id: string; name: string; type: ModifierType; required: boolean; optionCount: number; options: ModifierOption[] };
export type PriceList = { id: string; name: string; channel: string; status: ProductStatus; updatedAt: string };
export type CatalogSummary = { products: number; activeProducts: number; categories: number; modifierGroups: number };

export const roleLabels: Record<string, string> = { ADMIN: "Quản trị viên", MANAGER: "Quản lý", CASHIER: "Thu ngân", BARISTA: "Pha chế" }; 
export const formatVnd = (value: number) => new Intl.NumberFormat("vi-VN").format(value) + " ₫";
export const statusLabel = (status: ProductStatus) => status === "ACTIVE" ? "Đang bán" : "Ngừng bán";
