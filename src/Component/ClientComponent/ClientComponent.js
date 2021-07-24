import React, { Component } from 'react'

export default class ClientComponent extends Component {
    render() {
        return (
            <div style={{backgroundColor:'hsl(210deg 17% 98%)', padding:'100px 0'}} id='client'>
            <div className='container' style={{textAlign:'center'}}>
                <div classname="feature__title" style={{textAlign: 'center',margin:'100px 0'}}>
                    <div classname="feature__text">
                        <span style={{fontSize:'2rem'}}>Our </span>
                        <h2 style={{display:'inline-block'}}>Client</h2>
                    </div>
                    <div style={{height:'1px', width:'10%', backgroundColor:'blue', display:'inline-block'}}></div>
                </div>
                <div>
                    <i class="fa fa-thumbs-up" style={{fontSize:'50px',display:'block',lineHeight:'100px'}}></i>
                    <i style={{display:'block'}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet autem quia, <br />dolorem non saepe molestias dignissimos voluptatum at natus.
                    </i>
                    <img src="./images/user-1.png" style={{borderRadius:'50%', margin:'20px 0'}} />
                    <p>Landing Page User</p>
                    <i class="fa fa-star" style={{color:'yellow'}}>
                    <i class="fa fa-star">
                    <i class="fa fa-star">
                    <i class="fa fa-star">
                    <i class="fa fa-star"></i></i></i></i>
                    </i>
                </div>
                <div style={{fontSize:'40px',display:'flex',justifyContent:'space-around',marginTop:'50px',opacity:'0.5'}}>
                <i class="fab fa-apple"></i>
                <i class="fab fa-spotify"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-facebook"></i>
                </div>
            </div>
            </div>
        )
    }
}
