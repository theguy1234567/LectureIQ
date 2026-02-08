interface CardProps {
  title?: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Card({
  title,
  description,
  children,
  footer,
  onClick,
  className = '',
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${
        onClick ? 'cursor-pointer hover:border-teal-300' : ''
      } ${className}`}
      onClick={onClick}
    >
      {(title || description) && (
        <div className="px-6 py-4 border-b border-slate-200">
          {title && <h3 className="font-semibold text-slate-900">{title}</h3>}
          {description && <p className="text-sm text-slate-600 mt-1">{description}</p>}
        </div>
      )}

      {children && <div className="px-6 py-4">{children}</div>}

      {footer && (
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  )
}
