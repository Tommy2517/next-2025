import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "LoginLayout",
    description: "",
};
type Props = {
    children: React.ReactNode;
}
export default function LoginLayout({children}: Props) {
    return (
        <div>
            Login Layout
            {children}
        </div>
    );
}
