import Image from "next/image"
import { Card, CardContent } from "../_components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../_components/ui/carousel"
export function Banner() {
  return (
    <div className="flex items-center justify-center px-3 py-2">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="relative flex h-[150px] w-full items-center justify-center p-0">
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
      </Carousel>
    </div>
  )
}
