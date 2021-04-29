import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './dogProfile_pg.css'
import ApiGetter from '../util/fetchApi.js'
import Spinner from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'


const GenderBox = (props) => {
    if (props.gender.toLowerCase() === "male") {
        return <div className="dog-profile__small-cont">
            <i className="fas fa-mars dog-profile__gender" />
        </div>
    } else if (props.gender.toLowerCase() === 'female') {
        return <div className="dog-profile__small-cont">
            <i className="fas fa-venus dog-profile__gender" />
        </div>
    } else {
        return <div className="dog-profile__small-cont">
            <i className="fas fa-venus-mars dog-profile__gender" />
        </div>
    }
}

const DogProfile = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    function storageAvailable(type) {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    let { id } = useParams();

    window.scrollTo(0, 0)
    let dog = useRef(null)
    let errMsg = useRef(null)

    useEffect(() => {
        if (storageAvailable('localStorage')) {
            dog.current = JSON.parse(localStorage.getItem('dogsList')).find((dog) => {
                return dog.chipNumber === id
            })
            setLoading(false)
        } else {
            const abort = new AbortController()
            let api = new ApiGetter("https://api.jsonbin.io/b/607ebd1cf099765deef83599", abort.signal)
            api.makeApiCall(
                (res) => {
                    dog.current = res.find(dog => {
                        return dog.chipNumber === `${id}`
                    })
                    setLoading(false)
                    return () => abort.abort()
                },
                (err) => {
                    errMsg.current = `${err}`
                    setError(true)
                    setLoading(false)
                    
                }
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return (
        <>
            {loading ? <Spinner></Spinner> : error ? <ErrorMsg forwardRef={errMsg}></ErrorMsg> :

                <div className="dog-profile__main-cont">
                    <div className="dog-profile__img" style={{ backgroundImage: `url(${dog.current.img})` }} />

                    <div className="dog-profile__dog-cont">
                        <div className="dog-profile__name-outer-cont">
                            <div className="dog-profile__name-inner-cont">
                                <h2 className="dog-profile__name">{dog.current.name}</h2>
                                <p>{dog.breed}</p>
                                <div className="dog-profile__age-gen-box">
                                    <div className="dog-profile__small-cont">
                                        <h2 className="dog-profile__age">{dog.current.age}</h2>
                                        <p className="dog-profile__age-sub">y.o</p>
                                    </div>
                                    <GenderBox gender={dog.current.sex} />

                                </div>
                            </div>

                        </div>



                        <div className="dog-profile__owner-cont">
                            <h1 className="dog-profile__owner-txt">OWNER</h1>
                            <h2 className="dog-profile__owner-txt">{`${dog.current.owner.name} ${dog.current.owner.lastName} `}</h2>
                            <h3 className="dog-profile__owner-txt"><i className="fas fa-phone"></i> {dog.current.owner.phoneNumber}</h3>
                            <div className="dog-profile__nrbox">
                                <p>chipnr:</p>
                                <h2>{dog.current.chipNumber}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DogProfile
