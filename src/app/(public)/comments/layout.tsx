import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "CommentsLayout",
    description: "",
};
type Props = {
    children: React.ReactNode;
}
export default function CommentsLayout({children}: Props) {
    return (
        <div>
            Comments Layout
            <br/>
            {children}
        </div>
    );
}
