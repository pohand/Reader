import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as utils from '../utils'

function Comment(props) {
    return (
        <div className="row comment-box">
            <div className="col-sm-1">
                <div className="thumbnail">
                    <img className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                </div>
            </div>

            <div className="col-sm-11">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>{props.comment.author}</strong> <span className="text-muted">commented {utils.printDate(props.comment.timestamp)}</span>
                    </div>
                    <div className="panel-body">
                        {props.comment.body}
                        </div>
                    <div className="stats pull-right">
                        <a href="#" className="btn btn-default stat-item">
                            <i className="glyphicon glyphicon-edit"></i>
                        </a>
                        <button href="#" className="btn btn-default stat-item">
                            <i className="glyphicon glyphicon-remove"></i>
                        </button>
                        <a href="#" className="btn btn-default stat-item">
                            <i className="glyphicon glyphicon-thumbs-up"></i>
                        </a>
                        <a href="#" className="btn btn-default stat-item">
                            <i className="glyphicon glyphicon-thumbs-down"></i>
                        </a>
                        <span className="btn btn-default stat-item">
                            <i className="glyphicon glyphicon-heart"></i> 12
                </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment;