import { AlertTriangle, ArrowRight, Check, ChevronLeft, ChevronRight, Command, CreditCard, File, FileText, HelpCircle, Image, Laptop, Loader2, LightbulbIcon as LucideProps, Moon, MoreVertical, Pizza, Plus, Settings, SunMedium, Trash, Twitter, User, X, TypeIcon as type, type LucideIcon } from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-1.9-2.3-1.9-5.3 0-3.6 2.3-6.2 5.6-5.9 3 .3 5.3 2.3 5.3 5.2v1.3zm-28.8-16c0 3 2.3 5.2 5.3 5.2 3 0 5.2-2.3 5.2-5.2 0-3-2.3-5.2-5.3-5.2-3 0-5.2 2.3-5.2 5.2zm75.3-12.9v23.8c0 6.9-4.3 10.5-9.5 10.5-5.3 0-8.5-3.6-9.8-6.9l4.3-2.6c.9 1.6 2.3 3.6 5.5 3.6 3.6 0 5.9-2.3 5.9-6.5v-2.3c-1.6 2-3.6 3.3-6.5 3.3-5.6 0-10.2-4.9-10.2-11.5 0-6.5 4.6-11.5 10.2-11.5 3 0 5 1.3 6.5 3.3v-2.6h4.6zm-45.8 5.3c-1.6-2-3.6-3-6.2-3-5.3 0-9.2 4.6-9.2 10.5 0 5.9 3.9 10.5 9.2 10.5 2.6 0 4.6-1 6.2-3v2.6h4.6v-23.8h-4.6v6.2zm-16.7 17.4c-6.5 0-11.5-5.3-11.5-11.8 0-6.5 5-11.8 11.5-11.8 6.5 0 11.5 5.3 11.5 11.8 0 6.5-5 11.8-11.5 11.8zm-29.4-17.4c-1.6-2-3.6-3-6.2-3-5.3 0-9.2 4.6-9.2 10.5 0 5.9 3.9 10.5 9.2 10.5 2.6 0 4.6-1 6.2-3v2.6h4.6v-23.8h-4.6v6.2zm-16.7 17.4c-6.5 0-11.5-5.3-11.5-11.8 0-6.5 5-11.8 11.5-11.8 6.5 0 11.5 5.3 11.5 11.8 0 6.5-5 11.8-11.5 11.8zm-39.3-17.4c-1.6-2-3.6-3-6.2-3-5.3 0-9.2 4.6-9.2 10.5 0 5.9 3.9 10.5 9.2 10.5 2.6 0 4.6-1 6.2-3v2.6h4.6v-23.8h-4.6v6.2zm-16.7 17.4c-6.5 0-11.5-5.3-11.5-11.8 0-6.5 5-11.8 11.5-11.8 6.5 0 11.5 5.3 11.5 11.8 0 6.5-5 11.8-11.5 11.8zm-29.4-17.4c-1.6-2-3.6-3-6.2-3-5.3 0-9.2 4.6-9.2 10.5 0 5.9 3.9 10.5 9.2 10.5 2.6 0 4.6-1 6.2-3v2.6h4.6v-23.8h-4.6v6.2zm-16.7 17.4c-6.5 0-11.5-5.3-11.5-11.8 0-6.5 5-11.8 11.5-11.8 6.5 0 11.5 5.3 11.5 11.8 0 6.5-5 11.8-11.5 11.8z"
    ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
}

