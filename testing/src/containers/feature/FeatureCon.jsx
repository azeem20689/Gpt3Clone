import React from 'react'
import './featureCon.css';
// import Feature from '../../components/feature/Feature';

const Feature=(props)=>{
  return(
    <div className="featureCard">
      <h3 className='featureCardTitle'>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}
const featureConData = [
  {
    title : 'Improving end distrusts instantly ',
    text : 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title : 'Become the tended active',
    text : 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title : 'Message or am nothing',
    text : 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title : 'Really boy law county',
    text : 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  }
];

function FeatureCon() {
  return (
    <div className='featureCon'>
      <div className="featureLeft">
        <h1 className="myFeatureIntro gradient__text">
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="featureRight">
        {
          featureConData.map(data=>(
            <Feature title={data.title} text={data.text}/>
          ))
        }
      </div>
    </div>




    // <div className='featureCon'>
    //   <div className="left">
    //     <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
    //     <p>Request Early Access to Get Started</p>
    //   </div>
    //   <div className="right">
    //     {featureConData.map((data, index) =>(
    //       <div className='right_child' key={index}>
    //         <div className='right_subchild_title'><h5>{data.title}</h5></div>
    //         <div className='right_subchild_text'>{data.text}</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    
  )
}

export default FeatureCon
