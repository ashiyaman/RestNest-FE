import useFetch from "../useFetch"

const Hotels = () => {
    const { data, loading, error } = useFetch('https://rest-nest-be.vercel.app/hotels')

    const handleDelete = async (hotelId) => {
        try{
            const response = await fetch(`https://rest-nest-be.vercel.app/hotels/${hotelId}`,
                {method: 'DELETE'}
            )
            if(!response.ok){
                throw 'Unable to delete Hotel.'
            }
            const data = await response.json()
            window.location.reload()
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h2>All Hotels</h2>
            <ul>
                {data?.map(hotel => <li key={hotel._id}>{hotel.name}<button onClick={() => handleDelete(hotel._id)}>Delete</button></li>)}
            </ul>
        </div>
    )
}

export default Hotels