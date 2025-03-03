import Button from "./Button";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Socials() {
    return (
        <div className="flex items-center flex-wrap gap-4">
            {socials.map((item, id) => (
                <Button key={id} link={item.link} className="shadow-sm shadow-black cursor-pointer animate-wiggle">
                    <span className="w-6 h-6 grid place-items-center justify-center align-middle">{item.icon}</span>
                </Button>
            ))}
        </div>
    );
}

const socials = [
    {
        icon: <FaFacebookSquare color="#0866FF" size={24} />,
        link: "https://www.facebook.com/waleedSGeorgee/",
    },
    {
        icon: <FaInstagram color="#FF0069" size={24} />,
        link: "https://www.instagram.com/waleed_georgy/",
    },
];