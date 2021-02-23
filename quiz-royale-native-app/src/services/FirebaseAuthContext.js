import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import { auth } from "./FirebaseApp";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}
	// function login(provider) {
	// 	const providers = {
	// 		google: firebase.auth.GoogleAuthProvider,
	// 		facebook: firebase.auth.FacebookAuthProvider,
	// 	};

	// 	return auth.signInWithPopup(new providers[provider]());
	// }

	function logout() {
		return auth.signOut();
	}

	function register(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function updateName(name) {
		currentUser
			.updateProfile({
				displayName: name,
			})
			// .then(function () {
			// 	// Update successful.
			// })
			.catch(function (error) {
				// An error happened.
			});
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		login,
		logout,
		register,
		updateName,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
