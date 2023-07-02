import AutoScheduleButton from "./AutoScheduleButton"
import ScheduleButton from "./ScheduleButton"


function AdminManagerToolbar({id}){
  return (
    <div className="flex gap-10 w-[85%] items-center">
        <AutoScheduleButton
            id={id}
        />
        <ScheduleButton
            id={id}
        />
    </div>
  )
}

export default AdminManagerToolbar