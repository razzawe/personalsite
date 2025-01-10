import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center pl-0 md:pl-0 -ml-2 md:-ml-4">
            <Link href="#about" className="text-xl font-bold text-gray-100">Rami Al-Azzawe</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{" / home "}</Link>
              <Link href="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{" / projects "}</Link>
              <Link href="/blogs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{" / blogs "}</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
