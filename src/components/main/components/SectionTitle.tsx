import { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode,
  className?: string
}
export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={`border-l-8 border-[#03A696] pl-2 text-white font-bold text-2xl mb-9 ${className}`}>{children}</h2>
  )
}