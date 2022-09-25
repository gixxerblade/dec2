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
      <Header links={links} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
