import { permanentRedirect } from "next/navigation";
import { products } from "@/data/products";

type Props = {
  params: { id: string };
};

export default function ShopProductRedirectPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    permanentRedirect("/shop");
  }

  permanentRedirect(`/product/${params.id}`);
}