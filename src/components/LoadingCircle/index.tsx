import { LoadingCircleContainer } from './styles'

interface LoadingCircleProps{
  marginVertical?: string;
  height?: string;
  width?: string;
  className?: string;
}

export function LoadingCircle({ marginVertical, height, width, className }: LoadingCircleProps) {
  return (
    <LoadingCircleContainer 
      style={{
        margin: marginVertical ? `${marginVertical} auto` : '0 auto',
        height: height ?? '3rem', 
        width: width ?? '3rem'
      }}
    />
  )
}