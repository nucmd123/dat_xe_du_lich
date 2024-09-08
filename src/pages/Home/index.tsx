import BookCar from '../../components/BookCar'
import Header from '../../components/Header'

function Home() {
    return (
        <div>
            <Header />
            <div className="bg-[url('/src/assets/Background-web-4.png')]">
                <div className="container mx-auto mt-10">
                    <div className="py-5">
                        <BookCar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
