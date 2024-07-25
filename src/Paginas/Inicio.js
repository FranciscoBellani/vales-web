import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Estilos/styles.css';

const categorias = [
  { titulo: 'Entradas', descripcion: 'Deliciosas entradas', video: 'https://www.youtube.com/embed/esIyz899wlE?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0' },
  { titulo: 'Platos principales', descripcion: 'Sabrosos platos principales', video: 'https://www.youtube.com/embed/sqelF9LaAlQ?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0'},
  { titulo: 'Postres', descripcion: 'Irresistibles postres', video: 'https://www.youtube.com/embed/VIDEO_ID_3' },
  { titulo: 'Bebidas', descripcion: 'Refrescantes bebidas', video: 'https://www.youtube.com/embed/VIDEO_ID_4' },
];

const Inicio = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    appendDots: dots => (
      <div className="carousel-indicators-vertical">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot"></div>
    ),
    arrows: false // Deshabilitamos los botones Next y Prev
  };

  const handleCategoriaClick = (categoria) => {
    navigate(`/listado-platos/${categoria.titulo}`);
  };

  return (
    <div className="inicio">
      <div className="slider-container">
        <Slider {...settings}>
          {categorias.map((categoria, index) => (
            <div key={index} className="categoria" onClick={() => handleCategoriaClick(categoria)}>
              <h2>{categoria.titulo}</h2>
              <p>{categoria.descripcion}</p>
              <div className="video-container">
                <iframe
                 src={categoria.video}
                 title={categoria.titulo}
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Inicio;
