import Image from "next/image"
import { Card, CardContent } from "../_components/ui/card"
import { MenuIcon } from "lucide-react"
import { Button } from "../_components/ui/button"

export default function Header() {
  return (
    <>
      <Card className="mx-2 my-3 w-[410px] items-center justify-center rounded-md">
        <CardContent className="mt-3 flex flex-row items-center justify-between rounded-md shadow-md shadow-primary">
          <Image src="/Logo.png" alt="Logo Fluxio" width={150} height={18} />
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
