import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';
import MyResume from './Resume.js'
import { Grid, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import SvgIcon from '@material-ui/core/SvgIcon';


const github = require('simple-icons/icons/github');


const styles = {

    EmbiggenedIcon: {
        width: '100px',
        height: '100px',
        padding: '5px',
        margin: '10px',
        
    },
    TypoBox: {
        alignItems: 'center',
        display: 'flex',
        alignSelf: 'start',
        justifyContent: 'center',
    },
   
}

function GithubIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d={github.path} />
        </SvgIcon>
    )
}


class About extends Component {
    state = {}
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className='about'>
                        <div className='about-content'>
                            <h1><Fade bottom cascade>About.</Fade></h1>
                            <Fade bottom>
                                <p>{data.abouttext}</p>
                            </Fade>
                        </div>
                        {data.ShowAboutImage ? <img src={data.aboutImage} alt='about image' /> : null}
                    </div>
                </Grid>
                <Grid item xs={4} sm={12} style={styles.GridItem} alignItems='center'>
                    <Grid item xs={12} style={styles.TypoBox}>
                        <Fade>
                            <Button
                                href="https://www.linkedin.com/in/oladipoosinubi"
                                target="_blank"
                            >
                                <LinkedInIcon
                                    style={styles.EmbiggenedIcon}
                                    color="action" />
                            </Button>
                            <Button
                                href="https://github.com/dipoosinubi"
                                target="_blank">
                                <GithubIcon
                                    color="action"
                                    style={styles.EmbiggenedIcon}
                                />
                            </Button>
                            <MyResume stylesProp={styles.EmbiggenedIcon} />
                            <Button
                                href="mailto:diposinubi@gmail.com"
                            >
                                <EmailIcon
                                    style={styles.EmbiggenedIcon}
                                    color="action" />
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default About;