import React from 'react'
import { useParams } from 'react-router-dom'
import './dogProfile_pg.css'

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
    let { id } = useParams();

        window.scrollTo(0,0)

    

    let dog = JSON.parse(localStorage.getItem('dogsList')).find((dog) => {
        return dog.chipNumber === id
    })
  
    return (
        <div className="dog-profile__main-cont">
            <div className="dog-profile__img" style={{ backgroundImage: `url(${dog.img})` }} />

            <div className="dog-profile__dog-cont">
                <div className="dog-profile__name-outer-cont">
                    <div className="dog-profile__name-inner-cont">
                        <h2 className="dog-profile__name">{dog.name}</h2>
                        <p>{dog.breed}</p>
                        <div className="dog-profile__age-gen-box">
                            <div className="dog-profile__small-cont">
                                <h2 className="dog-profile__age">{dog.age}</h2>
                                <p className="dog-profile__age-sub">y.o</p>
                            </div>
                            <GenderBox gender={dog.sex} />

                        </div>
                    </div>

                </div>



                <div className="dog-profile__owner-cont">
                    <h1 className="dog-profile__owner-txt">OWNER</h1>
                    <h2 className="dog-profile__owner-txt">{`${dog.owner.name} ${dog.owner.lastName} `}</h2>
                    <h3 className="dog-profile__owner-txt"><i className="fas fa-phone"></i> {dog.owner.phoneNumber}</h3>
                    <div className="dog-profile__nrbox">
                        <p>chipnr:</p>
                        <h2>{dog.chipNumber}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogProfile
