import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as utils from '../utils'

function Post(props) {
    return (
        <div>
            <div className="left-align">
            <h3>{props.post.title}</h3>
            <ul className="list-inline list-unstyled">
                <li><p>{props.post.body}</p></li>
                <li>
                    <span><Link to={`${props.post.category}/${props.post.id}`}><span className="glyphicon glyphicon-folder-open" title="Read full post"></span></Link></span>
                </li>
            </ul>
            </div>
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
                        <li><span><i className="glyphicon glyphicon-calendar"></i> {utils.printDate(props.post.timestamp)} </span></li>
                        <li>|</li>
                        <li><span><i className="glyphicon glyphicon-heart"></i> {props.post.voteScore} </span></li>
                        <li>|</li>
                        <li><span><i className="glyphicon glyphicon-thumbs-up"></i> {props.post.voteScore} </span></li>
                        <li>|</li>
                        <li><span><i className="glyphicon glyphicon-thumbs-down"></i> {props.post.voteScore} </span></li>
                        <li>|</li>
                        <span><i className="glyphicon glyphicon-comment"></i> 2 comments</span>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Post;