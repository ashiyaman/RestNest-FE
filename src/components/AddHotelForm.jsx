import { useState } from "react"

const AddHotelForm = () => {
    const [formData, setFormData] = useState({
        name: '', 
        category : '',  
        location: '', 
        rating: '',
        website: '',
        phoneNumber: '',
        checkInTime: '',
        checkOutTime: '',
        amenities: '',
        priceRange: '',
        reservationsNeeded: false,
        isParkingAvailable: false,
        isWifiAvailable: false,
        isPoolAvailable: false,
        isSpaAvailable: false,
        isRestaurantAvailable: false,
        photos: ''
    })

    const changeHandler = (event) => {
        const {name, value, type, checked} = event.target
        console.log(name, value)
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: (type === 'checkbox') ? checked : (name === 'rating') ? parseInt(value) : value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch('https://rest-nest-be.vercel.app/hotels/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(formData)
        })
        if(!response.ok){
            throw 'Failed to Add Hotel.'
        }
        const data = await response.json()
        console.log('Hotel Added.', data)
        window.location.reload()
    }

    return (
        <div>
            <h2>Add Hotel</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label><br/>
                <input name='name' type='text' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='category'>Category:</label><br/>
                <select name='category' onChange={changeHandler}>
                    <option value='Budget'>Budget</option>
                    <option value='Mid-Range'>Mid-Range</option>
                    <option value='Luxury'>Luxury</option>
                    <option value='Boutique'>Boutique</option>
                    <option value='Resort'>Resort</option>
                    <option value='Other'>Other</option>
                </select>
                <br/>
                <br/>
                <label htmlFor='location'>Location:</label><br/>
                <input name='location' type='text' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='rating'>Rating:</label><br/>
                <input name='rating' type='number' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='website'>Website:</label><br/>
                <input name='website' type='text' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='phoneNumber'>Phone Number:</label><br/>
                <input name='phoneNumber' type='text' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='checkInTime'>Check-In Time:</label><br/>
                <input name='checkInTime' type='text' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='checkOutTime'>Check-Out Time:</label><br/>
                <input name='checkOutTime' type='text' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='amenities'>Amenities:</label><br/>
                <input name='amenities' type='text' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='priceRange'>Price Range:</label><br/>
                <select name='priceRange' onChange={changeHandler}>
                    <option value='$$ (11-30)'>(11-30)</option>
                    <option value='$$$ (31-60)'>(31-60)</option>
                    <option value='$$$$ (61+)'>(61+)</option>
                    <option value='Other'>Other</option>
                </select>
                <br/>
                <br/>
                <label htmlFor='isReservationNeeded'>Reservetion Needed:</label>
                <input name='isReservationNeeded' type='checkbox' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='isParkingAvailable'>Parking Available:</label>
                <input name='isParkingAvailable' type='checkbox' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='isWifiAvailable'>Wifi Available:</label>
                <input name='isWifiAvailable' type='checkbox' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='isPoolAvailable'>Pool Available:</label>
                <input name='isPoolAvailable' type='checkbox' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='isSpaAvailable'>Spa Available:</label>
                <input name='isSpaAvailable' type='checkbox' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='isRestaurantAvailable'>Restaurant Available:</label>
                <input name='isRestaurantAvailable' type='checkbox' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='photos'>Photos:</label><br/>
                <input name='photos' type='text' onChange={changeHandler}/>
                <br/>
                <br/>
                <input type='Submit' />
            </form>
        </div>
    )    
}

export default AddHotelForm