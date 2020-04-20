import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const stephane = require("../img/selfie.jpg");
const hidden = require("../img/hidden.png");


const RevealExampleMoveRight = () => (
  <Reveal animated='move right'>
    <Reveal.Content visible>
      <Image size='large' src={hidden} />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size='large' src={stephane} />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleMoveRight