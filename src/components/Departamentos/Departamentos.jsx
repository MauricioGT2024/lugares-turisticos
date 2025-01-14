import { Link } from 'react-router-dom';
import './Departamentos.css';

function Departamentos() {
  const departments = [
    {
      id: 1,
      name: 'Tinogasta',
      image: 'img/Tinogasta/Capital.jpg',
      description: 'Descubre la belleza natural y cultural de Tinogasta',
      path: '/tinogasta'
    },
    {
      id: 2,
      name: 'Fiambalá',
      image: 'img/Fiambala/Capital.jpg',
      description: 'Explora las maravillas termales y paisajes de Fiambalá',
      path: '/fiambala'
    },
    {
      id: 3,
      name: 'Catamarca Capital',
      image: 'img/San Fernando Del Valle De Catamarca/Capital.jpg',
      description: 'Visita la histórica capital de la provincia',
      path: '/catamarca'
    },
    {
      id: 4,
      name: 'Antofagasta de la Sierra',
      image: 'img/Antofagasta-de-la-Sierra/Capital.jpg',
      description: 'Descubre los paisajes volcánicos y salares de la Puna',
      path: '/antofagasta'
    }
  ];

  return (
    <div className="departments-container">
      <div className="departments-grid">
        {departments.map((dept) => (
          <Link to={dept.path} key={dept.id} className="department-card">
            <img 
              src={dept.image} 
              alt={dept.name} 
              className="department-image"
              loading="lazy"
            />
            <div className="department-content">
              <h2 className="department-title">{dept.name}</h2>
              <p className="department-description">{dept.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Departamentos;
