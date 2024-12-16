import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import { QueryProvider } from '@/components/providers/query-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
	title: 'FIMI',
	description: 'FIMI admin web app'
}

const font = Inter({
	subsets: ['latin', 'vietnamese']
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={cn(font.className, 'antialiased')}>
				<ThemeProvider>
					<QueryProvider>{children}</QueryProvider>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
