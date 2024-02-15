import CartItem from "@/components/CartItem";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-12 px-24">
      <h2 className="py-6 text-center text-xl font-medium">
        Nextjs project that is focused on stripe payment with sessions <br />{" "}
        and product management with react context.
      </h2>

      <div className="w-full pb-8 pt-2">
        <h1 className="text-center text-xl font-bold">Products</h1>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="w-full pb-8 pt-2">
        <h1 className="text-center text-xl font-bold mb-4">Shopping Cart</h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <CartItem />
          <CartItem />
        </div>
        <div className="flex flex-col gap-3 items-center pt-3">
          <h1 className="text-lg font-semibold m-4">Total: 100$</h1>
          <div className="flex flex-row gap-3 ">
            <button className="py-2 rounded-md px-4 text-slate-50 hover:cursor-pointer bg-pink-500 hover:bg-pink-800 text-lg font-semibold">
              Reset Cart
            </button>
            <button className="py-2 rounded-md px-4 text-slate-50 hover:cursor-pointer bg-lime-500 hover:bg-lime-800 text-lg font-semibold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
