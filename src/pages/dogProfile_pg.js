import React from 'react'
import './dogProfile_pg.css'

const GenderBox  = (props) => {
   if(props.gender.toLowerCase() == "male"){
       return  <div className="dog-profile__small-cont">
       <i className="fas fa-mars dog-profile__gender"/>
        </div>
   }else if (props.gender.toLowerCase() == 'female'){
       return  <div className="dog-profile__small-cont">
       <i className="fas fa-venus dog-profile__gender"/>
   </div>
   }else{
       return  <div className="dog-profile__small-cont">
       <i className="fas fa-venus-mars dog-profile__gender"/>
   </div>
   }
}

const DogProfile = (props) => {
    return(
        <>
        <div className="dog-profile__main-cont">
            <div className="dog-profile__img" style={{ backgroundImage:`${props.dog.img}` }}/>

            <div className="dog-profile__dog-cont">
                <div className="dog-profile__name-outer-cont">
                    <div className="dog-profile__name-inner-cont">
                        <h2 className="dog-profile__name">{props.dog.name}</h2>
                        <p>{props.dog.breed}</p>
                        <div className="dog-profile__age-gen-box">
                            <div className="dog-profile__small-cont">
                                <h2 className="dog-profile__age">{props.dog.age}</h2>
                                <p className="dog-profile__age-sub">y.o</p>
                            </div>
                            <GenderBox gender= {props.dog.sex}/>
                            
                        </div>
                    </div>
                    
                </div>

                

                <div className="dog-profile__owner-cont">
                    <h1 className="dog-profile__owner-txt">OWNER</h1>
                    <h2 className="dog-profile__owner-txt">{`${props.dog.owner.name} ${props.dog.owner.lastName} `}</h2>
                    <h3 className="dog-profile__owner-txt"><i className="fas fa-phone"></i> {props.dog.owner.phoneNumber}</h3>
                    <div className="dog-profile__nrbox">
                        <p>chipnr:</p>
                        <h2>{props.dog.chipNumber}</h2>
                    </div>
                </div>


               
               

             


            </div>
        
           

        </div>
        </>
    )
}

export default DogProfile

/*<i className="fas fa-mars dog-profile__gender"/>
    <div className="dog-profile__dog-cont">
               
                <div className="dog-profile__firstrow">
                 

                   
                </div>

               

                <div className="dog-profile__secondrow">
                    <div className="dog-profile__align-row">
                        <h2 className="dog-profile__txt">BREED: something</h2>
                        <h2 className="dog-profile__txt">CHIP: dasdvasdvv</h2>
                    </div>
                    
                </div>
                
            
              
            </div>

            

            <div className="dog-profile__owner-cont">
                <h1 className="dog-profile__owner-txt">OWNER</h1>
                <h2 className="dog-profile__owner-txt">Erik johansson</h2>
                <h3 className="dog-profile__owner-txt"><i className="fas fa-phone"></i> 0706567890</h3>
            </div>
*/ 