import { ManagementLayout, ManagementPage, PageSection } from "@/components/management-layout";
import { CatalogToolbar, PageHeader, ProductTable } from "@/components/catalog-components";
import { products } from "@/services/catalog-service";
export default function ProductsPage(){return <ManagementLayout><ManagementPage><PageSection><PageHeader title="Sản phẩm" description="Quản lý menu và giá bán của cửa hàng." action="Thêm sản phẩm" href="/products/new"/><CatalogToolbar/><ProductTable products={products}/></PageSection></ManagementPage></ManagementLayout>}
