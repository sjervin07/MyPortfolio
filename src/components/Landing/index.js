import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
            src="https://cdn.impactinit.com/cdn/x/x@e7156feb38/smss52/smsimg30/pv/ingimagecontributors/ing_47129_25564.jpg"
            alt="avatar"
            className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full-Stack Web Developer</h1>
            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | NodeJS | Express | React | MySQL | MongoDB</p>

        <div className="social-links">

          <a href="https://www.linkedin.com/in/shannon-ervin" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          <a href="https://github.com/sjervin07" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
