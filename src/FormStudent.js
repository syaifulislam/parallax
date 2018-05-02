import React,{Component} from 'react'

export default class FormStudent extends Component{
    constructor(){
        super()
        this.state = {
            name:['testing nama'],
            current_name: ''
        }
    }
    addStudent(){
        var curr = this.state.name
        var stu = document.getElementById('names').value
        curr.push(stu)
        
        // console.log(curr)
        this.setState({
            name:curr
        })
    }
    render(){
        return(
            <div>
                <span>{this.state.current_name}</span>
                <br/>
                <input type="text" name="student_name" id="names" onChange ={(e)=>this.setState({current_name:e.target.value})} />
                <br/>
                <input type="submit" value="Add" onClick={()=>this.addStudent()}/>
                <br/>
                <h2>List Students</h2>
                {this.state.name.map(student=>{
                    return <h3>{student}</h3>
                })}
            </div>
        )
    }
}