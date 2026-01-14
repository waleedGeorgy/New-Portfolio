import React from "react"
import { BsStarFill } from "react-icons/bs"
import Card from "@/components/Card"

const OtherSkills = () => {
    return (
        <Card title="Other skills">
            <div className="flex flex-col gap-3.5">
                <SkillItem skill="Data structures" level={4} />
                <SkillItem skill="Algorithms" level={4} />
                <SkillItem skill="English language" level={5} />
                <SkillItem skill="Russian language" level={5} />
                <SkillItem skill="Arabic language" level={5} />
                <SkillItem skill="Communication" level={4} />
            </div>
        </Card>
    )
}

const SkillItem = ({ skill, level }: { skill: string; level: number }) => {
    return (
        <div className="flex flex-row items-center gap-3">
            <h3 className="text-gray-400 w-36">{skill}</h3>
            {[...Array<React.ReactNode>(level)].map((_, id) => (
                <p className="text-yellow-ripe" key={id}><BsStarFill /></p>
            )
            )}
        </div>
    )
}

export default OtherSkills;