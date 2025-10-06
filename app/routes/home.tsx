import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resume} from "react-dom/server";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Resume Analyzer using AI" },
  ];
}

export default function Home() {
    const {auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');

    }, [auth.isAuthenticated]);

    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar/>
        <section className="main-section">
            <div className="page-heading py-16">
                <h1>The Perfect Tool To Boost Your Resume Ratings</h1>
                <h2>Review and analyze your resume and get a detailed report with powerful AI feedback</h2>
            </div>

      {/*Check if resumes are available*/}
      {resumes.length > 0 && (
          <div className="resumes-section">
              {
               // Map resume
               resumes.map((res) => (
                   <ResumeCard key ={res.id}  resum={res} />
               ))
              }
          </div>
      )//resume body

      }{/*//resume length*/}

        </section>

      </main>;
}
