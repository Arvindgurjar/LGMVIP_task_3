import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
const Form = (props) => {
    const { formState: { errors }, reset, handleSubmit, register } = useForm()
    useEffect(() => {
        reset();
    }, [props.formSubmit])
    //form and field of form
    return (
        <div>
            <form name="form" className='form-group' onSubmit={handleSubmit(props.formSubmit)}>
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" className='form-control' placeholder="Enter your Name.."  {...register("name", {
                    required: "This is required",
                    pattern: {
                        value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                        message: "Invalid name"
                    },

                    maxLength: {
                        value: 20,
                        message: "Name must be under 20"
                    },
                    minLength: {
                        value: 5,
                        message: "Name must be 5 to 20"
                    }

                })} />
                {errors.name && (<div className='text-danger'>{errors.name.message}</div>)}

                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" className='form-control' placeholder="Enter your Email" {...register("email", {
                    required: "This is required",
                    pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Invalid Email"
                    }
                })} />
                {errors.email && (<div className='text-danger'>{errors.email.message}</div>)}
                <label htmlFor="website" className='form-label'>Number</label>
                <input type="text" id="website" className='form-control' placeholder="Enter your Number" {...register("website", {
                    required: "This is required",
                    pattern: {
                        value: /^(0|[1-9][0-9]*)$/,
                        message: "invalid Number"
                    },
                    minLength : {
                        value:10,
                        message: "invalid Must be 10"
                    },
                    maxLength: {
                        value:10,
                        message: "invalid Must be 10"
                    }
                })} />
                {errors.website && (<div className='text-danger'>{errors.website.message}</div>)}
                <label htmlFor="image" className='form-label'>image link</label>
                <input type="url" id="image" className='form-control' placeholder="Enter your image link" {...register("image", {
                    required: "This is required",
                    pattern: {
                        value: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
                        message: "invalid URL"
                    }
                })} />
                {errors.image && (<div className='text-danger'>{errors.image.message}</div>)}
                <label htmlFor="radio" className='form-label'>Gender</label>
                <div id="radio">
                    <div className="form-check form-check-inline" >
                        <input className="form-check-input" id="inlineRadio1" type="radio" name="gender" value="Male" {...register("radio", {
                            required: "This is required",
                        })} />
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" id="inlineRadio2" type="radio" name="gender" value="Female" {...register("radio", {
                            required: "This is required",
                        })} />
                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                    </div>
                    {errors.radio && (<div className='text-danger'>{errors.radio.message}</div>)}
                </div>

                <label htmlFor="skills" className='form-label'>Skills</label>
                <div id="skills" >
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" id="java" type="checkbox" value="Java" {...register("checkbox", {
                            required: "This is required",
                        })} />
                        <label className="form-check-label" htmlFor="java">JAVA</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" id="html" type="checkbox" value="HTML" {...register("checkbox", {
                            required: "This is required",
                        })} />
                        <label className="form-check-label" htmlFor="html">HTML</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" id="css" type="checkbox" value="CSS" {...register("checkbox", {
                            required: "This is required",
                        })} />
                        <label className="form-check-label" htmlFor="css">CSS</label>
                    </div>
                    {errors.checkbox && (<div className='text-danger'>{errors.checkbox.message}</div>)}
                </div>
                <div className='my-4'>
                    <button type="submit" className='btn btn-primary px-3 mx-3'>Enroll Student</button>
                    <button type="reset" className='btn btn-danger mx-3'>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Form