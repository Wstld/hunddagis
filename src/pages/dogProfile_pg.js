import React from 'react'
import './dogProfile_pg.css'

const DogProfile = (props) => {
    return(
        <>
        <div className="dog-profile__main-cont">
            <div className="dog-profile__dog-cont">
                <div className="dog-profile__firstrow">
                    <h3>7 y.o</h3>
                    <div className="dog-profile__img"/>
                    <i className="fas fa-mars dog-profile__gender"/>
                </div>
                <div className="dog-profile__secondrow">
                    <h2 className="dog-profile__name">Molly</h2>
                </div>
                <div className="dog-profile__thirdrow">
                    <h2>Breed: something</h2>
                    <h2>Chipnr: dasdvasdvv</h2>
                </div>
            </div>
            <div className="dog-profile__owner-cont">
                <h1>OWNER</h1>
                <h2>Erik johansson</h2>
                <h3><i className="fas fa-phone"></i> 0706567890</h3>
            </div>

        </div>
        </>
    )
}

export default DogProfile