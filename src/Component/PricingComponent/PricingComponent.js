import React, { Component } from 'react'

export default class PricingComponent extends Component {
    render() {
        return (
            <div style={{backgroundColor:'hsl(210deg 17% 98%)', padding:'100px 0'}} id='pricing'>
            <div className='container'>
                <div classname="feature__title" style={{textAlign: 'center',marginBottom:'100px'}}>
                    <div classname="feature__text">
                        <span style={{fontSize:'2rem'}}>Our </span>
                        <h2 style={{display:'inline-block'}}>Pricing</h2>
                    </div>
                    <div style={{height:'1px', width:'10%', backgroundColor:'blue', display:'inline-block'}}></div>
                </div>
                <div style={{textAlign:'center', display:'flex',justifyContent:'space-around'}}>
                    <div style={{width:'25%', border:'1px solid gray', padding:'20px 0', backgroundColor: '#fff'}}>
                        <h5>Free</h5>
                        <div style={{width:'100px', height:'100px', borderRadius:'50%', backgroundColor:'blue', margin:'0 auto', position:'relative', marginBottom: '20px', marginTop:'20px'}}>
                            <h2 style={{display:'inline-block', left:'50%',top:'50%', transform:'translateX(-50%) translateY(-50%)', position:'absolute', color:'#fff'}}>$0<span style={{fontSize:'13px'}}>/m</span></h2>
                        </div>
                        <p style={{lineHeight:'40px'}}>Bandwidth: 1GB <br />Onlinespace: 50MB <br />Support: No <br />-<br />-</p>
                        <button style={{padding:'10px 20px', borderRadius:'5px', backgroundColor:'blue', color:'#fff', border:'1px solid blue'}}>JOIN NOW</button>
                    </div>
                    <div style={{width:'25%', border:'1px solid gray', padding:'20px 0', backgroundColor: '#fff'}}>
                        <h5>Economy</h5>
                        <div style={{width:'100px', height:'100px', borderRadius:'50%', backgroundColor:'blue', margin:'0 auto', position:'relative', marginBottom: '20px', marginTop:'20px'}}>
                            <h2 style={{display:'inline-block', left:'50%',top:'50%', transform:'translateX(-50%) translateY(-50%)', position:'absolute', color:'#fff'}}>$19<span style={{fontSize:'13px'}}>/m</span></h2>
                        </div>
                        <p style={{lineHeight:'40px'}}>Bandwidth: 1GB <br />Onlinespace: 50MB <br />Support: Yes <br />5 Domain5<br />-</p>
                        <button style={{padding:'10px 20px', borderRadius:'5px', backgroundColor:'blue', color:'#fff', border:'1px solid blue'}}>JOIN NOW</button>
                    </div>
                    <div style={{width:'25%', border:'1px solid gray', padding:'20px 0', backgroundColor: '#fff'}}>
                        <h5>Deluxe</h5>
                        <div style={{width:'100px', height:'100px', borderRadius:'50%', backgroundColor:'blue', margin:'0 auto', position:'relative', marginBottom: '20px', marginTop:'20px'}}>
                            <h2 style={{display:'inline-block', left:'50%',top:'50%', transform:'translateX(-50%) translateY(-50%)', position:'absolute', color:'#fff'}}>$29<span style={{fontSize:'13px'}}>/m</span></h2>
                        </div>
                        <p style={{lineHeight:'40px'}}>Bandwidth: 1GB <br />Onlinespace: 2GB <br />Support: Yes <br />10 Domain<br />No Hidden Fees</p>
                        <button style={{padding:'10px 20px', borderRadius:'5px', backgroundColor:'blue', color:'#fff', border:'1px solid blue'}}>JOIN NOW</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
