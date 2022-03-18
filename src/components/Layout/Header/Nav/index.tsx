import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex items-center gap-5">
      <Link href="/">
        <a className="text-heading-4 text-gray-70 font-label font-bold ">
          Beranda
        </a>
      </Link>
      <Link href="/">
        <a className="text-heading-4 text-gray-70 font-label font-bold ">
          Kontak
        </a>
      </Link>
      <Link href="/">
        <a className="text-heading-4 text-gray-70 font-label font-bold ">
          Paket
        </a>
      </Link>
      <Link href="/">
        <a className="text-heading-4 text-gray-70 font-label font-bold ">
          Testimonial
        </a>
      </Link>
    </nav>
  )

};

export default Nav