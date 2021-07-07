import { v4 as uuidv4 } from 'uuid'

// big project cards data
export const bigProjectCardData = [
    {
        id: uuidv4(),
        desktopImg: './img/portfolioDesktop.png',
        mobileImg: './img/portfolioMobile.png',
        name: 'Portfolio v1',
        info: 'Here it is, my portfolio web-site where are you right now :). First of all I decided to do one for myself because in this way you can see what I can do, what I did, and what I am planning to do ^_^. I have used create-react-app as a react template for this project. Also scss as css preprocessor and BEM metodology to write understandable and logical className structure. You can check up the source code on github, link is included :).',
        githubLink: '',
        liveDemoLink: ''
    },
    {
        id: uuidv4(),
        desktopImg: 'https://via.placeholder.com/560x315?text=Desktop+View',
        mobileImg: 'https://via.placeholder.com/135x240/A6A6A6/000000?text=Mobile+View',
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio blanditiis aliquid rem inventore possimus doloribus saepe voluptas error praesentium ut. Fugiat harum maiores est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias a excepturi, recusandae nobis enim officiis, quidem saepe maiores molestiae magni fugit mollitia dolorum autem ratione doloribus modi quo nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio blanditiis aliquid rem inventore possimus doloribus saepe voluptas error praesentium ut. Fugiat harum maiores est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias a excepturi, recusandae nobis enim officiis, quidem saepe maiores molestiae magni fugit mollitia dolorum autem ratione doloribus modi quo nam',
        githubLink: '',
        liveDemoLink: ''
    },
]

// small project cards data
export const smallProjectCardData = [
    {
        id: uuidv4(),
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio blanditiis aliquid rem inventore possimus doloribus saepe voluptas error praesentium ut. Fugiat harum maiores est.',
        technologies: ['React.js', 'Tailwindcss', 'Express.js'],
        githubLink: ''
    },
    {
        id: uuidv4(),
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio',
        technologies: ['React.js', 'Tailwindcss', 'Express.js', 'React.js', 'Tailwindcss', 'Express.js'],
        githubLink: ''
    },
    {
        id: uuidv4(),
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum g elit. Aut delectus a, nostrum rerum accusamus optio',
        technologies: ['React.js', 'React.js', 'Tailwindcss', 'Express.js'],
        githubLink: ''
    },
    {
        id: uuidv4(),
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio',
        technologies: ['React.js', 'Tailwindcss', 'Express.js', 'React.js', 'Tailwindcss', 'Express.js'],
        githubLink: ''
    },
    {
        id: uuidv4(),
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio blanditiis aliquid rem inventore possimus doloribus saepe voluptas error praesentium ut. Fugiat harum maiores est.',
        technologies: ['React.js', 'Tailwindcss', 'Express.js'],
        githubLink: ''
    },
]

// skills data 
export const skillsData = [
    { 
        id: uuidv4(),
        name: 'LANGUAGES', 
        list: ['Web(HTML,CSS)', 'JavaScript', 'TypeScript', 'C#', 'Python', 'SQL', 'C++'] 
    }, 
    { 
        id: uuidv4(),
        name: 'FRAMEWORKS', 
        list: ['React.js', 'Node.js', 'Express.js'] 
    }, 
    { 
        id: uuidv4(),
        name: 'TOOLS', 
        list: ['Git/Github', 'Linux(Unix)', 'Postman', 'Cisco Packet Tracer']
    }
]