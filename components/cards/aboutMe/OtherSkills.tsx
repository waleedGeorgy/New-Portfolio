import Card from "@/components/Card"
import React from "react"
import { BsStarFill } from "react-icons/bs"

const OtherSkills = () => {
    return (
        <Card title="Other skills">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-3">
                    <h3 className="text-lg text-gray-400 w-36">Data structures</h3>
                    {[...Array<React.ReactNode>(4)].map((_, id) => (
                        <p className="text-yellow-ripe" key={id}><BsStarFill /></p>
                    )
                    )}
                </div>
                <div className="flex flex-row items-center gap-3">
                    <h3 className="text-lg text-gray-400 w-36">Algorithms</h3>
                    {[...Array<React.ReactNode>(4)].map((_, id) => (
                        <p className="text-yellow-ripe" key={id}><BsStarFill /></p>
                    )
                    )}
                </div>
                <div className="flex flex-row items-center gap-3">
                    <h3 className="text-lg text-gray-400 w-36">English language</h3>
                    {[...Array<React.ReactNode>(5)].map((_, id) => (
                        <p className="text-yellow-ripe" key={id}><BsStarFill /></p>
                    )
                    )}
                </div>
                <div className="flex flex-row items-center gap-3">
                    <h3 className="text-lg text-gray-400 w-36">Russian language</h3>
                    {[...Array<React.ReactNode>(5)].map((_, id) => (
                        <p className="text-yellow-ripe" key={id}><BsStarFill /></p>
                    )
                    )}
                </div>
                <div className="flex flex-row items-center gap-3">
                    <h3 className="text-lg text-gray-400 w-36">Arabic language</h3>
                    {[...Array<React.ReactNode>(5)].map((_, id) => (
                        <p className="text-yellow-ripe" key={id}><BsStarFill /></p>
                    )
                    )}
                </div>
                <div className="flex flex-row items-center gap-3">
                    <h3 className="text-lg text-gray-400 w-36">Communication</h3>
                    {[...Array<React.ReactNode>(4)].map((_, id) => (
                        <p className="text-yellow-ripe" key={id}><BsStarFill /></p>
                    )
                    )}
                </div>
            </div>
        </Card>
    )
}

export default OtherSkills