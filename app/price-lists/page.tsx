import { ManagementLayout, ManagementPage, PageSection } from "@/components/management-layout";
import { CatalogToolbar, PageHeader, PriceListTable } from "@/components/catalog-components";
import { priceLists } from "@/services/catalog-service";
export default function PriceListsPage(){return <ManagementLayout><ManagementPage><PageSection><PageHeader title="Bảng giá" description="Quản lý giá theo kênh bán và chiến dịch." action="Tạo bảng giá" href="/price-lists/new"/><CatalogToolbar/><PriceListTable items={priceLists}/></PageSection></ManagementPage></ManagementLayout>}
