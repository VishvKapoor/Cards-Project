import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
    console.log(props.company)
  return (
      <div className="card">
        <div className="top">
          <img src={props.photo} alt="" />
          <button>save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <div className='name'>
            <h3>{props.company}</h3> <span>{props.date}</span>
          </div>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.cost}</h3>
              <p>{props.loc}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
