import Link from "next/link"
import Image from "next/image";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import Card from "@/components/Card"
import GoogleLogo from "@/public/assets/images/google-icon.png";
import InstagramLogo from "@/public/assets/images/instagram-logo.png";

const Contact = () => {
    return (
        <Card title="Contact Me">
            <div className="flex flex-col gap-6" id="contactMe">
                <Link href="mailto:waleedgeorge1009@gmail.com" target="_blank" className="flex flex-row items-center gap-4 w-fit group">
                    <Image src={GoogleLogo} alt="Google logo" className="size-8 group-hover:scale-125 transition-all duration-300 ease-in-out" />
                    <span className="text-xl">E-mail</span>
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=79887907201" target="_blank" className="flex flex-row items-center gap-4 w-fit group">
                    <FaWhatsapp className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out text-[#25D366]" />
                    <span className="text-xl">WhatsApp</span>
                </Link>
                <Link href="https://t.me/WaleedGeorgy" target="_blank" className="flex flex-row items-center gap-4 w-fit group">
                    <FaTelegram className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out text-[#24A1DE]" />
                    <span className="text-xl">Telegram</span>
                </Link>
                <Link href="https://teams.live.com/l/invite/FEA0l_qcRi3nP3b1AM" target="_blank" className="flex flex-row items-center gap-4 w-fit group">
                    <BsMicrosoftTeams className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out text-[#7B83EB]" />
                    <span className="text-xl">MS Teams</span>
                </Link>
                <Link href="https://www.facebook.com/waleedSGeorgee/" target="_blank" className="flex flex-row items-center gap-4 w-fit group">
                    <FaFacebook className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out text-[#1877F2]" />
                    <span className="text-xl">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/waleed_georgy/" target="_blank" className="group flex flex-row items-center gap-4 w-fit">
                    <Image src={InstagramLogo} alt="Instagram logo" className="size-9 group-hover:scale-125 transition-all duration-300 ease-in-out" />
                    <span className="text-xl">Instagram</span>
                </Link>
            </div>
        </Card>
    )
}

export default Contact