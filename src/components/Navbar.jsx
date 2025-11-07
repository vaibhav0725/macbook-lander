import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt='apple-logo'/>
            <div className='flex-center gap-3'>
                <button>
                    <img src="/search.svg" alt='search-icon'/>
                </button>
                <button>
                    <img src="/cart.svg" alt='search-icon'/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar