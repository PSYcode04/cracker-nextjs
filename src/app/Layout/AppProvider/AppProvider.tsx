'use client'
import { ReactNode } from 'react'
import { AppLayout } from '@/app/Layout/AppLayout/AppLayout'
import {
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from '@mantine/core'

const theme = mergeMantineTheme(DEFAULT_THEME, createTheme({}))

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <AppLayout>{children}</AppLayout>
    </MantineProvider>
  )
}
