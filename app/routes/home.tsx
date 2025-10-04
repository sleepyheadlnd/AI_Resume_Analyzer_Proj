import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resume} from "react-dom/server";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Resume Analyzer using AI" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar/>
        <section className="main-section">
            <div className="page-heading">
                <h1>The Perfect Tool To Boost Your Resume Ratings</h1>
                <h2>Review and analyze your resume and get a detailed report with powerful AI feedback</h2>
            </div>
        </section>

      {/*Check if resumes are available*/}
      {resumes.length > 0 && (
          <div className="resumes-section">
              {
               // Map resume
               resumes.map((resume) => (
                   <ResumeCard key ={resume.id} resume ={resume} />
               ))
              }
          </div>
      )

      }



      </main>;
}
