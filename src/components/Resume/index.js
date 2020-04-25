import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from '../Education/index';
import Experience from '../Experience/index';
import Skills from '../Skills/index';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src="https://avatars3.githubusercontent.com/u/56142782?s=460&u=379e83597bd5982205c79790658f1a5183d96297&v=4"
              alt='pic'
              style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Shannon Ervin</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
            <p>Initiative-taking and self-driven developer looking for an opportunity in the Full Stack Web Development field. I am a task-oriented, visual learner who loves working both independently and in a collaborative setting. I am skilled in Full Stack, including HTML, CSS, JavaScript, NODE.js packages, REACT, SQL/Mongo, NOSQL, and React. I strive for excellence and am enthusiastic about the work that I do.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
            <h5>Address</h5>
            <p>Chicagoland, IL</p>
            <h5>Phone</h5>
            <p>262-676-3293</p>
            <h5>Email</h5>
            <p>sjervin07@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
          </Cell>
          <Cell className="resume-right-col" col={8}>
              <h2>Experience</h2>

            <Experience
              startYear={2013}
              endYear={2020}
              jobName="Medical Support Assistant"
              jobDescription="•	Manage admissions, transfers and discharges in a high-flow inpatient ward
              •	Simultaneously run/maintain several electronic medical records systems
              •	Played integral role in revamping order sets for the admission, inpatient, and discharge process in the electronic medical records system (EMR)
              •	Participate in several interdisciplinary committees to improve algorithms for EMRs"
              />

              <Experience
                startYear={2011}
                endYear={2013}
                jobName="Line Therapist"
                jobDescription="•	Work with children on Autism Spectrum with direct, one-on-one ABA
                •	Conduct behavioral assessments and analyze data
                •	Write and revise behavior-analytic treatment plans
                •	Train others to implement certain aspects of treatment plans
                •	Observe and modify behaviors with Discrete Trial Training & Pivotal Response Treatment
                •	Record all returned data in an electronic medical record application"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Education</h2>

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Northwestern University"
              schoolDescription="Full-Stack Web Development Bootcamp"
               />

               <Education
                 startYear={2007}
                 endYear={2010}
                 schoolName="University of Wisconsin-Madison"
                 schoolDescription="Psychology"
                  />

                <Education
                 startYear={2003}
                 endYear={2007}
                 schoolName="Indian Trail Academy"
                 schoolDescription="Biotechnology House"
                  />  
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Skills</h2>
              <Skills
                skill="HTML, CSS, JavaScript"
                />
              <Skills
                skill="Node.js, React, Express.js"
                />
              <Skills
                skill="MySQL, MongoDB"
                />
              <Skills
                skill="PWAs, MVC Modeling, Heroku, Git/Github"
                />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;