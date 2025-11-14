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
            <div className="flex flex-wrap items-center justify-between align-center gap-3" id="contactMe">
                <Link href="mailto:waleedgeorge1009@gmail.com" target="_blank">
                    <Image src={GoogleLogo} alt="Google logo" className="size-8 hover:scale-125 transition-all duration-300 ease-in-out" />
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=79887907201" target="_blank">
                    <FaWhatsapp className="size-9 hover:scale-125 transition-all duration-300 ease-in-out text-[#25D366]" />
                </Link>
                <Link href="https://t.me/WaleedGeorgy" target="_blank">
                    <FaTelegram className="size-9 hover:scale-125 transition-all duration-300 ease-in-out text-[#24A1DE]" />
                </Link>
                <Link href="https://teams.live.com/l/invite/FEA0l_qcRi3nP3b1AM" target="_blank">
                    <BsMicrosoftTeams className="size-9 hover:scale-125 transition-all duration-300 ease-in-out text-[#7B83EB]" />
                </Link>
                <Link href="https://www.facebook.com/waleedSGeorgee/" target="_blank">
                    <FaFacebook className="size-9 hover:scale-125 transition-all duration-300 ease-in-out text-[#1877F2]" />
                </Link>
                <Link href="https://www.instagram.com/waleed_georgy/" target="_blank">
                    <Image src={InstagramLogo} alt="Instagram logo" className="size-9 hover:scale-125 transition-all duration-300 ease-in-out" />
                </Link>
            </div>
        </Card>
    )
}

export default Contact