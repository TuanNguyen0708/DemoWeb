import React, { Component } from 'react'

export default class SliderComponent extends Component {
    render() {
        return (
                <div id="slider" style={{
                    backgroundImage: `url("./images/home-bg.jpg")`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100vh'
                }}>
                        <div style={{width:'100%', height:'100vh', position:'relative',backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                            <h1 style={{display:'inline-block',color:'yellow', left:'50%',top:'50%', transform:'translateX(-50%) translateY(-50%)', position:'absolute'}}>Hello Tuấn</h1>
                        </div>
                </div >

        )
    }
}
