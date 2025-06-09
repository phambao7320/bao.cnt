import EditProductPage from "@/features/dashboard/products/edit-product";

export const metadata = {
  title: "Dashboard : Product View Edit",
};

type PageProps = { params: Promise<{ productId: string }> };

export default async function EditProduct(props: PageProps) {
  return <EditProductPage />;
}
