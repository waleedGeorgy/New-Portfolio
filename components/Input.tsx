import { FC, ReactNode } from "react";

interface InputProps {
    placeholder: string,
    type: "text" | "email" | "password",
    name: string,
    icon?: ReactNode
}

const Input: FC<InputProps> = ({icon, placeholder, type, name}) => {
    return (
        <div className="relative w-full">
            {/* Input field icon */}
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">{icon}</div>
            {/* Input field */}
            <input
            required
            type={type} 
            name={name}
            placeholder={placeholder}
            className="bg-primary-background text-primary-foreground w-full rounded-md text-sm ps-10 px-2.5 py-4 focus:outline-none focus:outline-purple-darkness transition-colors ease-in-out duration-400"
            />
        </div>
    );
};

export default Input;