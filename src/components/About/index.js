import React, { Component } from "react";
import { Grid, DialogContent } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <DialogContent>
            <h2 className="about-title">Some More About Me</h2>
            <hr></hr>
            <p style={{ width: '65%', margin: 'auto', paddingTop: '1em'}}>
              Hello! My name is Shannon Ervin, and I am a persuing a new career as a
              full-stack web devloper. After years of working with children on
              the Autism spectrum as a Line Therpaist, and later in hospital
              administration- I desired a change. Over the last year or two I
              came to realize that I really enjoyed helping to re-develop order
              sets for the Electronic Health Records system at my job in a
              hospital. That, combined with the fact that I love problem solving
              a good puzzle, led me to web development. With a field so
              wide-open to possibilities, I am confidnent that I will find my
              niche in an area that will not only be personally satifsfying but
              will also allow me to make a wider impact that reaches beyond
              myself.
            </p>
            <p style={{ width: '65%', margin: 'auto', paddingTop: '1em'}}>
              On a personal side, I have a lot of varying interests when it
              comes to hobbies and things that I like to do for fun. I'm a big
              traveler and try to make one national and one international trip
              every year...if finances allow! My goal is to hit six of the seven
              continents (haven't decided on whether I want to go for
              Antarctica) and I've hit 4 so far. Apart from traveling, I love
              going to movies, researching random topics at 3:00 am and
              listening to true crime podcasts.
            </p>
          </DialogContent>
        </Grid>
      </div>
    );
  }
}
export default About;
