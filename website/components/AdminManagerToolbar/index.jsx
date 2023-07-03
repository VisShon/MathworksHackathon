import AutoScheduleButton from "./AutoScheduleButton"
import ScheduleButton from "./ScheduleButton"


function AdminManagerToolbar({selectedManager,selectedCandidate,selectedSlot,interviewersDataAuto,candidatesDataAuto }){
  return (
    <div className="flex gap-10 w-[85%] items-center">
        <AutoScheduleButton
            id={selectedManager}
        />
        <ScheduleButton
            managerId={selectedManager}
            candidateId={selectedCandidate}
            slot={selectedSlot}
            interviewersDataAutoButton = {interviewersDataAuto}
            candidatesDataAutoButton = {candidatesDataAuto}
        />
    </div>
  )
}

export default AdminManagerToolbar