import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({resume: {id, companyName, jobTitle, imagePath, feedback, resumePath}} : {resume:Resume}) => {
    return (
            <Link to ={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
               <div className="resume-card-header">
                   <div>
                       <h2 className="!text-black break-words font-bold"> {companyName}</h2>
                       <h3 className="text-lg text-gray-700 break-words font-bold"> {jobTitle}</h3>
                   </div>
                   <div className="flex-shrink-0">
                       <ScoreCircle score={feedback.overallScore}/>
                   </div>{/* add score circle*/}
               </div>

                <div className="gradient-border animate-in fade-in duration-1000">
                    <div className="w-full h-full">
                        <img src={imagePath} alt="resume" className="w-full h-[300px] max-sm:h-[200px] object-cover object-top"/>

                    </div>
                </div>{/*//image display*/}

            </Link>
    )
}
export default ResumeCard
