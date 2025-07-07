import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaMicrosoft } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth, OAuthProvider } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        provider.addScope('email')
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    // email: resultsFromGoogle.user.email,
                    email: resultsFromGoogle.user.email || resultsFromGoogle.user.providerData[0]?.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
            })

            console.log('Google user object:', resultsFromGoogle);
            const data = await res.json()
            if (res.ok) {
                dispatch(signInSuccess(data))
                navigate('/')
            }
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleMicrosoftClick = async () => {
        const provider = new OAuthProvider('microsoft.com');
        provider.setCustomParameters({ prompt: 'select_account' });
        provider.addScope('email')
        try {
            const resultsFromMicrosoft = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/microsoft', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({
                //     name: resultsFromMicrosoft.user.displayName,
                //     email: resultsFromMicrosoft.user.email,
                //     microsoftPhotoUrl: resultsFromMicrosoft.user.photoURL,
                // }),
                body: JSON.stringify({
                    name: resultsFromMicrosoft.user.displayName,
                    email: resultsFromMicrosoft.user.email || resultsFromMicrosoft.user.providerData[0]?.email,
                    microsoftPhotoUrl: resultsFromMicrosoft.user.photoURL,
                }),
            });
            const data = await res.json();

            console.log('Microsoft user object:', resultsFromMicrosoft.user);
            console.log('Provider data:', resultsFromMicrosoft.user.providerData);
            console.log('Response from server:', data);

            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <>
            <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
                <AiFillGoogleCircle className='w-6 h-6 mr-2' />
                Continue with Google
            </Button>

            <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleMicrosoftClick}>
                <FaMicrosoft className='w-6 h-6 mr-2' />
                Continue with Microsoft
            </Button>
        </>


    )
}