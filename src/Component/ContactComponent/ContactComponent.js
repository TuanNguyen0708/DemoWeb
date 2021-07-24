import React, { Component } from 'react'

export default class ContactComponent extends Component {
    render() {
        return (
            <div style={{ backgroundColor:'hsl(210deg 17% 98%)'}}>
            <div className='container' style={{display:'flex', padding:'100px 0'}}>
                 <div style={{width:'20%'}}>
                     <h5 style={{marginBottom:'20px'}}>HELP CENTER</h5>
                     <p>Accounting</p>
                     <p>Bling</p>
                     <p>General Question</p>
                 </div>
                 <div style={{width:'20%'}}>
                     <h5 style={{marginBottom:'20px'}}>ABOUT LINEXON</h5>
                     <p>About Us</p>
                     <p>Press</p>
                     <p>Job Opening</p>
                     <p>Team</p>
                     <p>Privacy</p>
                 </div>
                 <div style={{width:'20%'}}>
                     <h5 style={{marginBottom:'20px'}}>RESAURSER</h5>
                     <p>Blog</p>
                     <p>Help Center</p>
                     <p>Acedemy</p>
                     <p>Video Terms</p>
                     <p>Monitoring Grader</p>
                     <p>Lixeon API</p>
                 </div>
                 <div style={{width:'20%'}}>
                     <h5 style={{marginBottom:'20px'}}>MORE INFO</h5>
                     <p>Pricing</p>
                     <p>For Marketing</p>
                     <p>For CEOs</p>
                     <p>For Agencies</p>
                     <p>Our Apps</p>
                 </div>
                 <div style={{width:'20%'}}>
                     <h5 style={{marginBottom:'20px'}}>CONTACT US</h5>
                     <p>Europe: +100 12345</p>
                     <p>US: +1 234567</p>
                     <p>support@exemple.com</p>
                     <div style={{display:'flex', justifyContent:'space-between', fontSize:'30px', width:'80%'}}><i class="fab fa-facebook"></i><i class="fab fa-twitter"></i><i class="fab fa-google-plus"></i><i class="fab fa-apple"></i></div>
                 </div>
            </div>
            </div>
        )
    }
}
