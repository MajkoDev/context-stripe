import { useCart } from "@/context/context";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function CartItem({price}) {
  const { removeItem } = useCart();

  return (
    <div className="flex flex-row justify-between items-center w-[450px] border border-slate-200 p-1 m-1 rounded-md shadow-xl">
      <h2 className="text-lg font-medium ml-3">{price.name}</h2>
      <div className="flex flex-row gap-2">
       {/*
        <button className="bg-transparent hover:bg-slate-200 rounded-xl p-2">
          <PlusIcon className="h-6 w-6 text-lime-500" />
        </button>
        <button className="bg-transparent hover:bg-slate-200 rounded-xl p-2">
          <MinusIcon className="h-6 w-6 text-pink-500" />
        </button>
       */}
        <button
        onClick={() => removeItem(price.id)}
        className="bg-transparent hover:bg-slate-200 rounded-xl p-2">
          <TrashIcon className="h-6 w-6 text-red-700" />
        </button>
      </div>
    </div>
  );
}
