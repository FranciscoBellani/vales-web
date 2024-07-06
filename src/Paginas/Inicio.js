import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categorias = [
  { titulo: 'Entradas', descripcion: 'Deliciosas entradas', video: 'link-a-video' },
  { titulo: 'Platos principales', descripcion: 'Sabrosos platos principales', video: 'link-a-video' },
  { titulo: 'Postres', descripcion: 'Irresistibles postres', video: 'link-a-video' },
  { titulo: 'Bebidas', descripcion: 'Refrescantes bebidas', video: 'link-a-video' },
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
    verticalSwiping: true
  };

  const handleCategoriaClick = (categoria) => {
    navigate(`/listado-platos/${categoria.titulo}`);
  };

  return (
    <div className="inicio">
      <div className="container mt-5">
        <Slider {...settings}>
          {categorias.map((categoria, index) => (
            <div key={index} className="categoria" onClick={() => handleCategoriaClick(categoria)}>
              <h2>{categoria.titulo}</h2>
              <p>{categoria.descripcion}</p>
              <video controls>
                <source src={categoria.video} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Inicio;
