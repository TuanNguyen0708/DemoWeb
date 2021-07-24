import React, { Component } from 'react'

export default class TeamComponent extends Component {
    render() {
        return (
            <div className='container' style={{padding:'100px 0'}} id='team'>
                <div classname="feature__title" style={{textAlign: 'center', marginBottom:'100px'}}>
                    <div classname="feature__text">
                        <span style={{fontSize:'2rem'}}>Our </span>
                        <h2 style={{display:'inline-block'}}>Team</h2>
                    </div>
                    <div style={{height:'1px', width:'10%', backgroundColor:'blue', display:'inline-block'}}></div>
                </div>
                <div style={{textAlign:'center',display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'22%', border:'1px solid gray', padding:'20px 0'}}>
                        <img src='./images/team/team-1.png' style={{width:'100px', height:'100px', borderRadius:'50%'}} />
                        <h5 style={{marginTop:'40px'}}>SAMMIE R. PROVENCAL</h5>
                        <p style={{marginBottom:'40px'}}>CEO/Founder</p>
                        <div style={{display:'flex', justifyContent:'space-around', padding:'0 40px'}}>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-google"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                    <div style={{width:'22%', border:'1px solid gray', padding:'20px 0'}}>
                        <img src='./images/team/team-2.png' style={{width:'100px', height:'100px', borderRadius:'50%'}} />
                        <h5 style={{marginTop:'40px'}}>EDTH E. WHEELER</h5>
                        <p style={{marginBottom:'40px'}}>CTO/Co-Founder</p>
                        <div style={{display:'flex', justifyContent:'space-around', padding:'0 40px'}}>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-google"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                    <div style={{width:'22%', border:'1px solid gray', padding:'20px 0'}}>
                        <img src='./images/team/team-3.png' style={{width:'100px', height:'100px', borderRadius:'50%'}} />
                        <h5 style={{marginTop:'40px'}}>PAULINE T. ROACH</h5>
                        <p style={{marginBottom:'40px'}}>Web Designer</p>
                        <div style={{display:'flex', justifyContent:'space-around', padding:'0 40px'}}>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-google"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                    <div style={{width:'22%', border:'1px solid gray', padding:'20px 0'}}>
                        <img src='./images/team/team-4.png' style={{width:'100px', height:'100px', borderRadius:'50%'}} />
                        <h5 style={{marginTop:'40px'}}>TUAN NGUYEN</h5>
                        <p style={{marginBottom:'40px'}}>Web Designer</p>
                        <div style={{display:'flex', justifyContent:'space-around', padding:'0 40px'}}>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-google"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
