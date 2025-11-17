import { cn } from "@/lib/utils"

export default function Background() {
    return (
        <div className={cn(
            "fixed top-0 left-0 w-full h-full",
            "before-content-none before: -top-40 before: -left-40 before: w-[calc(100%+30rem)] before: h-[calc(100%+30rem)]",
            "before: fixed before: bg-noise before: opacity-15 pointer-events-none before: animate-noise-bg"
        )} aria-hidden="true" />
    )
}