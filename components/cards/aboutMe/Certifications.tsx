import Card from "@/components/Card";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Certifications() {
    return (
        <Card title="Certifications & Professional Development">
            <Timeline>
                <TimelineItem date="2025" title="The Complete Full-stack Web Development Bootcamp" subtitle="Udemy" tag="Course"></TimelineItem>
                <TimelineItem date="2024" title="C2 English Certificate" subtitle="EF SET" link="https://drive.google.com/file/d/1DkU2e6jQZ55bgl7kZBQeBolHd8THvhAX/view?usp=sharing"></TimelineItem>
                <TimelineItem date="2024" title="TensorFlow for Deep Learning" subtitle="Zero To Mastery" tag="Course"></TimelineItem>
                <TimelineItem date="2023" title="Certificate Of Registration " subtitle="For a computer program #2023662094" link="https://drive.google.com/file/d/1Bwqn35M3-tPdivdJ59peT3Pr6QlWd3fi/view?usp=drive_link"></TimelineItem>
                <TimelineItem date="2023" title="Certificate Of Registration " subtitle="For a computer program #2023661297" link="https://drive.google.com/file/d/1xQDXMMdHV56hOTChH-iggTVE6ktFYn34/view?usp=sharing"></TimelineItem>
                <TimelineItem date="2023" title="Learn PyTorch for Deep Learning" subtitle="Zero To Mastery" tag="Course"></TimelineItem>
                <TimelineItem date="2022" title="Python for Machine Learning & Data Science Masterclass" subtitle="Pierian Data Inc." tag="Course"></TimelineItem>
                <TimelineItem date="2020" title="Certificate of Honor" subtitle="Dagestan State University" link="https://drive.google.com/file/d/1FkPzhpn9xkFhPQk_Y-Q8jQiwkZhzbXyp/view?usp=sharing"></TimelineItem>
            </Timeline>
        </Card>
    )
}
