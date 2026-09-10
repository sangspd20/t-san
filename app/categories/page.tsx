import { ManagementLayout, ManagementPage, PageSection } from "@/components/management-layout";
import { CatalogToolbar, CategoryTable, PageHeader } from "@/components/catalog-components";
import { categories } from "@/services/catalog-service";
export default function CategoriesPage(){return <ManagementLayout><ManagementPage><PageSection><PageHeader title="Danh mục" description="Phân nhóm sản phẩm để dễ quản lý và bán hàng." action="Thêm danh mục" href="/categories/new"/><CatalogToolbar/><CategoryTable items={categories}/></PageSection></ManagementPage></ManagementLayout>}
