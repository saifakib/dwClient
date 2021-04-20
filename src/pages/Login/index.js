import { useContext } from 'react'
import { UserContext } from '../../app/App'
import firebase from "firebase/app";
//import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import { useHistory, useLocation } from 'react-router-dom'


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function Login() {

    const provider = new firebase.auth.GoogleAuthProvider();
    const { createUser } = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const firebaseToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            console.log(error)
        });

    }

    const loginevent = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user
                const signedInUser = {
                    name: displayName,
                    email: email
                }
                createUser(signedInUser);
                firebaseToken()
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={loginevent}>Login With Google</button>
        </div>
    )
}
