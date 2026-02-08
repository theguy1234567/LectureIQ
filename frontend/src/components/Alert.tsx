import { ReactNode } from 'react'
import { AlertCircle, CheckCircle2, Info } from 'lucide-react'

interface AlertProps {
  type: 'error' | 'success' | 'info'
  title: string
  message?: string
  children?: ReactNode
}

export default function Alert({ type, title, message, children }: AlertProps) {
  const styles = {
    error: 'bg-red-50 border-l-4 border-red-500 text-red-900',
    success: 'bg-emerald-50 border-l-4 border-emerald-500 text-emerald-900',
    info: 'bg-blue-50 border-l-4 border-blue-500 text-blue-900',
  }

  const icons = {
    error: <AlertCircle className="w-5 h-5 flex-shrink-0" />,
    success: <CheckCircle2 className="w-5 h-5 flex-shrink-0" />,
    info: <Info className="w-5 h-5 flex-shrink-0" />,
  }

  return (
    <div className={`flex gap-4 p-4 rounded-lg ${styles[type]}`}>
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
      <div>
        <p className="font-semibold">{title}</p>
        {message && <p className="text-sm mt-1 opacity-90">{message}</p>}
        {children}
      </div>
    </div>
  )
}
