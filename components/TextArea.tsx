import { FC, ReactNode } from "react";

interface TextAreaProps {
    icon?: ReactNode,
    placeholder: string,
    name: string
}

const TextArea: FC<TextAreaProps> = ({icon, placeholder, name}) => {
    return(
        <div className="relative w-full">
            {/* Text area icon */}
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">{icon}</div>
            {/* Text area */}
            <textarea 
            placeholder={placeholder}
            name={name}
            className="bg-primary-background text-primary-foreground w-full rounded-md text-sm ps-11 p-2.5 pt-9 focus:outline-none focus:outline-purple-darkness"
            required
            />
        </div>
    );
};

export default TextArea;