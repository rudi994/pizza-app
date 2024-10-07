import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>©Slices by Rutuja<span role='img' aria-label='pizza'> </span></p>
    </Menu.Item>
  </Menu>
);

export default Footer;
