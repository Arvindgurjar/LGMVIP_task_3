import React from 'react'

const ShowData = (props) => {
    //show data portion
    return (
        <div className='Show_Data'>
            <div className="container">
                <div className="row ">
                    <div className="col-6 col-md-8 col-lg-6 my-4" style={{ overflow: "hidden" }}>
                        <h5>{props.name}</h5>
                        <p>{props.radio}</p>
                        <p>{props.email}</p>
                        <p>{props.website}</p>
                        {props.skills.map((val, index) => {
                            return <span key={index}>{val}  </span>
                        })}
                    </div>
                    <div className="col-6 col-md-4 col-lg-6">
                        <img src={props.image} alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ShowData