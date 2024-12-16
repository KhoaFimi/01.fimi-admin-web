import { expect, test } from 'vitest'

import { cn } from '@/lib/utils'

test('Page', () => {
	expect(cn('text-white bg-primary', 'bg-secondary')).toBe(
		'text-white bg-secondary'
	)
})
