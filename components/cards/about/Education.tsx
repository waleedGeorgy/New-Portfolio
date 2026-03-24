import Card from "@/components/Card";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Education() {
    return (
        <Card title="Education">
            <Timeline>
                <TimelineItem date="2019-2024" title="PhD in CS & mathematics" subtitle="Dagestan State University, Russia" />
                <TimelineItem date="2017-2019" title="Master's degree in CS" subtitle="Dagestan State University, Russia" />
                <TimelineItem date="2011-2016" title="IT engineer graduate" subtitle="University of Tartus, Syria" />
            </Timeline>
        </Card>
    )
}
