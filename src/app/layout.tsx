"use client"

import * as React from "react"
import ThemeRegistry from "@/app/components/ThemeRegistry/ThemeRegistry"
import Sidebar from "@/app/components/Sidebar/Sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null 
  }

  return (
    <html>
      <body>
      <ThemeRegistry>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
        </div>
      </ThemeRegistry>
      </body>
    </html>
  )
}

