import { ServiceCard } from "./ServiceCard"
import { db } from "../_lib/prisma"
export async function Recomended() {
  const shops = await db.shop.findMany({})
  console.log(shops)
  return (
    <div className="max-w-[429px] px-5 py-2">
      <div className="flex flex-col gap-3">
        <h2 className="text-md font-semibold text-gray-500">RECOMENDADOS</h2>
        <div className="no-scrollbar flex flex-row gap-3 overflow-x-auto">
          {shops.map((shop) => (
            <ServiceCard key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </div>
  )
}
