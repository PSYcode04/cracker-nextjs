'use client'

import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core'
import {
  IconHome,
  IconList,
  IconBrandTrello,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react'
import { MantineLogo } from '@mantinex/mantine-logo'
import classes from './Sidebar.module.css'
import { useRouter, usePathname } from 'next/navigation'
import { Route } from 'next'

interface NavbarLinkProps {
  icon: typeof IconHome
  label: string
  link?: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip
      label={label}
      position='right'
      transitionProps={{ duration: 0 }}
    >
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon
          style={{ width: rem(20), height: rem(20) }}
          stroke={1.5}
        />
      </UnstyledButton>
    </Tooltip>
  )
}

const mockdata = [
  { icon: IconHome, label: 'Home (테스트용)', link: '/home' },
  { icon: IconList, label: 'Table', link: '/table' },
  { icon: IconBrandTrello, label: 'Kanban', link: '/kanban' },
  { icon: IconSettings, label: 'Setting', link: '/setting' },
]

export function Sidebar() {
  const router = useRouter()

  const pathname = usePathname()

  const onClickNavLink = (link: string) => {
    router.replace(link as Route)
  }

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={link.link === pathname}
      onClick={() => onClickNavLink(link.link)}
    />
  ))

  return (
    <nav className={classes.navbar}>
      <Center>
        <MantineLogo
          type='mark'
          size={30}
        />
      </Center>

      <div className={classes.navbarMain}>
        <Stack
          justify='center'
          gap={0}
        >
          {links}
        </Stack>
      </div>

      <Stack
        justify='center'
        gap={0}
      >
        <NavbarLink
          icon={IconSwitchHorizontal}
          label='Change account'
        />
        <NavbarLink
          icon={IconLogout}
          label='Logout'
        />
      </Stack>
    </nav>
  )
}
