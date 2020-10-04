/* eslint-disable max-len */
import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'An attempt at forecasting heart attacks from electrocardiogram signals',
    description: `With a small team of fellow ENSTA students, we found out a database containing electrocardiagrams records and a research paper about heart attacks early detection using <i>t-waves analysis</i>.</br>
We decided to take a shot at implementing a model based on this paper, and to design an infrastructure allowing hospitals or retirement homes to use this model.</br>
Our POC was presented and rewarded in March 2019 at the <a href="https://www.universite-paris-saclay.fr/formation/entrepreneuriat-etudiant/journee-entrepreneuriat-etudiant">Student entrepreneurship day of Paris-Saclay university</a>, with a first prize.
      `,
    tags: [
      {
        name: 'ml',
        icon: 'brain',
        color: 'white',
        textColor: '#15aabf',
        borderColor: '#15aabf'
      },
      {
        name: 'keras',
        icon: 'keras',
        color: 'white',
        textColor: '#ca0000',
        borderColor: '#ca0000'
      },
      {
        name: 'vuejs',
        icon: 'vuejs',
        color: 'white',
        textColor: '#369a6e',
        borderColor: '#369a6e'
      },
      {
        name: 'gitlab ci',
        icon: 'gitlab',
        color: 'white',
        textColor: '#2f2155',
        borderColor: '#2f2155'
      },
      {
        name: 'python',
        icon: 'python',
        color: 'white',
        textColor: '#346e9e',
        borderColor: '#346e9e'
      },
      {
        name: 'flask',
        icon: 'flask',
        color: 'white',
        textColor: 'black',
        borderColor: 'black'
      },
      {
        name: 'mqtt',
        icon: 'mqtt',
        color: 'white',
        textColor: '#6f1471',
        borderColor: '#6f1471'
      }
    ],
    links: [
      {
        url: 'https://github.com',
        label: 'Source code',
        icon: 'github'
      },
      {
        url: 'https://github.com',
        label: 'Website',
        icon: 'devices'
      }
    ],
    id: 'opiwatch',
    mainImageUrl: 'assets/images/opiwatch-logo.png',
    startDate: '2019-01-01T00:00:00',
    endDate: '2019-06-01T00:00:00+0200',
    company: 'Opiwatch'
  },
  {
    title: 'Opiwatch',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum omnis doloribus ducimus temporibus maiores mollitia facilis eos explicabo cupiditate quidem, nostrum sequi cumque ea id magnam at dolorum expedita. Illum.',
    tags: [
      {
        name: 'ml',
        icon: 'brain',
        color: 'white',
        textColor: '#15aabf',
        borderColor: '#15aabf'
      },
      {
        name: 'vuejs',
        icon: 'vuejs',
        color: 'white',
        textColor: '#369a6e',
        borderColor: '#369a6e'
      }
    ],
    links: [
      {
        url: 'https://github.com',
        label: 'Source code',
        icon: 'github'
      },
      {
        url: 'https://github.com',
        label: 'Website',
        icon: 'devices'
      }
    ],
    id: 'opiwatch',
    mainImageUrl: 'https://via.placeholder.com/300.png/09f/fff',
    startDate: '2019-01-01T00:00:00'
  }
];
