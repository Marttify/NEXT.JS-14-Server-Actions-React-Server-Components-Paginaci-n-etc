import LikeButton from '@/components/ui/like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = [
    'Ada Lovelace',
    'Grace Hopper',
    'Margaret Hamilton',
    'Ana',
    'Luis',
    'Marta',
    'Jorge',
    'Sofía',
    'Carlos',
    'Lucía',
    'Fernando',
    'Elena',
    'Pablo',
  ];

  return (
    <div>
      <Header title="Lista de estudiantes:" />
      <ul className="mt-10">
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <LikeButton />
    </div>
  );
}
