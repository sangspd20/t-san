import { notFound } from "next/navigation";
import { ManagementLayout, PageContainer } from "@/components/management-layout";
import { ProductEditor } from "@/components/catalog-components";
import { getProduct } from "@/services/catalog-service";
export default async function EditProductPage({ params }: { params: Promise<{ id:string }> }){const {id}=await params; const product=getProduct(id); if(!product) notFound(); return <ManagementLayout><PageContainer><ProductEditor product={product}/></PageContainer></ManagementLayout>}
