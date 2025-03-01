import Card from "@/components/Card";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Links() {
    return (
        <Card title="My Links">
            <Timeline>
                <TimelineItem date="" title="My GitHub" subtitle="Link" link="https://github.com/waleedGeorgy" withoutDate={true}></TimelineItem>
                <TimelineItem date="" title="My Repositories" subtitle="Link" link="https://github.com/waleedGeorgy?tab=repositories" tag="More projects compared to 'My Work' section" withoutDate={true}></TimelineItem>
                <TimelineItem date="" title="My HuggingFace" subtitle="Link" link="https://huggingface.co/waleedgeorgy" withoutDate={true}></TimelineItem>
                <TimelineItem date="" title="My ORCID" subtitle="Link" link="https://orcid.org/0009-0002-0512-6967" withoutDate={true}></TimelineItem>
                <TimelineItem date="" title="My HeadHunter" subtitle="Link" link="https://makhachkala.hh.ru/resume/c9d1314eff0e1264050039ed1f724344794b73" withoutDate={true}></TimelineItem>
            </Timeline>
        </Card>
    )
}
