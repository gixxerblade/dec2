import { AppShell } from '@mantine/core';
import { ReactNode, FC } from 'react';
import { Footer } from './Footer';
import { HeaderRaw as Header } from './Header/HeaderMenu';
import { links } from './Header/links';
import { HeaderInfo } from './HeaderInfo';

interface LayoutProps {
  title?: string,
  content?: string,
  children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children, title, content }: LayoutProps) => {
  return (
    <>
      <HeaderInfo title={title} content={content} />
      <AppShell
        header={<Header links={links} />}
        footer={<Footer />}
      >
      <main>{children}</main>
      </AppShell>
    </>
  )
}
