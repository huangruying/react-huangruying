import React, { Component } from 'react';
import { Button } from 'antd-mobile';

// import '../../styles/test.less'
import '../../styles/test2.scss'
// import style from '../../styles/test2.module.scss'
import api from '@/apis/index.js'
class Home extends Component {
    apiData = ()=>{
        api.getByToStation().then(res=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <div className="box">
                    <span className="span">这是首页</span>
                    <div className="div">你好哦！</div>
                </div>
                {/* <div className={ style.box }>
                    <span className={ style.span }>这是首页</span>
                    <div className={ style.div }>你好哦！</div>
                </div>
                <div className={ style.background }></div> */}
                <Button disabled>default disabled</Button>
                <Button type="primary">primary</Button>
                <Button type="warning" onClick={ this.apiData }>warning disabled</Button>
            </div>
        );
    }
}

export default Home;
