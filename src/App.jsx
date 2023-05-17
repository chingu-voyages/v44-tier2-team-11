import 'tailwindcss/tailwind.css';
import Nav from './components/arena/Nav'

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative bg-red-300 px-8 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 ">
          <Nav />
        </div>
      </div>
    </>
  );
}

export default App;
