import { useRef } from 'react';

type Props = {
  login: (id: number, name: string) => void;
};

export default function Login({ login }: Props) {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState('');
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  console.log(idRef.current?.value, nameRef.current?.value);

  const submitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const id = idRef.current?.value ?? 0;
    const name = nameRef.current?.value ?? '';

    if (id && name) {
      login(+id, name);
    }
  };

  return (
    <div className='border-2'>
      <h1>SignIn</h1>
      <form onSubmit={(evt) => submitHandle(evt)}>
        <input type='number' placeholder='Id...' ref={idRef} />
        <input type='text' placeholder='Name...' ref={nameRef} />
        <button type='submit'>SignIn</button>
      </form>
    </div>
  );
}
