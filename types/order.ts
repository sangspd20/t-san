export type OrderChannel = "POS" | "WEB" | "GRAB" | "SHOPEEFOOD" | "BEFOOD" | "XANHSM";
export type OrderStatus = "NEW" | "ACCEPTED" | "PREPARING" | "READY" | "COMPLETED" | "CANCELLED";
export type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "REFUNDED";
export type PaymentMethod = "CASH" | "BANK_TRANSFER" | "CARD" | "ONLINE" | "OTHER";
export type OrderItemModifier = { name: string; price: number; quantity: number };
export type OrderItem = { id: string; productId: string; productName: string; variantName?: string; quantity: number; unitPrice: number; modifiers: OrderItemModifier[]; note?: string; lineTotal: number };
export type OrderCustomer = { name: string; phone?: string; address?: string };
export type OrderStatusHistory = { status: OrderStatus; label: string; at: string; by: string };
export type Order = { id: string; orderNumber: string; channel: OrderChannel; externalOrderId?: string; status: OrderStatus; createdAt: string; updatedAt: string; customer: OrderCustomer; items: OrderItem[]; subtotal: number; discountAmount: number; shippingFee: number; serviceFee: number; platformFee: number; totalAmount: number; paymentMethod: PaymentMethod; paymentStatus: PaymentStatus; employeeName: string; note?: string; statusHistory: OrderStatusHistory[] };
import { formatVND, getChannelLabel, getOrderStatusLabel, getPaymentStatusLabel } from "@/lib/format";

export const channelLabels: Record<OrderChannel, string> = { POS: getChannelLabel("POS"), WEB: getChannelLabel("WEB"), GRAB: getChannelLabel("GRAB"), SHOPEEFOOD: getChannelLabel("SHOPEEFOOD"), BEFOOD: getChannelLabel("BEFOOD"), XANHSM: getChannelLabel("XANHSM") };
export const orderStatusLabels: Record<OrderStatus, string> = { NEW: getOrderStatusLabel("NEW"), ACCEPTED: getOrderStatusLabel("ACCEPTED"), PREPARING: getOrderStatusLabel("PREPARING"), READY: getOrderStatusLabel("READY"), COMPLETED: getOrderStatusLabel("COMPLETED"), CANCELLED: getOrderStatusLabel("CANCELLED") };
export const paymentStatusLabels: Record<PaymentStatus, string> = { PENDING: getPaymentStatusLabel("PENDING"), PAID: getPaymentStatusLabel("PAID"), FAILED: getPaymentStatusLabel("FAILED"), REFUNDED: getPaymentStatusLabel("REFUNDED") };
export const nextStatus: Partial<Record<OrderStatus, OrderStatus>> = { NEW: "ACCEPTED", ACCEPTED: "PREPARING", PREPARING: "READY", READY: "COMPLETED" };
export const formatOrderMoney = formatVND;
export const canCancel = (status: OrderStatus) => ["NEW", "ACCEPTED", "PREPARING"].includes(status); 
export const nextStatusLabel: Partial<Record<OrderStatus, string>> = { NEW: "Nhận đơn", ACCEPTED: "Bắt đầu pha", PREPARING: "Sẵn sàng", READY: "Hoàn tất" };
