import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

const ChatBody = ({ chat }) => {

    const aiStyle = "bg-green-600 bg-opacity-60 self-start backdrop-blur dropshadow-md mr-auto text-white text-justify py-3";

    const parent = useRef(null);
    const bottomRef = useRef(null);

    // auto animation
    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent])

    //auto scroll for new message
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    })

    return (
        <div className="flex flex-col gap-4 max-h-[70%] mb-3" ref={parent}>
            {/* client dummy */}

            {
                chat.map((message, i) => {
                    return (
                        <div key={i} className={`bg- m-0 break-words mb-3 text-black border self-end rounded-lg text-justify p-3 max-w-[80%] px-3 py-2 border-gray-200 ${message.sender === "ai" && aiStyle}`} >
                            <pre className="whitespace-pre-wrap">
                            <span className="flex flex-row justify-center">{message.message ? message.message : "No message yet"}</span>
                            </pre>
                        </div>
                    )
                })
            }

            <div ref={bottomRef} className="h-3">
            </div>
        </div>
    )
}

export default ChatBody;