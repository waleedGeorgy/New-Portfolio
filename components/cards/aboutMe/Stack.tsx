
import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";
import { myStack } from "@/data/projectsList";

export default function Stack() {
    return (
        <Card title="Tech Stack">
            <div className="flex flex-col gap-4 mt-2">
                {myStack.map((item, i) => (
                    <div key={i} className="grid grid-cols-[50px_1fr] items-center gap-8">
                        {/* Stack type */}
                        <div className="flex flex-wrap break-words whitespace-pre">
                            <p className="text-gray-400">{item.name}</p>
                        </div>
                        {/* Individual stack item */}
                        <div className="flex flex-wrap items-center gap-3">
                            {item.stack.map((entry) => (
                                <Tooltip
                                    key={entry.id}
                                    title={entry.title}
                                    icon={entry.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))
                }
            </div>
        </Card>
    );
}