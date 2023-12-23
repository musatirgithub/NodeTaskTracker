import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuthCalls from '../hooks/useAuthCalls';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const VerifyEmail = () => {
    const [pageLoading, setPageLoading] = useState(true);
    const {error} = useSelector((state)=>state.auth)

    const {verifyEmail} = useAuthCalls();
    const query = useQuery();
    const userInfo = {
        email:query.get("email"),
        verificationToken:query.get("token")
    }
    useEffect(() => {
        setPageLoading(true);
        setTimeout(()=>{
          verifyEmail(userInfo)
        }, 3000)
        setPageLoading(false);
    }, [])

    if(pageLoading){
        return(
          <main className='flex justify-center items-center min-h-[calc(100vh-8rem)]'>
            <div className='text-2xl capitalize'>Loading...</div>
            </main>
        )
    }
    
    if(error){
      return(
        <section className='text-2xl capitalize min-h-[calc(100vh-8rem)] flex justify-center items-center'>
          Something went wrong...
        </section>
      )
    }
  return (
    <main className='text-2xl capitalize min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center gap-5'>
        <h4 className=''>You are being verified.</h4>
        <h4 className=''>After verification you'll be redirected to Login Page.</h4>
        {/* <Link to='/login'>
        <button className='btn btn-warning'>Login</button>
        </Link> */}
    </main>

  )
}

export default VerifyEmail