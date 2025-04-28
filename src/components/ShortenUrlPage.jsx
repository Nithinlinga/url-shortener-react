import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        if (url) {
            window.location.href = `${import.meta.env.VITE_BACKEND_URL}/${url}`;
        }
    }, [url]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-lg text-gray-700">Redirecting to your link...</p>
        </div>
    );
};

export default ShortenUrlPage;
