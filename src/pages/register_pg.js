import './register_pg.css'
import { Link, useRouteMatch, Route, Switch } from 'react-router-dom'
import React, { useEffect, useState, useRef } from 'react'
import ApiGetter from '../util/fetchApi.js'
import Spinner from '../components/Spinner.js'
import ErrorMsg from '../components/ErrorMsg.js'
import DogProfile from './dogProfile_pg.js'

const DogRow = (props) => {
    return (
        <>
            <Link className="dog-row__container" to={`${props.link}/${props.dog.chipNumber}`}>
                <div className="dog-row__image" style={{ backgroundImage: `url(${props.dog.img})` }} />
                <div className="dog-row__txt-container">
                    <h2>{props.dog.name}</h2>
                    {props.dog.present ? <i className="fas fa-home dog-row__in"></i> : <i className="fas fa-sign-out-alt dog-row__out"></i>}
                </div>
            </Link>

        </>

    )
}

const RegisterPage = () => {
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

    const { url, path } = useRouteMatch();
    const [loading, setLoading] = useState(true);
    const [loadingErr, setLoadingErr] = useState(false)
    let errorMsg = useRef(null)
    const abort = new AbortController()
    let api = new ApiGetter("https://api.jsonbin.io/b/607ebd1cf099765deef83599", abort.signal)

    const [filteredDogList, setFilteredDogList] = useState([])


    let hideKeyboard = (e) => {
        if (e.key === "Enter") {
            e.target.blur()
        }
    }

    useEffect(() => {
        if (storageAvailable('localStorage')) {
            if (localStorage.getItem('dogsList') === null) {

                api.makeApiCall(
                    (res) => {
                        setLoading(false)

                        localStorage.setItem('dogsList', JSON.stringify(res))

                        setFilteredDogList(res)
                    },
                    (err) => {
                        errorMsg.current = `${err}`
                        setLoading(false)
                        setLoadingErr(true)
                    }
                )
                return () => abort.abort()
            } else {
                try {
                    setFilteredDogList(JSON.parse(localStorage.getItem('dogsList')))
                    setLoading(false)
                } catch (err) {
                    window.localStorage.removeItem('dogsList')
                    errorMsg.current = `${err}`
                    setLoading(false)
                    setLoadingErr(true)
                }

            }

        } else {
            api.makeApiCall(
                (res) => {
                    setLoading(false)
                    setFilteredDogList(res)
                },
                (err) => {
                    errorMsg.current = `${err}`
                    setLoading(false)
                    setLoadingErr(true)
                }
            )

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let filterDogs = (input) => {
        if (storageAvailable('localStorage')) {
            let list = JSON.parse(localStorage.getItem('dogsList'))
            let filteredList = list.filter(dog => {
                return dog.name.toLowerCase().includes(input.target.value.toLowerCase())
            })
            setFilteredDogList(filteredList)

        } else {
            api.makeApiCall(
                (res) => {
                    setFilteredDogList(res.filter(dog => {
                        return dog.name.toLowerCase().includes(input.target.value.toLowerCase())
                    }))
                },
                (err) => {
                    errorMsg.current = `${err}`
                    setLoadingErr(true)
                }
            )

        }


    }

    return (
        <Switch>
            <Route path={`${path}/:id`}>
                <DogProfile></DogProfile>
            </Route>
            <Route exact path={`${url}/`}>
                {loading ? <Spinner /> :
                    null
                }

                <div className="body__container-regPage">
                    {loadingErr ? <ErrorMsg forwardRef={errorMsg} /> : null}

                    <div className="register__main-container">
                        <div className="register__searchbar">
                            <input type="text" className="register__searchbar-input" onChange={filterDogs} onKeyDown={hideKeyboard} />
                            <i className="fas fa-search register__search-icon" ></i>
                        </div>

                        {!filteredDogList.length ? null : filteredDogList.map(dog => {
                            return <DogRow dog={dog} key={dog.chipNumber} link={url} />
                        })
                        }
                    </div>


                </div>

            </Route>

        </Switch>


    )
}

export default RegisterPage