const domain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
  const URL = `${domain}/api/2021-10/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": accessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  };

  try {
    return await fetch(URL, options).then(res => res.json());
  } catch(err) {
    throw new Error("Failed to fetch products")
  }
}

export async function getProductsInCollection() {
  const query = `
  {
    collectionByHandle(handle: "frontpage") {
      title
      products(first: 25) {
        edges {
          node {
            id
            title
            description
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query)

  const products = response.data.collectionByHandle.products.edges ?? []

  return products;
}

export async function getAllProducts() {
  const query = `
  {
    products(first: 25) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  const slugs = response.data.products.edges ?? [];

  return slugs;
}
