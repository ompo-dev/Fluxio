import { Badge } from "../_components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../_components/ui/avatar"
export function ScheduleCard() {
  return (
    <div className="flex h-[110px] w-full flex-row justify-between gap-3 rounded-xl border border-gray-700 bg-card">
      <div className="flex flex-col gap-2 px-3 py-3">
        <Badge className="w-fit">Confirmado</Badge>
        <p className="text-md font-semibold text-gray-50">Corte de Cabelo</p>
        <div className="flex flex-row items-center justify-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm text-gray-50">Vintage Barber</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center border-l border-gray-700 px-6">
        <p className="text-sm">Fevereiro</p>
        <p className="text-xl">06</p>
        <p className="text-sm">09:45</p>
      </div>
    </div>
  )
}
