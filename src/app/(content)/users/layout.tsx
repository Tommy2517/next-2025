import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "UsersLayout",
    description: "",
};
type Props = {
    children: React.ReactNode;
}
export default function UsersLayout({children}: Props) {
    return (
        <div>
            users Layout
            {children}
        </div>
    );
}
