import Card from "@/components/Card";

export default function Background() {
    return (
        <Card title="My Background" className="md:h-full">
            <p className="leading-[170%] font-normal text-white/[0.65] text-[16px]">
                As a kid growing up, I had a great fascination with video games (and I still do). This fascination was my gateway into the world of computers and coding.<br />
                Even though I didn't become a video game developer, I realized my dream by becoming an <span className="text-white underline">IT engineer</span>, followed by a <span className="text-white underline">master's degree</span> in computer science, finishing off by becoming a <span className="text-white underline">PhD</span> in CS and mathematics.<br /><br />
                My journey through the realm of CS was <span className="text-white underline">long and fulfilling</span>. It started by building smaller projects that grew in size with each passing year, continued by a <span className="text-white underline">deep dive into AI</span>, and lately, <span className="text-white underline">full-stack development</span>.<br /><br />
                During those years, I had experience with <span className="text-white underline">teaching Java, Python and AI</span>, among others, at my local university, <span className="text-white underline">working on various different projects</span> from machine learning, to full-stack and mobile app development, <span className="text-white underline">teaching English</span>, working with <span className="text-white underline">text translation</span> and <span className="text-white underline">writing scientific articles</span> for HAC journals.
            </p>
        </Card>
    );
}
