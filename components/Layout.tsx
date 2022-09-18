import { ReactNode, FC } from 'react';
import { HeaderMenu, HeaderSearchProps } from './Header/HeaderMenu';
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
      <body>
        <HeaderMenu links={links} />
        <main>{children}</main>
        <footer></footer>
      </body>
    </>
  )
}
