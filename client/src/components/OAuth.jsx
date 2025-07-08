import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaMicrosoft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth, OAuthProvider, GithubAuthProvider } from 'firebase/auth';
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

    const handleGithubClick = async () => {
        const provider = new GithubAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        provider.addScope('user:email');
        provider.addScope('read:user');

        try {
            const resultsFromGithub = await signInWithPopup(auth, provider);

            // Extract GitHub username for fallback email
            const githubUsername = resultsFromGithub.user.reloadUserInfo?.screenName ||
                resultsFromGithub.additionalUserInfo?.username;

            // Construct email with fallbacks
            const email = resultsFromGithub.user.email ||
                resultsFromGithub.user.providerData[0]?.email ||
                (githubUsername ? `${githubUsername}@users.noreply.github.com` : null);

            // Get display name or use GitHub username as fallback
            const name = resultsFromGithub.user.displayName ||
                resultsFromGithub.user.providerData[0]?.displayName ||
                githubUsername ||
                'GitHub User';

            const res = await fetch('/api/auth/github', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    githubPhotoUrl: resultsFromGithub.user.photoURL,
                }),
            });

            const data = await res.json();

            console.log('GitHub auth response:', data);

            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            console.error('GitHub auth error:', error);
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

            {/* GitHub Button */}
            <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGithubClick}>
                <FaGithub className='w-6 h-6 mr-2' />
                Continue with GitHub
            </Button>
        </>
    )
}