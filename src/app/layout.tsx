import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/sonner'
// import { BillingProvider } from '@/providers/billing-provider'

const font = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lazybox.',
  description: 'Automate Your Work With Lazybox.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <BillingProvider> */}
              <ModalProvider>
                {children}
                <Toaster />
              </ModalProvider>
            {/* </BillingProvider> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}