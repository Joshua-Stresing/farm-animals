import { animals } from '../data.js';
import { findById } from '../utils.js';

const animalName = document.getElementById('animal-name');
const animalImage = document.getElementById('animal-image');
const animalSounds = document.getElementById('animal-sounds');

const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);

animalName.textContent = animal.name;
animalImage.src = `../assets/${animal.type}.svg`;
animalSounds.textContent = animal.says;