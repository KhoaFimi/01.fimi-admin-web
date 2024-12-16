'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ComponentProps, FC } from 'react'

type ThemeProviderProps = ComponentProps<typeof NextThemeProvider>

export const ThemeProvider: FC<ThemeProviderProps> = ({
	children,
	...props
}) => {
	return (
		<NextThemeProvider
			attribute='class'
			defaultTheme='light'
			disableTransitionOnChange
			{...props}
		>
			{children}
		</NextThemeProvider>
	)
}
