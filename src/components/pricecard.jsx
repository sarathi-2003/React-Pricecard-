import React from 'react'
import "../App.css"

const Pricecart = (props) => {

  return (
    <div className='col-md-5' style={{width:"240px",backgroundColor:"white",margin:"30px"}}>
      <div>
         
        <h4 className="card-title text-muted text-uppercase text-center">{props.value.plan}</h4>
        <h4 className="card-price text-center">{props.value.price}<span className="period">/month</span></h4>
      </div>
      <hr />
      <div>
        <ul className="fa-ul">
          <li className={props.value.userEnabler && props.value.highlight ? "" : ""}><span className="fa-li" ><i className={props.value.userEnabler ? "fa fa-check" : "fa fa-times"}></i></span>{props.value.user}</li>
        </ul>
      </div>
      <ul className="fa-ul">
        <li className={props.value.storageEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.value.storageEnabler ? "fa fa-check" : "fa fa-times"}></i></span>{props.value.storage}</li>
      </ul>
      <ul className="fa-ul">
        <li className={props.value.publicProjectsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.value.publicProjectsEnabler ? "fa fa-check" : "fa fa-times"}></i></span>{props.value.publicProjects}</li>
      </ul>
      <ul className="fa-ul">
      <li className={props.value.communityAccessEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.communityAccessEnabler? "fa fa-check": "fa fa-times"}></i></span>{props.value.communityAccess}</li>
      </ul>
      <ul className="fa-ul">
        <li className={props.value.privateProjectsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.value.privateProjectsEnabler ? "fa fa-check" : "fa fa-times"}></i></span>{props.value.privateProjects}</li>
      </ul>
      <ul className="fa-ul">
        <li className={props.value.phoneSupportEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.value.phoneSupportEnabler ? "fa fa-check" : "fa fa-times"}></i></span>{props.value.phoneSupport}</li>
      </ul>
      <ul className="fa-ul">
        <li className={props.value.subDomainEnabler && props.value.subDomainHighlight ? "" : "text-muted"}><span className="fa-li"><i className={props.value.subDomainEnabler ? "fa fa-check" : "fa fa-times"}></i></span>{props.value.subDomain}</li>
      </ul>
      <ul className="fa-ul">
        <li className={props.value.statusPlanEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.value.statusPlanEnabler ? "fa fa-check" : "fa fa-times"}></i></span>{props.value.statusPlan}</li>
      </ul>
      <div className="d-grid">
        <a href="javascript(void)" className="btn btn-primary text-uppercase">BUTTON</a>
      </div>
    </div>
  )
}

export default Pricecart;