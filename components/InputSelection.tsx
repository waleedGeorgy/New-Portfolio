import { FC } from "react";

interface InputSelectionProps {
    type: "radio" | "checkbox",
    id: string,
    text: string,
    selectedOptions: string[],
    setSelectedOptions:  (newValue: string[]) => void;
    allowMultiple?: boolean
};

const InputSelection: FC<InputSelectionProps> = ({type, id, text, selectedOptions, setSelectedOptions, allowMultiple}) => {
    const handleOptionsChange = (option: string) => {
        if (allowMultiple){
            const currentIndex = selectedOptions.indexOf(option);
            const newSelectedOptions = [...selectedOptions];
            if (currentIndex == -1){
                newSelectedOptions.push(option);
            } else {
                newSelectedOptions.splice(currentIndex, 1);
            }
            setSelectedOptions(newSelectedOptions);
        } else {
            const newSelectedOptions = [option];
            setSelectedOptions(newSelectedOptions);
        }
    };
    
    return (
        <div className="flex items-center gap-x-2">
            <input
                type={type}
                id={id}
                checked={selectedOptions.includes(id)}
                onChange={() => {handleOptionsChange(id)}}
                className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
            />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default InputSelection;