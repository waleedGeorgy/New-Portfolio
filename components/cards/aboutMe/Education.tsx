import Card from "@/components/Card";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Education() {
    return (
        <Card title="Education">
            <Timeline>
                <TimelineItem date="2019-2024" title="PhD in CS & Mathematics" subtitle="Dagestan State University, Russia"></TimelineItem>
                <TimelineItem date="2017-2019" title="Master's Degree in CS" subtitle="Dagestan State University, Russia"></TimelineItem>
                <TimelineItem date="2011-2016" title="IT Engineer Graduate" subtitle="University of Tartous, Syria"></TimelineItem>
            </Timeline>
        </Card>
    )
}
