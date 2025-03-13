import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 px-4 text-center">
      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-stone-700 mb-4">Something went wrong 😢</h1>
        <p className="text-stone-600 mb-6">{error.data || error.message}</p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300"
        >
          &larr; Go back
        </button>
      </div>
    </div>
  );
}

export default Error;
