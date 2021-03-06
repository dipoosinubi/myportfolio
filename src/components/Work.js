import React, { Component } from 'react';
import Project from './Projects.js'
import Fade from 'react-reveal/Fade'
import data from '../mydata.js'

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Work.</Fade></h1>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                             github={project.github}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;