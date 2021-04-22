import './register_pg.css'
import React,{useEffect, useState} from 'react'
import Header from '../components/Header.js'
import ApiGetter from '../util/fetchApi'
import Spinner from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'

const DogRow = (props) => {
    return(
        <div className="dog-row__container">
            <div className="dog-row__image" style={{backgroundImage:`url(${props.dog.img})`}}/>
            <div className="dog-row__txt-container">
                <h2>{props.dog.name}</h2>
                {props.dog.present ? <i className="fas fa-home dog-row__in"></i> : <i className="fas fa-sign-out-alt dog-row__out"></i>}
                
            </div>
            
        </div>
    )
}

const RegisterPage = () => {
   const [loading, setLoading] = useState(true);
   const [loadingErr, setLoadingErr] = useState(false)
   const [errorMsg, setErrorMsg] = useState()
   const [dogList, setDogList] = useState([]);
   const [filteredDogList, setFilteredDogList] = useState([])
    
   let hideKeyboard = (e) => {
            if(e.key === "Enter"){
                e.target.blur()
            }
    }

   let filterDogs = (input) =>{
        let filteredList = dogList.filter(dog => {
            return dog.name.toLowerCase().includes(input.target.value.toLowerCase())
        })

        setFilteredDogList(filteredList)
       
   }
    
    useEffect(() => {
        let api = new ApiGetter("https://api.jsonbin.io/b/607ebd1cf099765deef83599")
        api.makeApiCall(
            (res) => {
                setLoading(false)
                setLoadingErr(false)
                setDogList(res)
                setFilteredDogList(res)
            },
            (err) => {
                setErrorMsg(`${err}`)
                setLoading(false)
                setLoadingErr(true)
            }
        )
    },[])


    return(
        <>
        <div className="body__container-regPage">
        {loading ? <Spinner/> : 
            null
        }
        {loadingErr ? <ErrorMsg errorMsg={errorMsg}/> : null}
        {!dogList.length ? null :
          <div className="register__main-container">
            <div className="register__searchbar">
                <input type="text" className="register__searchbar-input" onChange={filterDogs} onKeyDown={hideKeyboard}/>
                <i className="fas fa-search register__search-icon" ></i>
            </div>
           {!filteredDogList.length ? null : filteredDogList.map(dog => (
                <DogRow dog={dog} key={dog.chipNumber}/>
            )) 
           }
          </div>  
        }
        
        </div>
        </>
    )
}

export default RegisterPage