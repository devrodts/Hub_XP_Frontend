import type * as React from "react"
import ThemeRegistry from "@/app/components/ThemeRegistry/ThemeRegistry"
import Sidebar from "@/app/components/Sidebar/Sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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

