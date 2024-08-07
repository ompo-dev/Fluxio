import React from "react"
import { Card, CardContent } from "../_components/ui/card"
import { Button } from "../_components/ui/button"
import Image from "next/image"
import { Shop } from "@prisma/client"
import { Badge } from "../_components/ui/badge"
import { StarIcon } from "lucide-react"

interface ServiceCardProps {
  shop: Shop
}

export const ServiceCard = ({ shop }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <Card className="h-full w-[170px]">
        <div className="flex h-full flex-col justify-between gap-2 px-2 py-2">
          <div className="flex flex-col gap-2">
            <Card>
              <CardContent className="relative flex h-[140px] w-[150px] items-center justify-center p-0">
                <Image
                  src={shop.imageUrl}
                  alt={shop.name}
                  fill
                  className="rounded-md object-cover"
                />
                <Badge
                  variant="secondary"
                  className="absolute left-0 top-0 m-2 flex gap-1 text-xs font-semibold"
                >
                  <StarIcon size={15} className="fill-white text-white" />
                  <p className="mt-[2px]">4,7</p>
                </Badge>
              </CardContent>
            </Card>
            <h1 className="text-start text-xl font-semibold">{shop.name}</h1>
            <h2 className="text-start text-sm font-medium text-gray-400">
              {shop.address}
            </h2>
          </div>
          <Button className="w-full">Agendar</Button>
        </div>
      </Card>
    </div>
  )
}
