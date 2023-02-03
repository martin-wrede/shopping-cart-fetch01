import React, { useEffect, useState } from "react"

const Context = React.createContext()


function ContextProvider(props){
    const [allPhotos, setAllPhotos] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json" 

    useEffect(() =>
    {
        fetch(url)
        .then(resp => resp.json())
        .then(data =>
           {  
            console.log(data)
            setAllPhotos(data)
            }
            )
    ,[]}
    )

   

    return(
        <Context.Provider value={{allPhotos}} >
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}