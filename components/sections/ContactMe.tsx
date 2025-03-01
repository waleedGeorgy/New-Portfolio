import Card from "../Card";
import SectionTitle from "../SectionTitle";
import ContactCard from "../cards/contactMe/ContactCard";
import { MdEmail, MdSubject } from "react-icons/md";
import Input from "../Input";
import { FaUser } from "react-icons/fa";
import TextArea from "../TextArea";
import Button from "../Button";
import { SiMinutemailer } from "react-icons/si";
import { GiThink } from "react-icons/gi";
import { FormEvent, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowDown, FaSkype } from "react-icons/fa6";
import emailjs from "@emailjs/browser"

export default function ContactMe() {
    const formRef = useRef<HTMLFormElement>(null!);
    const btnRef = useRef<HTMLButtonElement>(null);

    const sendEmail = (e:FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        emailjs.sendForm("service_8td7mtr",
            "template_g1k6aax",
            formRef.current,
            "gvjDh0NQf7A3Wi3bd"
        )
        .then((res) => {
            console.log(res.text);
            console.log("Email Sent!")
        }, (error) => {
            console.log(error.text);
        })
    };

    return (
        <div className="pt-24 px-3 lg:px-8 mb-8" id="contactMe">
            <SectionTitle number="03" title="Contact Me" />
            <Card title="">
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                    {/* Left side */}
                    <div className="flex flex-col gap-6">
                        <ContactCard
                            icon={<MdEmail size={25} color="#EA4335" />}
                            text="waleedgeorge1009@gmail.com"
                            btnText="Send"
                            link="mailto:waleedgeorge1009@gmail.com"
                        />
                        <ContactCard
                            icon={<FaWhatsapp size={25} color="#25D366" />}
                            text="+7 (988) 790-72-01"
                            btnText="Message"
                            link="https://api.whatsapp.com/send?phone=79887907201"
                        />
                        <ContactCard
                            icon={<FaSkype size={25} color="#00AFF0" />}
                            text="@Waleed Georgee"
                            btnText="Contact"
                            link="https://join.skype.com/invite/Mpuf6eBfBMFO"
                        />
                    </div>
                    {/* right side */}
                    <form ref={formRef} onSubmit={sendEmail} className="col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
                        {/* Personal data inputs */}
                        <p className="text-[20px] flex flex-row justify-center items-center gap-x-3">Send me a pre-custom email <FaArrowDown /></p>
                        <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
                            <Input type="text" name="name" placeholder="Full Name*" icon={<FaUser />} />
                            <Input type="email" name="email" placeholder="Email Address*" icon={<MdEmail size={19} />} />
                        </div>
                        <div className="flex items-center justify-between mb-4 gap-8">
                            <Input type="text" name="subject" placeholder="Subject*" icon={<MdSubject size={19} />} />
                        </div>
                        {/* Text area section */}
                        <TextArea name="message" placeholder="What do you have in mind?*" icon={<GiThink size={23} />} />
                        <div className="w-full flex justify-end">
                            <div onClick={() => btnRef.current?.click()}>
                                <Button className="!w-44 !py-3 !text-xl">Send <SiMinutemailer /></Button>
                            </div>
                            <button type="submit" hidden ref={btnRef}>Send</button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
}