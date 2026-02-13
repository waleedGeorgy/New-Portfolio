import Link from "next/link"
import Image from "next/image";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import Card from "@/components/Card"
import GoogleLogo from "@/public/images/google-icon.png";
import InstagramLogo from "@/public/images/instagram-logo.png";
import { ReactNode } from "react";

const Contact = () => {
    return (
        <Card title="Contact Me">
            <div className="flex flex-wrap items-center align-center gap-6 text-gray-200" id="contactMe">
                <ContactItem
                    link="mailto:waleedgeorge1009@gmail.com"
                    icon={<Image src={GoogleLogo} alt="Google logo" className="size-8 group-hover:scale-125 transition-all duration-300 ease-in-out" />}
                    text="E-mail"
                />
                <ContactItem
                    link="https://api.whatsapp.com/send?phone=79887907201"
                    icon={<FaWhatsapp className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out text-[#25D366]" />}
                    text="WhatsApp"
                />
                <ContactItem
                    link="https://t.me/WaleedGeorgy"
                    icon={<FaTelegram className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out text-[#24A1DE]" />}
                    text="Telegram"
                />
                <ContactItem
                    link="https://teams.live.com/l/invite/FEA0l_qcRi3nP3b1AM"
                    icon={<BsMicrosoftTeams className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out text-[#7B83EB]" />}
                    text="MS Teams"
                />
                <ContactItem
                    link="https://www.facebook.com/waleedSGeorgee/"
                    icon={<FaFacebook className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out text-[#1877F2]" />}
                    text="Facebook" />
                <ContactItem
                    link="https://www.instagram.com/waleed_georgy//"
                    icon={<Image src={InstagramLogo} alt="Instagram logo" className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out" />}
                    text="Instagram"
                />
            </div>
        </Card>
    )
}

interface ContactItemProps {
    link: string,
    icon: ReactNode,
    text: string,
}

const ContactItem = ({ link, icon, text }: ContactItemProps) => {
    return (
        <Link href={link} target="_blank" className="flex flex-col justify-center items-center gap-2 group">
            {icon}
            <span className="text-sm">{text}</span>
        </Link>
    )
}

export default Contact;