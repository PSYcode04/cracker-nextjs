'use client'
import { ReactNode } from 'react'
import { AppShell } from '@mantine/core'
import { Sidebar } from '@/app/components/ui/Sidebar'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      padding='md'
      navbar={{
        width: 80,
        breakpoint: 'sm',
      }}
    >
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <main> {children}</main>
      </AppShell.Main>
    </AppShell>
  )
}
