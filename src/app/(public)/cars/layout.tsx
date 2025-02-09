import type {Metadata} from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "CarLayout",
    description: "",
};
type Props = {
    children: React.ReactNode;
}
export default function CarLayout({children}: Props) {
    return (
        <div>
            <Link href={'/'} >home</Link>
            {children}
        </div>
    );
}
