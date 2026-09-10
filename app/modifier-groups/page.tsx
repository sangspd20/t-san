import { ManagementLayout } from "@/components/management-layout";
import { CatalogToolbar, ModifierTable, PageHeader } from "@/components/catalog-components";
import { modifierGroups } from "@/services/catalog-service";
export default function ModifierGroupsPage(){return <ManagementLayout><PageHeader title="Nhóm tuỳ chọn" description="Thiết lập các lựa chọn thêm cho sản phẩm." action="Thêm nhóm tuỳ chọn" href="/modifier-groups/new"/><CatalogToolbar/><ModifierTable items={modifierGroups}/></ManagementLayout>}
