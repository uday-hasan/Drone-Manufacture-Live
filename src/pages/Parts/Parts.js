import { useNavigate } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Navbar from '../Shared/Header/Navbar';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const navigate = useNavigate();
    const { data: parts, isLoading, refetch } = useParts(`https://secret-everglades-45349.herokuapp.com/parts`)
    if (isLoading) {
        return <Loading />
    }
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
        refetch()
    }
    return (
        <>
            <Navbar />
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-24 bg-slate-50'>
                {
                    parts.map(part => <Part part={part} key={part._id} handlePurchase={handlePurchase} />)
                }
            </section>
        </>
    );
};

export default Parts;