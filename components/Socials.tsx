import Button from "./Button";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Socials() {
    return (
        <div className="flex items-center flex-wrap gap-3" >
            {socials.map((item, id) => (
                <Button key={id} link={item.link} >
                    <span className="w-5 h-5 grid place-items-center justify-center align-middle">{item.icon}</span>
                </Button>
            ))}
        </div>
    );
}

const socials = [
    {
        icon: <FaFacebookSquare color="#0866FF" size={22} />,
        link: "https://www.facebook.com/waleedSGeorgee/",
    },
    {
        icon: <FaInstagram color="#FF0069" size={22} />,
        link: "https://www.instagram.com/waleed_georgy/",
    },
];