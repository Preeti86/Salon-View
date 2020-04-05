import React from 'react';
import SalongList from '../salong-list/salong-list.component'

import './directory.style.css';
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          imageUrl: 'https://i.ibb.co/99CqwQB/sax.jpg',
          size: 'small',
          title: 'Sax & Fön',
          time: '12:00',
          address: 'Rådamantgatan 46',
          price: '320kr',
          duration: '30 mins',
          telefon: '08-522 389 20',
          website: 'www.salongweb.se',
          rating: "",
          open: "Öppet till 19:00 idag",
          linkUrl: 'shop/Sax&Fon',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 2,
          imageUrl: 'https://i.ibb.co/FwMbF0b/Harizont.jpg',
          size: 'small',
          title: 'Hårizont',
          time: '12:00',
          address: 'Rådamantgatan 46',
          price: '320kr',
          duration: '30 mins',
          telefon: '08-522 389 20',
          open: "Öppet till 19:00 idag",
          website: 'www.salongweb.se',
          rating: "",         
          linkUrl: 'shop/Harizont',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 3,
          imageUrl: 'https://i.ibb.co/QmvyYP6/Harhuset.jpg',
          size: 'small',
          title: 'Hårhuset',
          time: '12:00',
          address: 'Rådamantgatan 46',
          price: '320kr',
          duration: '30 mins',
          telefon: '08-522 389 20',
          open: "Öppet till 19:00 idag",
          website: 'www.salongweb.se',
          rating: "",         
          linkUrl: 'shop/Harhuset',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 4,
          imageUrl: 'https://i.ibb.co/mFQdbvT/hairnu.jpg',
          size: 'small',
          title: 'Hair & Nu',
          time: '12:00',
          address: 'Rådamantgatan 46',
          price: '320kr',
          duration: '30 mins',
          telefon: '08-522 389 20',
          open: "Öppet till 19:00 idag",
          website: 'www.salongweb.se',
          rating: "",         
          linkUrl: 'shop/Har&nu',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 5,
          imageUrl: 'https://i.ibb.co/6NRCR6L/Harley-Davidson.jpg',
          size: 'small',
          title: 'HarleyDavidson',
          time: '12:00',
          address: 'Rådamantgatan 46',
          price: '320kr',
          duration: '30 mins',
          open: "Öppet till 19:00 idag",
          telefon: '08-522 389 20',
          website: 'www.salongweb.se',
          rating: "",         
          linkUrl: 'shop/HarleyDavidson',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
      ]
    }
  }
  render() {
    return (
    <div className='directory-menu'>
      {
        this.state.sections.map(({ id, ...otherSectionProps }) => (
          <SalongList key={id} {...otherSectionProps} />  
        ))}
    </div>
    )
  }
}

export default Directory;