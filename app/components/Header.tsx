import Image from "next/image"
import { Card, CardContent } from "../_components/ui/card"
import { MenuIcon } from "lucide-react"
import { Button } from "../_components/ui/button"

export default function Header() {
  return (
    <>
      <Card className="mx-2 my-3 max-w-[405px] items-center justify-center">
        <CardContent className="mt-3 flex flex-row items-center justify-between">
          <Image src="/Logo.png" alt="Logo Fluxio" width={150} height={18} />
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
