import CatCard from '../components/cards/CatCard/CatCard'
import { mockCatCardProps } from '../components/cards/CatCard/CatCard.mock'
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import Sidebar from '../components/layouts/sidebar/Sidebar'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
    return (
        <div>
            <h1>Welcome Manu!</h1>
            <CatCard {...mockCatCardProps.base} />
        </div>
    )
}

export default Home

Home.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <Sidebar />
            {page}
        </PrimaryLayout>
    )
}
