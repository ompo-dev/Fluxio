import { ScheduleCard } from "./Schedule-card"
export function Schedules() {
  return (
    <div className="px-5 py-2">
      <div className="flex flex-col gap-3">
        <h2 className="text-md font-semibold text-gray-500">AGENDAMENTOS</h2>
        <ScheduleCard />
      </div>
    </div>
  )
}
