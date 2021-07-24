import React, { Component } from 'react'

export default class FeatureComponent extends Component {
    render() {
        return (
            <div style={{padding:'100px 0',backgroundColor:'hsl(210deg 17% 98%)'}} id='feature'>
            <div className="container" style={{textAlign: 'center'}}>
                <div classname="feature__title" style={{textAlign: 'center',marginBottom:'100px'}}>
                    <div classname="feature__text">
                        <span style={{fontSize:'2rem'}}>Our </span>
                        <h2 style={{display:'inline-block'}}>Features</h2>
                    </div>
                    <div style={{height:'1px', width:'10%', backgroundColor:'blue', display:'inline-block'}}></div>
                </div>
                <div classname="feature__content" style={{display:'flex'}}>
                    <div classname="feature__content__img" style={{width:'50%'}}>
                        <img src="./images/mockup1.png" />
                    </div>
                    <div classname="feature__content__about" style={{width:'50%', textAlign:'center', position:'relative'}}>
                        <div style={{width:'100%', position:'absolute', left:'50%', top:'50%', transform:'translateX(-50%) translateY(-50%)'}}>
                            <h4>This is Improve Your Marketing business</h4>
                            <div style={{height:'2px', width:'20%', backgroundColor:'blue', display:'inline-block'}}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a class="" href="/">Read more <i class="fa fa-arrow-right" /></a>
                        </div>
                       
                    </div>
                </div>
                <div classname="feature__content" style={{display:'flex'}}>
                    <div classname="feature__content__about" style={{width:'50%', textAlign:'center', position:'relative'}}>
                        <div style={{width:'100%', position:'absolute', left:'50%', top:'50%', transform:'translateX(-50%) translateY(-50%)'}}>
                            <h4>This is Increase Your Marketing Performance</h4>
                            <div style={{height:'2px', width:'20%', backgroundColor:'blue', display:'inline-block'}}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a class="" href="/">Read more <i class="fa fa-arrow-right" /></a>
                        </div>
                    </div>
                    <div classname="feature__content__img" style={{width:'50%'}}>
                        <img src="./images/mockup2.png" />
                    </div>
                </div>
            </div>
            </div>

        )
    }
}
