import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Post(props) {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <div>{props.post.body}</div>
            <div >
                <div className="pull-left">
                    <ul className="list-inline list-unstyled">
                        <li>
                            <span className="label label-primary">Posted by {props.post.author}</span>
                        </li>
                        <li>
                            <span className="label label-primary"> {props.post.category} </span>
                        </li>
                    </ul>
                </div>
                <div className="pull-right">
                    <ul className="list-inline list-unstyled">
                        <li><span><i className="glyphicon glyphicon-heart"></i> {props.post.voteScore} </span></li>
                        <li>|</li>
                        <li><span><i className="glyphicon glyphicon-thumbs-up"></i> {props.post.voteScore} </span></li>
                        <li>|</li>
                        <li><span><i className="glyphicon glyphicon-thumbs-down"></i> {props.post.voteScore} </span></li>
                        <li>|</li>
                        <span><i className="glyphicon glyphicon-comment"></i> 2 comments</span>
                        <li>|</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Post;