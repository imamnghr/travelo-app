import { ReactNode } from 'react'

import Header from './Header'

interface Props {
  children: ReactNode
  noFooter?: boolean
}

const Layout = ({ children, noFooter = false }: Props) => {
  return (
    <>
      <Header />
      {children}
      <footer></footer>
    </>
  )
}

export default Layout
