import fetchJson, { FetchError } from '@/libs/fetchJson';
import useUser from '@/libs/useUser';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';


export default function LoginPage() {

  const { mutateUser } = useUser({
    redirectTo: "/profile",
    redirectIfFound: true,
  });

  const router = useRouter();

  const [error, setError] = useState(false);

  const [state, setState] = useState({
    username: "admin",
    password: "admin"
  });

  const onFieldChange = (event: any) => {
    let value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = state;

    if (username.length > 0 && password.length > 0) {
      try {
        mutateUser(
          await fetchJson("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
          }),
          false,
        );

        router.push('/profile');
      } catch (error) {
        if (error instanceof FetchError) {
          setError(true);
        } else {
          console.error("An unexpected error happened:", error);
        }
      }
    } else {
      setError(true);
    }

  };

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      <div className="text-xl uppercase pb-5 text-slate-500">Login</div>
      {error && <div className='text-red-500 pb-4'>Invalid username or password</div>}
      <form
        className='w-[300px] flex flex-col gap-3'
        noValidate
        autoComplete='off'
        onSubmit={onSubmit}>

        <input
          className={`w-full p-3 text-sm leading-tight border border-slate-400 rounded focus:outline-none focus:ring-4`}
          type="text"
          placeholder="Username"
          name='username'
          value={state.username}
          maxLength={50}
          onChange={onFieldChange}
        />

        <input
          className={`w-full p-3 text-sm leading-tight border border-slate-400 rounded focus:outline-none focus:ring-4`}
          type="password"
          placeholder="Password"
          name='password'
          value={state.password}
          maxLength={50}
          onChange={onFieldChange}
        />

        <button
          type="submit"
          className='w-full p-3 text text-slate-100 hover:text-white uppercase leading-tight border border-blue-600 bg-blue-500 hover:bg-blue-600 rounded'>Login</button>

        <div className='w-full p-1 text-xs leading-tight border border-slate-400 rounded bg-slate-100'>
          <table className='mx-auto'>
            <tbody>
              <tr>
                <th>Username</th>
                <td>: admin</td>
              </tr>
              <tr>
                <th>Password</th>
                <td>: admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await serverSideTranslations(locale ?? 'id', ['common'])
  return {
    props
  }
}