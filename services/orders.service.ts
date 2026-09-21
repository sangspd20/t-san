import { orders as seedOrders } from "@/data/orders";
import type { Order, OrderStatus } from "@/types/order";
export const ORDER_STORAGE_KEY = "tsan_mock_orders";
export const getOrders = (): Order[] => { if (typeof window === "undefined") return seedOrders; const raw = localStorage.getItem(ORDER_STORAGE_KEY); if (!raw) { localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(seedOrders)); return seedOrders; } try { return JSON.parse(raw) as Order[]; } catch { return seedOrders; } };
export const saveOrders = (items: Order[]) => { if (typeof window !== "undefined") localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(items)); };
export const getOrderById = (id: string) => getOrders().find((order) => order.id === id);
export const updateOrderStatus = (order: Order, status: OrderStatus): Order => ({ ...order, status, updatedAt: new Date().toISOString(), statusHistory: [...order.statusHistory, { status, label: `Đơn đã chuyển sang ${status}`, at: new Date().toISOString(), by: "Sang" }] });
export const getOnlineOrders = () => getOrders().filter((order) => order.channel !== "POS");
