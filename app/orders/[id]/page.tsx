import { OrderDetailRoute } from "@/components/order-components";
export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <OrderDetailRoute id={id}/>; }
