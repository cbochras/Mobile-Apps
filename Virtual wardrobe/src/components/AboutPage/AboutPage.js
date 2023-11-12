import React from 'react';
import {Typography} from "@mui/material";

const AboutPage = () => (
  <div className="container">
    <div>
      <Typography variant='h4'>About:</Typography>
      <Typography variant='body1'>
        Inspired by the masterpiece film Clueless, dressr is a responsive, 
        full-stack mobile application which allows a user to create their own personalized virtual closet to access and search at any time. 
        If the user needs a little bit of inspiration, dressr has a feature to create random outfits!
      </Typography>
      
      <br/>

      <Typography variant='h4'>Technologies used:</Typography>
      <Typography variant='body1'>React, Redux, Node, Express, and Material UI</Typography>
    </div>
  </div>
);

export default AboutPage;
