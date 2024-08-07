import Image from "next/image"
import { Card, CardContent } from "../_components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_components/ui/carousel"

export function Banner() {
  return (
    <div className="flex max-w-[430px] items-center justify-center px-3 py-2">
      <Carousel className="max-w-[370px]">
        <CarouselPrevious className="border border-primary" />

        <CarouselContent>
          <CarouselItem className="p-0">
            <Card>
              <CardContent className="relative flex h-[150px] items-center justify-center p-0">
                <Image
                  src="/Banner.png"
                  alt="Banner Fluxio"
                  fill
                  className="rounded-md object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card>
              <CardContent className="relative flex h-[150px] items-center justify-center p-0">
                <Image
                  src="/Banner.png"
                  alt="Banner Fluxio"
                  fill
                  className="rounded-md object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>

        <CarouselNext className="border border-primary" />
      </Carousel>
    </div>
  )
}
