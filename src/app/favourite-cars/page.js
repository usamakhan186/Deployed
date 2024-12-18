import React from 'react'
import FavoritesSection from './components/herosection'
import AppBar from '@/components/AppBar2'
import Footer from '@/components/HomePage/Footer'

const page = () => {


    return (
        <div>
            <AppBar />
            <FavoritesSection />
            <Footer />

        </div>
    )
}

export default page