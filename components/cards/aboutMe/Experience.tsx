import Card from "@/components/Card";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Experience() {
    return (
        <Card title="Experience">
            <Timeline>
                <TimelineItem date="2024 - now" title="Full-stack Developer" subtitle="Working from home" tag="Recent"></TimelineItem>
                <TimelineItem date="2023 - now" title="ML Scientist" subtitle="Working from home"></TimelineItem>
                <TimelineItem date="2021-2023" title="Lecturer (CS, Java, Python, JS, and AI)" subtitle="Dagestan State University"></TimelineItem>
                <TimelineItem date="2017 - now" title="Freelancer" subtitle="AI, Java, JS, Python and translation" tag="Remote"></TimelineItem>
                <TimelineItem date="2017-2024" title="Researcher" subtitle="Solving NP-complete problems with AI"></TimelineItem>
            </Timeline>
        </Card>
    )
}
