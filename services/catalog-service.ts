import { categories, modifierGroups, priceLists, products } from "@/data/catalog";
import type { CatalogSummary } from "@/types/catalog";
export const getCatalogSummary = (): CatalogSummary => ({ products: products.length, activeProducts: products.filter(p => p.status === "ACTIVE").length, categories: categories.length, modifierGroups: modifierGroups.length });
export const getProduct = (id: string) => products.find((product) => product.id === id);
export const getModifierGroup = (id: string) => modifierGroups.find((group) => group.id === id);
export { categories, modifierGroups, priceLists, products };
