import './App.css';
import React, {useState} from 'react';
import { AccordionContainer, AccordionContent } from './Accordion';
import {Card, JobBadge, SchoolYearBadge, YearBadge} from './Card';
import moonIcon from './images/moon-dark.png'
import { FaGithub } from 'react-icons/fa'

const Cv = ({items}) => {
  const [active, setActive] = useState();

  const handleClick = (name)=>{
    setActive(name === active ? null : name)
  }

  return <AccordionContainer>
    {items.map(item=>{
      let isActive = active === item.name
      return (
      <AccordionContent onClick={()=>handleClick(item.name)} itemName={item.name} itemContent={item.content} isActive={isActive}/>
      );
    })}
  </AccordionContainer>
} 

const CvRender = () => {
  let items = [
    {
      name:"Qui suis-je?",
      content: <div>
        <p style={{textIndent:"0.7em"}}>Jeune <span style={{color:"#9AE6B4"}}>apprenti developpeur web</span> depuis maintenant plus d’un an,
        j’étais, avant ça,  dans le <span style={{color:"#FF63C3"}}>commerce</span> en CDI a Darty. Mais apres deux ans de loyaux services
        j’ai décidé de me <span style={{color:"#9AE6B4"}}>réorienter</span> dans le developpement, bien plus stimulant et plus adapté a mon mode vie
        étant scotché a l’ordinateur depuis mon plus jeune age.</p>
        <p style={{textIndent:"0.7em"}}>C’est avec <span style={{color:"#FF63C3"}}>Unity</span> que j’ai commencer à coder tout d’abord dans l’optique de me lancer dans le <span style={{color:"#9AE6B4"}}>jeu vidéo</span>,
        un domaine passionnant mais également très compliqué de part le manque d’opportunités pro.</p>
        <p style={{textIndent:"0.7em"}}>Voila pourquoi depuis plus d’un an je me forme dans le <span style={{color:"#FF63C3"}}>web</span>, dans lequel je retrouve le <span style={{color:"#9AE6B4"}}>plaisir</span> de <span style={{color:"#FF63C3"}}>coder</span> dans un
        milieu plus stable et bien plus prometteur.</p>
      </div>
    },
    {
      name:"Formations",
      content: <div>
        <Card><p>Bac Scientifique</p> <div style={{display:"flex"}}><JobBadge>L'Esperance</JobBadge><SchoolYearBadge>2016</SchoolYearBadge></div></Card>
        <Card><p>Bachelor Commerce</p> <div style={{display:"flex"}}><JobBadge>Ipac</JobBadge><SchoolYearBadge>2017 - 2019</SchoolYearBadge></div></Card>
        <Card><p>Certification Unity</p> <div style={{display:"flex"}}><JobBadge>3W Academy</JobBadge><SchoolYearBadge>2020</SchoolYearBadge></div></Card>
        <Card><p>Intro Developpement Web</p> <div style={{display:"flex"}}><JobBadge>Webforce3</JobBadge><SchoolYearBadge>2021</SchoolYearBadge></div></Card>
        <Card><p>Developpeur web et web mobile</p> <div style={{display:"flex"}}><JobBadge>Simplon</JobBadge><SchoolYearBadge>2022</SchoolYearBadge></div></Card>

      </div>
    },
    {
      name:"Experiences professionnelles",
      content: <div>
        <Card><p>Assistant Chef Produit</p> <div style={{display:"flex"}}><JobBadge>Motul</JobBadge><YearBadge>2018</YearBadge></div></Card>
        <Card><p>Vendeur Polyvalent</p> <div style={{display:"flex"}}><JobBadge>Darty</JobBadge><YearBadge>2018 -  2020</YearBadge></div></Card>
        <Card><p>Intégrateur Web</p> <div style={{display:"flex"}}><JobBadge>Darius</JobBadge><YearBadge>2021</YearBadge></div></Card>
        <Card><p>Opérateur de Saisie</p> <div style={{display:"flex"}}><JobBadge>Ideal Santé</JobBadge><YearBadge>2022</YearBadge></div></Card>
        
        </div>
    },
    {
      name:"Hobby",
      content: <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}><span className="material-icons" style={{color:"#9AE6B4"}}>tag_faces
      </span><p style={{marginRight:"0.5em", marginLeft:"0.4em"}}>Vive les jeux vidéos</p> <span className="material-icons" style={{color:"#FF63C3"}}>videogame_asset
      </span></div>
    }
  ]

  return (
    <div style={{width:"100vw", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#202023"}}>
      <h1 style={{color:"#f9f9f9", fontSize:"3em", letterSpacing:"3px"}}>J<span><img src={moonIcon} className="moonIcon"/></span>ris</h1>
      <Cv items={items} />
      <div style={{display:"flex"}}>
        <FaGithub style={{margin:"1.1em 0.3em", color:"#f9f9f9"}}/>
        <p style={{color:"#f9f9f9"}}>Repo github <span><a target="_blank" href='https://github.com/lotusbleudev/CV_Simplon' style={{textDecoration:"underline", color:"#f9f9f9"}}>ici</a></span></p>  
      </div>
    </div>
  );
};

export default CvRender;