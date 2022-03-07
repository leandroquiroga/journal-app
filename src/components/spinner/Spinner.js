import React from 'react'

export const Spinner = (props) => {

  const { textContent, flexStyle } = props;
  return (
    <div className={ flexStyle }>
      <div className="sk-chase mx-1">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
      </div>

      <small className='mx-1'>{ textContent }</small>
    </div>
  )
}
