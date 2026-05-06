import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('py-16 px-4 md:px-8', className)}
      {...props}
    />
  )
)

Section.displayName = 'Section'

export { Section }