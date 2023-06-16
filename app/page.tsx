import AboutSectionOne from '@/components/About/AboutSectionOne'
import AboutSectionTwo from '@/components/About/AboutSectionTwo'
import Stack from '@/components/Brands'
import ScrollUp from '@/components/Common/ScrollUp'
import Values from '@/components/Values'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <ScrollUp />
            <Hero />
            <Values />
            <Stack />
            <AboutSectionOne />
            <AboutSectionTwo />
            <Team />
        </>
    )
}
