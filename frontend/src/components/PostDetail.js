import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PostDetail(props) {
    return (<div className="container">
        <div className="span8">
            <h1>Alice in Wonderland, part dos</h1>
            <p>'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words:
    'Yes, we went to school in the sea, though you mayn't believe it—'
    'I never said I didn't!' interrupted Alice.
    'You did,' said the Mock Turtle.</p>
        </div>
        <div className="row">
            <div className="span6">
                <form>
                    <div className="controls controls-row">
                        <input id="name" name="name" type="text" className="span3" placeholder="Name" />
                        <input id="email" name="email" type="email" className="span3" placeholder="Email address" />
                    </div>
                    <div className="controls">
                        <textarea id="message" name="message" className="span6" placeholder="Your Message" rows="5"></textarea>
                    </div>

                    <div className="controls">
                        <button id="contact-submit" type="submit" className="btn btn-primary input-medium pull-right">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default PostDetail;