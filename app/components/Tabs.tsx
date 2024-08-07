import { Mail, PocketKnife, Scissors, Ruler, SprayCan } from "lucide-react"
import { Button } from "../_components/ui/button"

export function Tabs() {
  return (
    <div className="relative max-w-[430px] px-5 py-1">
      <div className="no-scrollbar -mx-5 flex max-w-[430px] flex-nowrap gap-4 overflow-hidden overflow-x-auto px-5">
        <Button className="h-8">
          <PocketKnife className="mr-2 h-4 w-4" />
          Item 1
        </Button>
        <Button className="h-8">
          <Scissors className="mr-2 h-4 w-4" />
          Item 2
        </Button>
        <Button className="h-8">
          <Ruler className="mr-2 h-4 w-4" />
          Item 3
        </Button>
        <Button className="h-8">
          <SprayCan className="mr-2 h-4 w-4" />
          Item 4
        </Button>
        <Button className="h-8">
          <Mail className="mr-2 h-4 w-4" />
          Item 5
        </Button>
      </div>
    </div>
  )
}
