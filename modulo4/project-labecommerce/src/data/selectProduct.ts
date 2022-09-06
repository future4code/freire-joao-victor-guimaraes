import { productsData } from "../types/typeProduts";
import { connection } from "./connection";

export default async function selectProduct(
  product_id: string
): Promise<productsData | undefined> {
  const [result] = await connection("labecommerce_products")
    .select("*")
    .where({ id: product_id });

  if (result) {
    const typeProduts: productsData = {
      id: result.id,
      name: result.name,
      price: result.price,
      image_url: result.image_url,
    };
    return typeProduts;
  } else {
    return undefined;
  }
}
