export default function ProductCard() {
  return (
    <article className="border border-slate-200 rounded-sm shadow-lg py-2 px-4 flex flex-col gap-2 m-2">
      <h2 className="text-md">Product Title</h2>
      <h3 className="text-md">100 $</h3>
      <div className="flex flex-row gap-x-2">
        <button className="py-1 rounded-md px-2 border border-slate-800 hover:cursor-pointer hover:bg-lime-500 text-sm font-semibold text-slate-800">
          Add to Cart
        </button>
        <button className="py-1 rounded-md px-2 border border-slate-800 hover:cursor-pointer hover:bg-pink-500 text-sm font-semibold text-slate-800">
          Remove from Cart
        </button>
      </div>
    </article>
  );
}
