import { FC, ReactNode, useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticEffectProps {
    className?: string,
    children: ReactNode
};

const MagneticEffect: FC<MagneticEffectProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        const boundingRect = ref.current?.getBoundingClientRect();
        if (boundingRect) {
            const { width, height, top, left } = boundingRect;
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX, y: middleY });
        }
    };

    const resetPosition = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className={cn("relative", className)}
            ref={ref}
            animate={position}
            transition={{ type: "spring", stiffness: 50, damping: 10, mass: 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPosition}
        >
            {children}
        </motion.div>
    );
};

export default MagneticEffect;