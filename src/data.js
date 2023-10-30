import {nanoid} from 'nanoid'
import {FaHtml5, FaJs, FaReact,FaJava,FaMysql,FaFigma,FaGithub,FaVsCode,FaWebstorm} from 'react-icons/fa'
import {FaBars, FaGithubSquare, FaLinkedin, FaTwitter} from "react-icons/fa";

export const navLinks = [
    { id: nanoid(), href:'#home', text:'home'},
    { id: nanoid(), href:'#skills', text:'skills'},
    { id: nanoid(), href:'#about', text:'about'},
    { id: nanoid(), href:'#projects', text:'projects'},
]
export const socialLinks = [
    { id: nanoid(), href: '#', icon: <FaGithubSquare />},
    { id: nanoid(), href: '#', icon: <FaLinkedin />},
    { id: nanoid(), href: '#', icon: <FaTwitter />},
]

export const skills = [
    {id: nanoid(), title:'HTML&CSS',icon: <FaHtml5 className={'h-16 w-16 '} />},
    {id: nanoid(), title:'JavaScript',icon:<FaJs className={'h-16 w-16'} /> },
    {id: nanoid(), title:'React',icon:<FaReact className={'h-16 w-16 '} />},
    {id: nanoid(), title:'JAVA',icon:<FaJava className={'h-16 w-16 '} />},
    {id: nanoid(), title:'Mysql',icon:<FaMysql className={'h-16 w-16'} />},
]
export const tools  = [
    {id: nanoid(), title:'',icon: <FaHtml5 className={'h-16 w-16 text-red-700,'} />,},
    {id: nanoid(), title:'JavaScript',icon:<FaJs className={'h-16 w-16 text-red-700'} />},
    {id: nanoid(), title:'React',icon:<FaReact className={'h-16 w-16 text-red-700'} />},
]

export const projects = [
    {id:nanoid(),img:'',url:'https://hexfinder.netlify.app/',title:'HexFinder',tech:<FaReact className={'h-6 w-6 '} />},
    {id:nanoid(),img:'',url:'https://e-cart-project.netlify.app/',title:'e-Cart',tech:<FaReact className={'h-6 w-6 '} />,},
]