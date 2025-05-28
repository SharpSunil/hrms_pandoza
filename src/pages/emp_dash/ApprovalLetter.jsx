import React from "react";
import "./Approval.scss"
const ApprovalLetter = () => {
    const data=[
        {
            date:" 27 May 2024",
            subject:"Approval Request For Budget Allocation for Technical Equipment.",
            username:"John John",
            approvarname:"Oliver Smith",

        }
    ]
  return (
    <>
      <div className="approvalletter-parent parent">
        <div className="approvalletter-cont cont">
          {/* <h2>Approval letter</h2> */}
          <div className="letter-box">
            <div className="left-form">
            <form action="">
             
              <input type="date" />
              
              <textarea rows={2} columns={3} placeholder="Enter Subject"></textarea>
              <input type="text" placeholder="" />
             
            </form>
            </div>
            <div className="right-letter">
              
               {data.map((item,index)=>(
                 <>
                    <div className="date" key={index}>{item.date}</div>
                    <p className="main-info">To, <br></br>Prajakta Marwaha <br></br> Director<br></br>Pandoza Solutions Pvt Ltd <br></br>2014 - 2016, 10 Biz Park, Viman Nagar,<br></br>Pune, Maharashtra 411014
                        
                    </p>
                    <p className="subject">Subject:{item.subject}</p>
                    <div className="sic-editor-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora recusandae reprehenderit fugiat facilis voluptatem nobis unde optio perspiciatis, odit exercitationem! Unde, optio id? Excepturi, deserunt maiores magnam atque eveniet sed hic quo dolorem nemo, ipsa vero repellendus. Tempore asperiores id reprehenderit sequi iure doloremque pariatur corrupti facilis obcaecati incidunt blanditiis optio, accusantium magni tenetur accusamus a reiciendis harum fugiat dolorem sapiente! Rem esse provident mollitia expedita nobis, est consequuntur magni, ab modi et, eos voluptatum similique. Accusamus adipisci fuga, est modi quidem ducimus, quam sunt facilis, suscipit dignissimos cum dolorum maxime voluptas accusantium sit? Eaque hic ratione fugiat necessitatibus.</div>


                    <div className="user">Your Sincerely <span>{item.username}</span> </div>
                    <div className="approvar">To Be Approved By<span>{item.approvarname}</span></div>
                    <div className="finance">To Be Approved By<span>Finance Department</span></div>
                    </>
                ))}
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovalLetter;
