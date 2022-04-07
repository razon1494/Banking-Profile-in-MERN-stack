import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeFirebase from "../Firebase/firebase.initialize";
//initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [person, setPerson] = useState({});

  const googleProvider = new GoogleAuthProvider();

  //register user
  const registerUser = (email, password, history, userData) => {
    setIsLoading(true);
    console.log("From register user", email);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        // const newUser = userData;
        //send name to firebase after creation
        // setUser(newUser);
        //save user to the database
        // saveUser(email, name, "POST");
        addUser(userData).then(() => {
          Swal.fire("Done!", "Registration Completed", "success");
        });
        history.replace("/register");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Sorry...Rejected",
          text: `${authError.slice(22)}`,
        });
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "from admin finder");
        setAdmin(data.admin);
      });
  }, [user.email, checkAdmin]);
  // Get Person
  const GetPerson = (email) => {
    useEffect(() => {
      fetch(`http://localhost:5000/getuser/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setPerson(data.user);
        });
    }, [email]);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/getuser/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data.user);
      });
  }, [user]);
  //sign in
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //location set
        //to redirect admin dashboard
        if (admin) {
          const destination = location.state?.from || "/profile";
          history.replace(destination);
        } else {
          console.log("else");
          const destination = location.state?.from || "/profile";
          history.replace(destination);
        }
        // Signed in
        setAuthError("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.code, "s", error.message, "d");
        const errorMessage = error.message;
        setAuthError(errorMessage);
        // alert(authError.slice(22))
        Swal.fire({
          icon: "error",
          title: "Sorry...Rejected",
          text: `${authError.slice(22)}`,
        });
      })
      .finally(() => setIsLoading(false));
  };

  //google sign in
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location.state?.from || "/";
        history(destination, { replace: true });
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // GetPerson(user.email);
        getIdToken(user).then((idToken) => {});
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //admin check for admin route
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);
  //user check for user route
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "from db");
        setIsUser(data.user);
      });
  }, [user.email]);

  //log out
  const logout = (history) => {
    history.push("/");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setAuthError(error.message);
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  //log out for register user again login
  const logout2 = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setAuthError(error.message);
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //save user function
  const saveUser = (email, displayName, method) => {
    const role = "user";
    const user = { email, displayName, role };
    fetch("https://immense-escarpment-32991.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // save registered user
  const addUser = (userData) => {
    console.log(userData, "from Add");
    const mainData = createUserData(userData);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mainData),
    }).then(console.log("Add Success"));
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const createUserData = (userData) => {
    const {
      address,
      basicSalary,
      branch,
      contact,
      conveyance,
      department,
      designation,
      dob,
      education,
      email,
      fname,
      gender,
      houseMaint,
      houseRent,
      lname,
      medical,
      password,
      role,
      userName,
    } = userData;
    return {
      name: userName,
      firstName: fname,
      lastName: lname,
      email: email,
      employeeID: 1,
      DOB: dob,
      presentDistrict: "Dhaka",
      presentThana: "",
      address: address,
      contactNumber: contact,
      educationQualification: education,
      professionalQualification: "",
      trainingRecieved: "",
      joiningDate: new Date(),
      joiningDesignation: designation,
      presentDesignation: designation,
      lastPromotionDate: "",
      leave: {
        clBalance: 10,
        clAvailed: 0,
        plBalance: 90,
        plAvailed: 0,
        slBalance: 28,
        slAvailed: 0,
        leaveWithoutPayAvailed: 0,
        mlAvailed: 0,
        ctsAvailed: 0,
      },
      branches: [
        {
          branchName: "Uttara",
          startDate: new Date(),
          endDate: "",
          positions: ["Trainee Officer"],
        },
      ],
      salary: {
        grandSalary: {
          basicPay: basicSalary,
          houseRent: houseRent,
          conveyance: conveyance,
          Medical: medical,
          houseMaintanence: houseMaint,
        },
        promotions: [],
        Branches: [
          {
            branchName: branch,
            startDate: new Date(),
            endDate: "",
            positions: [designation],
          },
        ],
      },
      department: department,
      branchName: branch,
      role: role,
      gender: gender,
    };
  };
  return {
    user,
    users,
    person,
    admin,
    isLoading,
    isUser,
    GetPerson,
    addUser,
    signInWithGoogle,
    registerUser,
    loginUser,
    authError,
    checkAdmin,
    setCheckAdmin,
    logout,
  };
};

export default useFirebase;
