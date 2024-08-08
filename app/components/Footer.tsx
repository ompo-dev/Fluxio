import Image from "next/image"
import { Card, CardContent } from "../_components/ui/card"
import { LinkedinIcon } from "lucide-react"
import { Button } from "../_components/ui/button"

export default function Footer() {
  return (
    <>
      <Card className="mt-8 items-center justify-center rounded-none">
        <CardContent className="mx-3 mt-3 flex flex-row items-center justify-between">
          <h2 className="text-sm text-gray-500">
            © 2024 Copyright Fluxio - Maicon P. Barbosa
          </h2>
          <Button variant="outline" size="icon">
            <LinkedinIcon
              className="h-4 w-4"
              href="https://www.linkedin.com/in/dev-maicon/"
              target="_blank"
            />
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
