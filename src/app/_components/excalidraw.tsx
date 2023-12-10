"use client";
import { Excalidraw } from "@excalidraw/excalidraw";
export default function ExcaliDrawComponent() {
    return (
        <div className="fixed inset-0 flex flex-col">
            <Excalidraw />
        </div>
    )
}