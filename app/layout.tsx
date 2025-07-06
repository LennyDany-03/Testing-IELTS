import "./globals.css"

export const metadata = {
  title: "IELTS AI Coach",
  description: "Get AI-powered feedback on your IELTS essays.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
