import { FormEvent, useRef } from 'react';
import { Session } from '../App';
import Login from './Login';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  addCartItem: (name: string, price: number) => void;
  removeCartItem: (ItemId: number) => void;
};

export default function My({
  session,
  login,
  logout,
  addCartItem,
  removeCartItem,
}: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const addItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value ?? '';
    const price = priceRef.current?.value ?? 0;

    if (!name || !price) {
      alert('name 또는 price를 입력하세요');
    }
    addCartItem(name, +price);
  };
  return (
    <div className='flex flex-col border border-red-300 p-1'>
      <ul>
        {session.cart.map((item) => (
          <li key={item.id}>
            <small>{item.id}</small>
            <strong>{item.name}</strong>
            <small>({item.price.toLocaleString()})</small>
            <button onClick={() => removeCartItem(item.id)}>x</button>
          </li>
        ))}
      </ul>

      <div className='flex justify-center gap-2 border p-2'>
        <input
          type='text'
          ref={nameRef}
          placeholder='name...'
          defaultValue={''}
          className='border border-slate-500 focus:border-blue-300'
        />
        <input
          type='text'
          ref={priceRef}
          placeholder='price...'
          defaultValue={1000}
          className='border border-slate-500 focus:border-blue-300'
        />
        <button className='btn-primary' onClick={addItem}>
          +
        </button>
      </div>
      {session.loginUser ? (
        <button className='btn-primary' onClick={logout}>
          SignOut
        </button>
      ) : (
        <Login login={login} />
      )}
    </div>
  );
}
