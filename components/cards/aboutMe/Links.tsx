import Card from "@/components/Card";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Links() {
    return (
        <Card title="Useful Links">
            <Timeline>
                <TimelineItem date="" title="GitHub profile" subtitle="Link" link="https://github.com/waleedGeorgy" withoutDate={true}></TimelineItem>
                <TimelineItem date="" title="Projects repositories" subtitle="Link" link="https://github.com/waleedGeorgy?tab=repositories" tag="All projects" withoutDate={true}></TimelineItem>
                <TimelineItem date="" title="Leetcode" subtitle="Link" link="https://leetcode.com/u/waleedgeorgy/" withoutDate={true}></TimelineItem>
                <TimelineItem date="" title="HuggingFace" subtitle="Link" link="https://huggingface.co/waleedgeorgy" withoutDate={true}></TimelineItem>
                <TimelineItem date="" title="ORCID" subtitle="Link" link="https://orcid.org/0009-0002-0512-6967" withoutDate={true}></TimelineItem>
            </Timeline>
        </Card>
    )
}
