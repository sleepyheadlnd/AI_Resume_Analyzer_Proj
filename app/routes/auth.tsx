import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => {
    [
        { title: "Reslyzer | Auth" },
        { name: "description", content: "Log into your account" },
    ]
}

const Auth = () => {

    const {isLoading,auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);

    },[auth.isAuthenticated,next]);

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover  min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow p-3">
                <section className="flex flex-col gap-8 bg-white p-10 rounded-2xl">
                    <div className="items-center text-center flex flex-col">
                        <h1>Welcom</h1>
                        <h2>Please log into your account</h2>
                    </div>
                    <div>
                        {isLoading? (
                            <button className="auth-button animate-pulse"><p>Signing you in....</p></button>
                        ) //The page is loading
                             :
                            (
                                <>
                                {auth.isAuthenticated? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                    )//If already signed in
                                    :
                                    (
                                        <button className="auth-button" onClick={auth.signIn}>
                                            <p>Log In</p>
                                        </button>
                                    )//If not signed in
                                }
                                </>
                            )
                        }
                    </div> {/*Log in screen*/}
                </section>

            </div>
        </main>
    )
}
export default Auth
