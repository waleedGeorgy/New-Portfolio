import Card from "@/components/Card";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Experience() {
    return (
        <Card title="Work Experience">
            <Timeline>
                <TimelineItem date="2024 - now" title="Full-stack developer" subtitle="Freelancer" tag="Recent"></TimelineItem>
                <TimelineItem date="2020 - 2024" title="ML scientist" subtitle="Dagestan State University"></TimelineItem>
                <TimelineItem date="2018 - 2024" title="Lecturer (CS, DSA, Python, JS, and AI)" subtitle="Dagestan State University"></TimelineItem>
                <TimelineItem date="2018 - 2024" title="Researcher" subtitle="Solving NP-complete problems with AI"></TimelineItem>
            </Timeline>
        </Card>
    )
}
