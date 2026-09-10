import { ManagementLayout } from "@/components/management-layout";
import { CatalogToolbar, PageHeader, ProductTable } from "@/components/catalog-components";
import { products } from "@/services/catalog-service";
export default function ProductsPage(){return <ManagementLayout><PageHeader title="Sản phẩm" description="Quản lý menu và giá bán của cửa hàng." action="Thêm sản phẩm" href="/products/new"/><CatalogToolbar/><ProductTable products={products}/></ManagementLayout>}
