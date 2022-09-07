import React, { useState, useRef, useEffect } from 'react'
import "./map.css"

const GoogleMap: React.FC = () => {
    
    const inputRef = useRef<HTMLInputElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap ] = useState<google.maps.Map>();
    const [ center, setCenter ] = useState<google.maps.LatLngLiteral>({
        lat: 48.856614,
        lng: 2.3522219
    })
    const [ marker, setMarker ] = useState<google.maps.Marker>()

    const [ address, setAddress ] = useState('');

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setAddress(inputRef.current!.value)
    }

    useEffect(() => {
        if (!address) {
            return
        }
        const fetchCoordinates = async (address: string) => {
        const GOOGLE_GEOCODE_API_KEY = 'AIzaSyAdp0_ztYy_GK3Nk0wspYdWiFSBau_-G44';
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_GEOCODE_API_KEY}`) 
        const responseJSON = await response.json();
        const coordinates = responseJSON.results[0]?.geometry.location    
        setCenter(coordinates)
        }
        fetchCoordinates(address);
    },[address])

    useEffect(() => {
        if (mapRef) {
            setMap(new window.google.maps.Map(mapRef.current!, { center: center, zoom: 12 }))
            setMarker(new google.maps.Marker({ position: center, map: map }))
        }
    },[center])


    return (
        <div className="wrapper__outer">
            <div ref={mapRef} className="map__container">
                
            </div>
            <div className="form__container">
                <form onSubmit={onSubmitHandler}>
                    <input ref={inputRef} type="text" placeholder="Add address"/>
                    <button className="formSubmit-button" type="submit">Find Address</button>
                </form>
            </div>
        </div>
    )
}

export default GoogleMap;