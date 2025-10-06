import {resumes} from "../../constants";
import { useEffect, useState } from "react";

const ScoreCircle = ({ score = 0}: { score: number }) => {
    const radius = 40;
    const stroke = 8;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;


    //const progress = score / 100;
    //const strokeDashoffset = circumference * (1 - progress);

    //Animation so the score will run like a gauge
    const [progress, setProgress] = useState(0); // animation progress

    useEffect(() => {
        const animation = setTimeout(() =>
        {
            setProgress(score / 100); // animate to final score
        }, 400);
        return () => clearTimeout(animation);
    }, [score]);

    const strokeDashoffset = circumference * (1 - progress);

    return (
        <div className="relative w-[100px] h-[100px]">
            <svg
                height="100%"
                width="100%"
                viewBox="0 0 100 100"
                className="transform -rotate-90"
            >
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={normalizedRadius}
                    stroke="#e5e7eb"
                    strokeWidth={stroke}
                    fill="transparent"
                />

                {/* Partial circle with gradient */}
                <defs>
                    <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#cc66ff" />
                        <stop offset="100%" stopColor="#66ffff" />
                    </linearGradient>
                </defs>
                <circle
                    cx="50"
                    cy="50"
                    r={normalizedRadius}
                    stroke="url(#grad)"
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease-out" }}

                />
            </svg>

            {/* Score and issues */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-semibold text-lg" >{`${score}/100`}</span>
            </div>
        </div>
    );
};

export default ScoreCircle;