import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { createUserWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore"; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  errorCode: any;
  
  constructor(private auth: Auth, private db: Firestore) {}

  async registerUsers(email: string, password: string, name: string, phone: string): Promise<boolean> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      console.log(user);

      console.log("writing to database");
      const docRef = await addDoc(collection(this.db, "users"), {
        name: name,
        email: email,
        phone: phone
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
}