import React  ,{}from 'react';
import '../App.css';
export default class MonsterItem extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        const {itemValue}=this.props;
        // debugger
        if(itemValue){
            return (
                <div className='MonsterMain flexColumn flexBetween'>
                    <div className='flexStyle flexBetween' style={{padding:'20px 10px',borderBottom:'1px solid #ccc'}}>
                        <div className='imgMain'><img src={itemValue.sprites.front_default} alt="" style={{width:'100%',height:'100%'}}/></div>
                        <div className='imgMain'><img src={itemValue.sprites.back_default} alt="" style={{width:'100%',height:'100%'}}/></div>
                    </div>
                    <div style={{padding:'20px 10px'}}>
                        <li className='eachName'>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：{itemValue.name}</li>
                        <li className='eachName'>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高：{itemValue.height}</li>
                        <li className='eachName'>体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重：{itemValue.weight}</li>
                        <li className='eachName'>基础训练：{itemValue.base_experience}</li>
                        <li className='eachName'>更多介绍：...</li>

                    </div>
                </div>
            )
        }else{
            return (
                <div className='MonsterMain  flexCenter flexStyle'>
                    <span  className='eachName'>等待抽取...</span>
                </div>
            )
        }
    }

}
