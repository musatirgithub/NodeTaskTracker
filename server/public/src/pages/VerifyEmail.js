import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuthCalls from '../hooks/useAuthCalls';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const VerifyEmail = () => {
    const [pageLoading, setPageLoading] = useState(false);
    const {error} = useSelector((state)=>state.auth)

    const {verifyEmail} = useAuthCalls();
    const query = useQuery();
    const userInfo = {
        email:query.get("email"),
        verificationToken:query.get("token")
    }
    useEffect(() => {
        setPageLoading(true);
        verifyEmail(userInfo)
        setPageLoading(false);
    }, [])

    if(pageLoading){
        return(
            <div>Loading...</div>
        )
    }
    
    if(error){
      return(
        <section className='text-2xl capitalize min-h-[calc(full-10rem)] flex justify-center items-center'>
          Something went wrong...
        </section>
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