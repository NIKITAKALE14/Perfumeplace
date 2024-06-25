import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff6',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const items = [
  { id: 1, text: 'Denver', imgSrc: '/img1.jpg' },
  { id: 2, text: 'Item 2', imgSrc: '/img5.png' },
  { id: 3, text: 'Item 3', imgSrc: '/img3.jpg' },
  { id: 4, text: 'Item 4', imgSrc: '/img4.jpg' },
  { id: 5, text: 'Item 5', imgSrc: '/img7.jpg' },
  { id: 6, text: 'Item 6', imgSrc: '/img8.jpg' },
];

export default function GridSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 2000 ,
  };

  return (
    
    <Box sx={{ flexGrow: 1, backgroundColor: 'linear-gradient(to right, #E2BBE9, #9B86BD, #7776B3, #5A639C)', p: 2, mt: 2 }}>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <Item>
              <img src={item.imgSrc} alt={item.text} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
              <p>{item.text}</p>
            </Item>
          </div>
        ))}
      </Slider>
      
      <br></br>
    </Box>
    

  );
}
