import { permanentRedirect } from "next/navigation";
import { products } from "@/data/products";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ShopProductRedirectPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    permanentRedirect("/shop");
  }

  permanentRedirect(`/product/${id}`);
}