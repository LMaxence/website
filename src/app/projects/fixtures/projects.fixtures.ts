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
        name: 'ML',
        icon: 'brain',
        color: 'white',
        textColor: '#15aabf',
        borderColor: '#15aabf'
      },
      {
        name: 'Keras',
        icon: 'keras',
        color: 'white',
        textColor: '#ca0000',
        borderColor: '#ca0000'
      },
      {
        name: 'VueJs',
        icon: 'vuejs',
        color: 'white',
        textColor: '#369a6e',
        borderColor: '#369a6e'
      },
      {
        name: 'Gitlab CI',
        icon: 'gitlab',
        color: 'white',
        textColor: '#2f2155',
        borderColor: '#2f2155'
      },
      {
        name: 'Python',
        icon: 'python',
        color: 'white',
        textColor: '#346e9e',
        borderColor: '#346e9e'
      },
      {
        name: 'Flask',
        icon: 'flask',
        color: 'white',
        textColor: 'black',
        borderColor: 'black'
      },
      {
        name: 'MQTT',
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
    title: 'This very website',
    description: `In order to promote my work, show my skills and also have my own platform on the web, I decided to develop my own website.</br>
      As every one of my projects, it makes use of a ci pipeline (<code>Github actions in this case</code>) and is built with <code>Angular</code>.</br>
      The website is completely hosted on <code>AWS</code> for optimizing infrastructure costs.`,
    tags: [
      {
        name: 'Angular',
        icon: 'angular',
        color: 'white',
        textColor: '#bd002e',
        borderColor: '#bd002e'
      },
      {
        name: 'Github Actions',
        icon: 'github',
        color: 'white',
        textColor: 'black',
        borderColor: 'black'
      },
      {
        name: 'AWS S3',
        icon: 'aws-s3',
        color: 'white',
        textColor: '#d94f41',
        borderColor: '#d94f41'
      },
      {
        name: 'AWS Cloudfront',
        icon: 'aws-cloudfront',
        color: 'white',
        textColor: '#d94f41',
        borderColor: '#d94f41'
      },
      {
        name: 'AWS Route 53',
        icon: 'aws-route53',
        color: 'white',
        textColor: '#d94f41',
        borderColor: '#d94f41'
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
    mainImageUrl: 'assets/images/personal-website.png',
    startDate: '2020-09-01T00:00:00'
  }
];
