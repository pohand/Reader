import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as utils from '../utils'

function Post(props) {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="panel panel-white post panel-shadow">
                    <div className="post-heading">
                        <div className="pull-left image">
                            <img src="http://bootdey.com/img/Content/user_1.jpg" className="img-circle avatar" alt="user profile image" />
                        </div>
                        <div className="pull-left meta">
                            <div className="title h5">
                                <a href="#"><b>{props.post.author}</b></a> made a post.
                        </div>
                            <h6 className="text-muted time">{utils.printDate(props.post.timestamp)}</h6>
                        </div>
                    </div>
                    <div className="post-title">
                        <div className="pull-left meta">
                            <div className="title h3">
                                <Link to={`${props.post.category}/${props.post.id}`}><b>{props.post.title}</b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="post-description">
                        <p>{props.post.body} <span><Link to={`${props.post.category}/${props.post.id}`}><span className="glyphicon glyphicon-folder-open" title="Read full post"></span></Link></span> </p>
                        <div className="stats">
                            <a href="#" className="btn btn-default stat-item">
                                <i className="glyphicon glyphicon-edit"></i>
                            </a>
                            <a href="#" className="btn btn-default stat-item">
                                <i className="glyphicon glyphicon-remove"></i>
                            </a>
                            <a href="#" className="btn btn-default stat-item">
                                <i className="glyphicon glyphicon-thumbs-up"></i>
                            </a>
                            <a href="#" className="btn btn-default stat-item">
                                <i className="glyphicon glyphicon-thumbs-down"></i>
                            </a>
                            <span className="btn btn-default stat-item">
                                <i className="glyphicon glyphicon-heart"></i> 12
                        </span>
                            <span className="btn btn-default stat-item">
                                <i className="glyphicon glyphicon-comment"></i> 2 comments
                        </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Post;