import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export default function Logo({ 
  className = '', 
  width = 120, 
  height = 40, 
  priority = false 
}: LogoProps) {
  return (
    <Image
      src="/pure_glint (500 x 500 px).svg"
      alt="Pure Glint Clean - Professional Residential Cleaning Services"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}