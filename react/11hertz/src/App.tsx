import { useState } from 'react';
import './App.css';
import My from './components/My';
import Hello from './components/Hello';

export type Session = {
  loginUser: { id: number; name: string } | null;
  cart: { id: number; name: string; price: number }[];
};

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

const useCount = (initValue: number) => {
  const [count, setCount] = useState(initValue);
  return { count, setCount };
};

function App() {
  const { count, setCount } = useCount(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const login = (id: number, name: string) =>
    setSession({ ...session, loginUser: { id, name } });

  const logout = () => setSession({ ...session, loginUser: null });

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
    setSession({
      ...session,
      cart: [...session.cart, { id, name, price }],
    });
  };

  const removeCartItem = (itemId: number) =>
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });

  return (
    <>
      <Hello name='11hertz' age={count}>
        <strong>Hello, children</strong>
      </Hello>
      {session.loginUser?.name}
      <My
        session={session}
        login={login}
        logout={logout}
        addCartItem={addCartItem}
        removeCartItem={removeCartItem}
      />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
