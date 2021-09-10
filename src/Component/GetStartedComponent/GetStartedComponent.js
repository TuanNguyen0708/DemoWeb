import React, { Component } from 'react'

export default class GetStartedComponent extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'blue'}}>
                <div className="container" style={{display:'flex', justifyContent:'space-between', padding:'40px 0'}}>
                    <h4 style={{color:'#fff',lineHeight:'50px'}}>Become a part of Linexon bussiness community today</h4>
                    <button style={{border:'1px solid #fff',backgroundColor:'blue',color:'#fff', padding:'10px', borderRadius:'5px'}}>GET STARTED</button>
                </div>
            </div>
        )
    }
}
