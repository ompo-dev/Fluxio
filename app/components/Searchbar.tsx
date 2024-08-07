import { Input } from "../_components/ui/input"
import { Search } from "lucide-react"
import { Button } from "../_components/ui/button"
export default function Searchbar() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 px-5 py-3">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Pesquisar"
          className="bg-card"
        />
        <Button size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </>
  )
}
