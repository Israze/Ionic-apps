import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { createUserWithEmailAndPassword, Auth, signInWithEmailAndPassword, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore"; 
import { RouterLink, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  errorCode: any;
  currentUser: any = null;

  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {}

  async registerUsers(email: string, password: string, name: string, phone: string): Promise<boolean> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      console.log(user);

      console.log("writing to database");
      const docRef = await addDoc(collection(this.firestore, "users"), {
        uid: user.uid,
        name: name,
        email: email,
        phone: phone,
        balance: 0.00,
        
      });
      console.log("Document written with ID: ", docRef.id);
      return true;
    } catch (error: any) {
      this.errorCode = error.code;
      const errorMessage = error.message;
      console.log(this.errorCode);
      console.log(errorMessage);
      return false;
    }
  }

  async loginUsers(email: string, password: string): Promise<boolean> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      console.log(user);

      // Fetch additional user data from Firestore using the UID field
      const usersRef = collection(this.firestore, "users");
      const q = query(usersRef, where("uid", "==", user.uid)); // Query for the user's document
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          this.currentUser = doc.data(); // Store the user's data in the service
          console.log("User data:", this.currentUser);
        });
        this.router.navigate(['/home']);
        return true;
      } else {
        console.log("No such document!");
        return false;
      }
    } catch (error: any) {
      this.errorCode = error.code;
      const errorMessage = error.message;
      console.log(this.errorCode);
      console.log(errorMessage);
      return false;
    }
  }

  // Method to get the current user's data
  getCurrentUser() {
    return this.currentUser;
  }

  // Listen for auth state changes
  listenForAuthStateChanges() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        // User is signed in, fetch their data
        const usersRef = collection(this.firestore, "users");
        const q = query(usersRef, where("uid", "==", user.uid)); // Query for the user's document
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            this.currentUser = doc.data();
            console.log("User data:", this.currentUser);
          });
        } else {
          console.log("No such document!");
        }
      } else {
        // User is signed out
        this.currentUser = null;
      }
    });
  }
  


}