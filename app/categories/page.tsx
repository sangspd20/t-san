import { ManagementLayout } from "@/components/management-layout";
import { CatalogToolbar, CategoryTable, PageHeader } from "@/components/catalog-components";
import { categories } from "@/services/catalog-service";
export default function CategoriesPage(){return <ManagementLayout><PageHeader title="Danh mục" description="Phân nhóm sản phẩm để dễ quản lý và bán hàng." action="Thêm danh mục" href="/categories/new"/><CatalogToolbar/><CategoryTable items={categories}/></ManagementLayout>}
