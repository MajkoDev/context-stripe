import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-12 px-24">
      <h2 className="py-6 text-center text-xl font-medium">
        Nextjs project that is focused on stripe payment with sessions <br />{" "}
        and product management with react context.
      </h2>

      <div className="w-full bg-slate-50">
        <h1 className="text-center text-xl font-bold">Products</h1>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
      </div>
    </main>
  );
}
