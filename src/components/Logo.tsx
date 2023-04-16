import { GameController } from "@phosphor-icons/react"

interface LogoProps {
  className?: string;
}

export function Logo({ className } : LogoProps) {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <GameController size={36} color="#F28705"/>
      <h1 className="font-bold text-4xl text-white">Sketch games</h1>
    </div>
  )
}