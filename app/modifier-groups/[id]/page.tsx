import { notFound } from "next/navigation";
import { ManagementLayout } from "@/components/management-layout";
import { ModifierEditor } from "@/components/catalog-components";
import { getModifierGroup } from "@/services/catalog-service";
export default async function ModifierGroupPage({ params }: { params: Promise<{ id:string }> }){const {id}=await params; const group=getModifierGroup(id); if(!group) notFound(); return <ManagementLayout><ModifierEditor group={group}/></ManagementLayout>}
