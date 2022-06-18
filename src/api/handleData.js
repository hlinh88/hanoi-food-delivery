import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

const pushData = async (
  uid,
  campus,
  subjects,
  email,
  avatar,
  fullName,
  dob,
  purpose,
  facebook,
  bio
) => {
  try {
    await setDoc(doc(db, "users", uid), {
      campus: campus,
      subjects: subjects,
      email: email,
      avatar: avatar,
      fullName: fullName,
      dob: dob,
      purpose: purpose,
      facebook: facebook,
      bio: bio,
    });
    console.log("Document written with ID: ", auth.currentUser.uid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { pushData };
