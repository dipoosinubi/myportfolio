import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Button } from '@material-ui/core';



const github = require('simple-icons/icons/github');


const styles = {
    GridItem: {
        height: '33vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
    },
    EmbiggenedIcon: {
        width: '50px',
        height: '50px',
        padding: '5px',
        margin: '10px',
    },
    TypoBox: {
        alignItems: 'center',
        display: 'flex',
        alignSelf: 'start',
        justifyContent: 'center',
    },
    Icons: {
        marginLeft: '10px',
    }
}

function GithubIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d={github.path} />
        </SvgIcon>
    )
}


class Project extends Component {
    state = {}
    render() {
        return (
            <Fade bottom>
                <div className='project'>
                    <a href={this.props.url}>
                        <img src={this.props.imageSrc} alt={this.props.title}></img>
                    </a>
                    <h1>{this.props.title}</h1>
                    <span>{this.props.service}</span> <br />
                    <Button
                        href={this.props.github}
                        target="_blank">
                        <GithubIcon
                            color="action"
                            style={styles.EmbiggenedIcon}
                        />
                    </Button>
                </div>
            </Fade>);
    }
}

export default Project;