import SendAssesment from "./SendAssesment"
import SendInvite from "./SendInvite"
import SendMail from "./SendMail"


function InterviewToolbar({phone,mail}){
  return (
    <div className="flex gap-10 w-[85%] justify-between items-center">
        <SendInvite 
            phone={phone}
        />
        <SendAssesment
        />
        <SendMail 
            mail={mail}
        />
    </div>
  )
}

export default InterviewToolbar