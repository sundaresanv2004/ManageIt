'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment)

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`
          const isLast = index === pathSegments.length - 1
          return (
            <React.Fragment key={segment}>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <li>
                {isLast ? (
                  <span className="text-gray-700 font-medium">{segment}</span>
                ) : (
                  <Link href={href} className="text-gray-500 hover:text-gray-700">
                    {segment}
                  </Link>
                )}
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb

