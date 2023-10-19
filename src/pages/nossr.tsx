import dynamic from "next/dynamic"

const Player = dynamic(() => import("../Player"))

export default function SSR() {
    return <Player />
}