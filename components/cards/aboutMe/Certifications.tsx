import Card from "@/components/Card";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Certifications() {
    return (
        <Card title="Certifications & Professional Development">
            <Timeline>
                <TimelineItem date="2025" title="The complete full-stack web development bootcamp" subtitle="Udemy" tag="Course"></TimelineItem>
                <TimelineItem date="2024" title="C2 english certificate" subtitle="EF SET | Link" link="https://drive.google.com/file/d/1DkU2e6jQZ55bgl7kZBQeBolHd8THvhAX/view?usp=sharing"></TimelineItem>
                <TimelineItem date="2024" title="TensorFlow for Deep Learning" subtitle="Zero To Mastery" tag="Course"></TimelineItem>
                <TimelineItem date="2023" title="Certificate of registration " subtitle="For a computer program #2023662094" link="https://drive.google.com/file/d/1Bwqn35M3-tPdivdJ59peT3Pr6QlWd3fi/view?usp=drive_link"></TimelineItem>
                <TimelineItem date="2023" title="Certificate of registration " subtitle="For a computer program #2023661297" link="https://drive.google.com/file/d/1xQDXMMdHV56hOTChH-iggTVE6ktFYn34/view?usp=sharing"></TimelineItem>
                <TimelineItem date="2023" title="Learn PyTorch for deep learning" subtitle="Zero To Mastery" tag="Course"></TimelineItem>
                <TimelineItem date="2022" title="Python for machine learning & data science masterclass" subtitle="Pierian Data Inc." tag="Course"></TimelineItem>
                <TimelineItem date="2020" title="Certificate of honor" subtitle="Dagestan State University | Link" link="https://drive.google.com/file/d/1FkPzhpn9xkFhPQk_Y-Q8jQiwkZhzbXyp/view?usp=sharing"></TimelineItem>
            </Timeline>
        </Card>
    )
}
