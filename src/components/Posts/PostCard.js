import React, { Component } from 'react';

export default class PostCard extends Component{
    render(){
        console.log(this.props)
        return(
            <div className="card">
                <div className="card-title">
                    <a href={`/posts/${this.props.id}`}>
                        <h1>{this.props.title}</h1>
                    </a>
                </div>
                <div className="card-content">
                    <span className="card-text">
                        {this.props.first_name}
                    </span>
                </div>
            </div>
        );
    }
}