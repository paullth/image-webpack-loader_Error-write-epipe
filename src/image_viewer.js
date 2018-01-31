import big from '../assets/big.jpeg'
import small from '../assets/small.jpg'
import './image_viewer.css';

const image = document.createElement('img');
image.src = small;
// image.src = big;

document.body.appendChild(image);
