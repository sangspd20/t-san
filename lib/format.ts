import type { OrderChannel, OrderStatus, PaymentStatus } from "@/types/order";

export const formatVND = (value: number) =>
  `${new Intl.NumberFormat("vi-VN").format(Math.round(Number.isFinite(value) ? value : 0))}đ`;

export const formatDateTimeVN = (value: string | Date) =>
  new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));

export const getChannelLabel = (channel: OrderChannel) =>
  ({ POS: "POS", WEB: "Web Order", GRAB: "GrabFood", SHOPEEFOOD: "ShopeeFood", BEFOOD: "beFood", XANHSM: "Xanh SM" })[channel];

export const getOrderStatusLabel = (status: OrderStatus) =>
  ({ NEW: "Mới", ACCEPTED: "Đã nhận", PREPARING: "Đang pha chế", READY: "Sẵn sàng", COMPLETED: "Hoàn tất", CANCELLED: "Đã huỷ" })[status];

export const getPaymentStatusLabel = (status: PaymentStatus) =>
  ({ PENDING: "Chưa thanh toán", PAID: "Đã thanh toán", FAILED: "Thanh toán lỗi", REFUNDED: "Đã hoàn tiền" })[status];

export const formatPercent = (value: number) => `${Number.isFinite(value) ? value.toFixed(1) : "0.0"}%`;
