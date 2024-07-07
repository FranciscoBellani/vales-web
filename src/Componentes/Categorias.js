// src/Componentes/categorias.js

const categorias = [
  { titulo: 'Entradas', descripcion: 'Deliciosas entradas', video: 'link-a-video', platos: [] },
  { titulo: 'Platos principales', descripcion: 'Sabrosos platos principales', video: 'link-a-video', platos: [] },
  { titulo: 'Postres', descripcion: 'Irresistibles postres', video: 'link-a-video', platos: [] },
  { titulo: 'Bebidas', descripcion: 'Refrescantes bebidas', video: 'link-a-video', platos: [] },
  { titulo: 'Tablas', descripcion: 'Jamones Ibericos', video: 'link-a-video', platos: [] },
];
const Categorias = ({ onCategoriaClick }) => {
  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index} onClick={() => onCategoriaClick(categoria)}>
            <h3>{categoria.titulo}</h3>
            <p>{categoria.descripcion}</p>
            <video src={categoria.video} controls />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default categorias;

