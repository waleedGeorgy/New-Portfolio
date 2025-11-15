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
            <div className="flex flex-wrap items-center align-center gap-6" id="contactMe">
                <Link href="mailto:waleedgeorge1009@gmail.com" target="_blank" className="flex flex-col justify-center items-center gap-2">
                    <Image src={GoogleLogo} alt="Google logo" className="size-8 hover:scale-125 transition-all duration-300 ease-in-out" />
                    <span className="text-sm">E-mail</span>
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=79887907201" target="_blank" className="flex flex-col justify-center items-center gap-2">
                    <FaWhatsapp className="size-9 hover:scale-125 transition-all duration-300 ease-in-out text-[#25D366]" />
                    <span className="text-sm">WhatsApp</span>
                </Link>
                <Link href="https://t.me/WaleedGeorgy" target="_blank" className="flex flex-col justify-center items-center gap-2">
                    <FaTelegram className="size-9 hover:scale-125 transition-all duration-300 ease-in-out text-[#24A1DE]" />
                    <span className="text-sm">Telegram</span>
                </Link>
                <Link href="https://teams.live.com/l/invite/FEA0l_qcRi3nP3b1AM" target="_blank" className="flex flex-col justify-center items-center gap-2">
                    <BsMicrosoftTeams className="size-9 hover:scale-125 transition-all duration-300 ease-in-out text-[#7B83EB]" />
                    <span className="text-sm">MS Teams</span>
                </Link>
                <Link href="https://www.facebook.com/waleedSGeorgee/" target="_blank" className="flex flex-col justify-center items-center gap-2">
                    <FaFacebook className="size-9 hover:scale-125 transition-all duration-300 ease-in-out text-[#1877F2]" />
                    <span className="text-sm">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/waleed_georgy/" target="_blank" className="flex flex-col justify-center items-center gap-2">
                    <Image src={InstagramLogo} alt="Instagram logo" className="size-9 hover:scale-125 transition-all duration-300 ease-in-out" />
                    <span className="text-sm">Instagram</span>
                </Link>
            </div>
        </Card>
    )
}

export default Contact