import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import '../styles/Footer.scss';

const copyrightIcon = <FontAwesomeIcon icon={faCopyright} />

const Footer = () =>{


    return <footer>{copyrightIcon}<span>Michał Kowalczyk</span></footer>
}

export default Footer;