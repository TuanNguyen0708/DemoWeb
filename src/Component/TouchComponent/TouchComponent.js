import React, { Component } from 'react'

export default class TouchComponent extends Component {
    render() {
        return (
            <div className='container' style={{padding:'100px 0'}} id='touch'>
                 <div classname="feature__title" style={{textAlign: 'center', marginBottom:'100px'}}>
                    <div classname="feature__text">
                        <span style={{fontSize:'2rem'}}>Get In </span>
                        <h2 style={{display:'inline-block'}}>Touch</h2>
                    </div>
                    <div style={{height:'1px', width:'10%', backgroundColor:'blue', display:'inline-block'}}></div>
                </div>
                <div>
                    <div style={{display:'flex', justifyContent:'space-between', paddingBottom:'20px'}}>
                        <div style={{width:'30%'}}>
                            <p>Name</p>
                            <input type='text' placeholder='Your name...' style={{width:'100%', padding:'10px 20px'}} />
                        </div>
                        <div style={{width:'30%'}}>
                            <p>Email</p>
                            <input type='email' placeholder='Your email...' style={{width:'100%', padding:'10px 20px'}} />
                        </div>
                        <div style={{width:'30%'}}>
                            <p>Subject</p>
                            <input type='text' placeholder='Your subject...' style={{width:'100%', padding:'10px 20px'}} />
                        </div>
                    </div>
                    <div style={{paddingBottom:'70px', position:'relative'}}>
                        <p>Message</p>
                        <textarea rows="4" cols="50" name="comment" form="usrform" placeholder='Your message' style={{padding:'10px 20px', width:'100%'}} />
                        <button style={{color:'#fff', backgroundColor:'blue', padding:'10px 20px', border:'1px solid blue', borderRadius:'5px', position:'absolute', right:'0', bottom:'0'}}>SEND MESSAGE</button>
                    </div>
                   
                </div>
            </div>
        )
    }
}
