import useFetch from "../useFetch"

const Hotels = () => {
    const { data, loading, error } = useFetch('https://rest-nest-be.vercel.app/hotels')
    return (
        <div>
            <h2>All Hotels</h2>
            <ul>
                {data?.map(hotel => <li key={hotel._id}>{hotel.name}</li>)}
            </ul>
        </div>
    )
}

export default Hotels