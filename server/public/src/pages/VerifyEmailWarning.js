import { Link } from "react-router-dom"

const VerifyEmailWarning = () => {
  return (
    <main className="max-w-xl mx-auto p-5 min-h-vh">
        <h3 className="text-xl ">A confirmation link has been sent to your E-mail Address.</h3>
        <h5 className="text-md bg-red-700 text-white">Please don't forget to check spam mails if you don't get the mail!</h5>
        <Link to='/login'>
        <button className="btn btn-accent">Login Page</button>
        </Link>
    </main>
  )
}

export default VerifyEmailWarning