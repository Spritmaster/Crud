import React from 'react'

const CreateForm = ({labelText,labelFor,inputType,inputId,defaultValue}) => {
  return (
    <>
        <div className="form-control ">
            <label 
            htmlFor={labelFor} 
            className="text-xl  mb-2 text-[#fff] sm:text-2xl sm:font-semibold lg:text-3xl lg:font-bold">
            {labelText}
            </label>
            <input
              className=" input max-w-[300px] sm:max-w-[330px] lg:max-w-[400px] input-bordered border-[#000] placeholder:text-[#000]  text-xl sm:font-semibold sm:text-2xl sm:font-bold"
              type={inputType}
              id={inputId}
              defaultValue={defaultValue}
              required
            />
          </div>
    </>
  )
}

export default CreateForm