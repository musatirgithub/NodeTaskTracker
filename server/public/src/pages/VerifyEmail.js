import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuthCalls from '../hooks/useAuthCalls';
import { useSelector } from 'react-redux';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const VerifyEmail = () => {
    const [pageLoading, setPageLoading] = useState(false);

    const {loading} = useSelector((state)=>state.auth)

    const {verifyEmail} = useAuthCalls();
    const query = useQuery();
    const userInfo = {
        email:query.get("email"),
        verificationToken:query.get("token")
    }
    useEffect(() => {
        verifyEmail(userInfo)
    }, [])

    if(pageLoading){
        return(
            <div>Loading...</div>
        )
    }
    
  return (
    <main className='text-2xl capitalize min-h-screen flex flex-col justify-center items-center gap-5'>
        <h4 className=''>You are verified.</h4>
        <Link to='/login'>
        <button className='btn btn-warning'>Login</button>
        </Link>
    </main>

  )
}

export default VerifyEmail