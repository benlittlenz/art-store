import { ProductInfo } from "../../components/ProductInfo";
import { getAllProducts, getProduct } from "../../lib/shopify"

export default function ProductPage({ product }) {
  console.log("PRODUCT", product)
  return (
    <>
      <ProductInfo product={product} />
    </>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log("PARAMS", params)
  const product = await getProduct(params.product);

  return {
    props: {
      product
    }
  }
}
