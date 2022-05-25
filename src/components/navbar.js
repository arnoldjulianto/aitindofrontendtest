// Import Disclosure component from headlessui
import { Disclosure} from '@headlessui/react'
// Import MenuIcon and XIcon component from headlessui
import { MenuIcon, XIcon } from '@heroicons/react/outline'
// Import Icon Lihat Produk from ../assets/icon
import iconLihatProduk from '../assets/icon/Shape 1.png'
// Import Icon Tentang OBH Produk from ../assets/icon
import iconTentangOBH from '../assets/icon/Shape 2.png'
// Import Icon Kontak from ../assets/icon
import iconKontak from '../assets/icon/Shape 3.png'

const Navbar = () => {
    // Declaration of an array which will be the names of the navbar's menu
    const navigation = [
        { name: 'LIHAT PRODUK', href: '#', current: false },
        { name: 'TENTANG OBH COMBI', href: '#', current: false },
        { name: 'KONTAK', href: '#', current: false },
    ]

    //Declaration a function to check the navbar icon before it is rendered 
    const  classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    return(
        //The Navbar wrapper, using disclosure
        <Disclosure as="nav" className="bg-white-800  navbar">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                {/* The Mobile menu button wrapper, only show in 640px */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* The Mobile menu button wrapper, only show when the screen maximum width is 640px */}

                {/* The Navbar menu wrapper, only show when the screen minimum width is 641px */}
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                  <div className="hidden sm:block sm:ml-6 flex-1">
                    <div className="flex-1 flex flex-row space-x-4 justify-end pr-[0px] pt-[50px] navbar">
                      {navigation.map((item, index) => (
                          <a
                            key={item.name.toUpperCase()}
                            href={item.href}
                            className='bg-white text-primary text-sm px-3 py-2 rounded-md font-medium hover:bg-gray-300 hover:text-base font-lato font-[500] tracking-wide flex flex-row items-center justify-center'
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <img src={index == 0 ? iconLihatProduk : index == 1 ? iconTentangOBH : iconKontak } className={
                              classNames(
                                index == 0 ? 'navbar-icon1' : index == 1 ? 'navbar-icon2' : 'navbar-icon3',
                                'mr-2'
                              )
                            }  />
                            {item.name}
                          </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* The Navbar menu wrapper, only show when the screen minimum width is 641px */}
              </div>
            </div>
            
            
            {/* The Mobile Navbar menu wrapper, only show when the screen maximum width is 640px */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                     className='bg-white text-primary text-sm px-3 py-2 rounded-md font-medium hover:bg-gray-300 hover:text-base font-lato font-[500] tracking-wide flex flex-row items-center justify-flex-start'
                     aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            {/* The Mobile Navbar menu wrapper, only show when the screen maximum width is 640px */}
          </>
        )}
      </Disclosure>
      //The Navbar wrapper, using disclosure
    )
}

export default Navbar;