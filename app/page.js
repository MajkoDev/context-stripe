import Stripe from "stripe";

// Components
import ProductCard from "@/components/ProductCard";
import CartSummary from "@/components/CartSummary";

// Fetching Products from Stripe
async function getProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const inventory = await stripe.products.list({
    // to get information on price
    expand: ["data.default_price"],
    limit: 8,
  });

  const products = inventory.data.map((product) => {
    const price = product.default_price;
    return {
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      image: product.images[0],
      quantity: product.quantity,
    };
  });

  return products;
}

export default async function Home() {
  const products = await getProducts();


  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-2 px-4">
      <h2 className="py-6 text-center text-xl font-medium">
        Nextjs project that is focused on stripe payment with sessions <br />{" "}
        and product management with react context.
      </h2>

      <div className="w-full pb-8 pt-2 mx-4">
        <h1 className="text-center text-xl font-bold">Products</h1>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
          {products?.map((price) => (
            <ProductCard key={price.id} price={price} />
          ))}
        </div>
      </div>

      <div className="w-full pb-8 pt-2">
        <h1 className="text-center text-xl font-bold mb-4">Shopping Cart</h1>

        <CartSummary />
       
      </div>
    </main>
  );
}
