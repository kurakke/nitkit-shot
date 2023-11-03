import classNames from "classnames";
import Image from "next/image";
import React from "react";


import bubbleArrowLeft from "../../../public/bubbleArrowLeft.svg";
import bubbleArrowRight from "../../../public/bubbleArrowRight.svg";
import { Comment } from "../../../types/Comment";

interface Props {
    affiliation: string;
    comments: Comment[];
}

const CommentContents: ({ affiliation, comments }: Props) => JSX.Element = ({ affiliation, comments }) => {

    const cardStyle = (place: string, right: string, left: string) => {
        switch (place) {
            case "right":
                return right;
            case "left":
                return left;
        }
    }

    return (
        <div>
            <p className="text-white font-main text-center text-[16px] mb-[20px]">~{affiliation}~</p>
            <div className="grid gap-y-[20px]">
                {comments.map((comment, index) => (
                    <div key={index} className={classNames(`relative px-[12px] py-[10px] max-w-[380px] rounded-[10px] font-main text-main`,
                        `${cardStyle(
                            comment.place,
                            "mr-[14px] ml-auto bg-accent-green",
                            "ml-[14px] mr-auto bg-accent-yellow",
                        )}`
                    )}>
                        {comment.place === "left" && (
                            <Image
                                src={bubbleArrowLeft}
                                width={18}
                                height={16}
                                alt="bubbleArrowLeft"
                                className="absolute top-0 left-[-14px]"
                            />
                        )}
                        {comment.place === "right" && (
                            <Image
                                src={bubbleArrowRight}
                                width={18}
                                height={16}
                                alt="bubbleArrowLeft"
                                className="absolute top-0 right-[-14px]"
                            />
                        )}
                        <div className="flex items-baseline">
                            <p className="mb-[10px] border-b text-[16px] leading-tight w-fit border-main">{comment.name}</p>
                            <p className="text-[12px] ml-[10px] leading-[1.44]">{comment.post}</p>
                        </div>
                        <p className="text-[12px] break-words whitespace-pre-wrap">{comment.comment}</p>
                    </div >
                ))}
            </div>
        </div >
    )
}

export default CommentContents;
