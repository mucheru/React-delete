import React from "react";
import axios from 'axios';
import { Component } from 'react';

export default class DeleteComponent extends Component
{
    constructor(props){
        super(props)
        this.state= {
            posts:[],
        }
        this.componentDidMount=this.componentDidMount.bind(this)
        
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts = response.data;
            this.setState({posts});
            console.log(posts);
        })
    }
    deleteRow(id,e){
        axios.delete('https://jsonplaceholder.typicode.com/posts/${id}')
        .then(res =>{
            console.log(res.data);
            const posts = this.state.posts.filter(item => item.id !== id);
            this.setState({posts});

        })

    }
    render(){
        return (
            <div>React Delete Data example
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
              {this.state.posts.map((post) => (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
                </table>
            </div>
        )
    }



}
