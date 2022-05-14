const employees = [
  {
    name: "Sultana Parveen",
    firstName: "Sultana",
    lastName: "Parveen",
    email: "mahbpo.it@gmail.com",
    employeeID: 1,
    DOB: "15-2-1982",
    presentDistrict: "Dhaka",
    presentThana: "Ramna",
    contactNumber: "017455445698",
    educationQualification: "Master of Science",
    professionalQualification: "Employee of month April 2022",
    trainingRecieved: "Accounts and Finance",
    joiningDate: "10-7-2007",
    joiningDesignation: "Trainee Officer",
    presentDesignation: "Senior Officer",
    lastPromotionDate: "19-1-2022",
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
        startDate: "1-2-2010",
        endDate: "5-6-2011",
        positions: ["Trainee Officer", "Junior Officer"],
      },
      {
        branchName: "Bashundhara",
        startDate: "1-2-2011",
        endDate: "5-6-2011",
        positions: ["Trainee Officer", "Junior Officer"],
      },
    ],
    salary: {
      grandSalary: {
        basicPay: 35000,
        houseRent: 95000,
        conveyance: 85000,
        Medical: 6000,
        houseMaintanence: 12000,
      },
      promotions: [
        {
          revisonNo: 1,
          fromDesignation: "Trainee Junior Officer",
          toDesignation: "Junior Officer",
          date: "5-9-2006",
          increasedAmount: "10000",
        },
        {
          revisonNo: 2,
          fromDesignation: "Junior Officer",
          toDesignation: "Officer",
          date: "4-5-2008",
          increasedAmount: "12000",
        },
        {
          revisonNo: 3,
          fromDesignation: "Officer",
          toDesignation: "Senior Officer",
          date: "4-5-2010",
          increasedAmount: "10500",
        },
      ],
      Branches: [
        {
          branchName: "Gulshan",
          startDate: "5-6-18",
          endDate: "9-9-18",
          positions: ["TSO", "JO", "SOE"],
        },
        {
          branchName: "Badda",
          startDate: "9-9-18",
          endDate: "9-9-19",
          positions: ["VP", "Executive", "SFE"],
        },
      ],
    },
    department: "finance",
    branchName: "Gulshan",
    role: "user",
    gender: "female",
  },
  {
    name: "Mushfiqur Rahman",
    firstName: "Mushfiqur",
    lastName: "Rahman",
    email: "razon1494@gmail.com",
    employeeID: 2,
    DOB: "15 - 2 - 1985",
    presentDistrict: "Dhaka",
    presentThana: "Ramna",
    contactNumber: "017455445698",
    educationQualification: "Master of Buisiness",
    professionalQualification: "Employee of month April 2023",
    trainingRecieved: "",
    joiningDate: "10 - 7 - 2007",
    joiningDesignation: "Junior Officer",
    presentDesignation: "Branch Manager",
    lastPromotionDate: "19 - 1 - 2022",
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
    salary: {
      grandSalary: {
        basicPay: 41000,
        houseRent: 15000,
        conveyance: 6000,
        Medical: 5000,
        houseMaintanence: 10000,
      },
      promotions: [
        {
          revisonNo: 1,
          fromDesignation: "Junnior Officer",
          toDesignation: "Vice President",
          date: "5-9-2008",
          increasedAmount: "10000",
        },
        {
          revisonNo: 2,
          fromDesignation: "Vice President",
          toDesignation: "President",
          date: "5-9-2008",
          increasedAmount: "10000",
        },
      ],
      Branches: [
        {
          branchName: "Mouchak",
          startDate: "5-6-18",
          endDate: "9-9-18",
          positions: ["TSO", "JO", "SOE"],
        },
        {
          branchName: "Dhanmondi",
          startDate: "9-9-18",
          endDate: "9-9-19",
          positions: ["VP", "Executive", "SFE"],
        },
      ],
    },
    department: "Accounts",
    branchName: "Badda",
    role: "admin",
    gender: "male",
  },
  {
    name: "Shakib Al Hasan",
    firstName: "Shakib",
    lastName: "Al Hasan",
    email: "arifur.rahman.cse1@gmail.com",
    employeeID: 3,
    DOB: "16-5-1994",
    presentDistrict: "Dhaka",
    presentThana: "Uttara",
    contactNumber: "01744941494",
    educationQualification: "BS.c Engineer",
    professionalQualification: "Employee of year 2022",
    trainingRecieved: "Web Development and IT",
    joiningDate: "19-5-2022",
    joiningDesignation: "IT Executive",
    presentDesignation: "Head",
    lastPromotionDate: "19 - 1 - 2022",
    leave: {
      clBalance: 12,
      clAvailed: 8,
      plBalance: 25,
      plAvailed: 9,
      slBalance: 23,
      slAvailed: 5,
      leaveWithoutPayAvailed: 4,
      mlAvailed: 3,
      ctsAvailed: 2,
    },
    salary: {
      grandSalary: {
        basicPay: 50000,
        houseRent: 17000,
        conveyance: 12000,
        Medical: 9000,
        houseMaintanence: 18000,
      },
      promotions: [
        {
          revisonNo: 1,
          fromDesignation: "IT Executive",
          toDesignation: "Additonal Head",
          date: "5-9-2008",
          increasedAmount: "12000",
        },
        {
          revisonNo: 2,
          fromDesignation: "Additonal Head",
          toDesignation: "Manager",
          date: "5-9-2008",
          increasedAmount: "10000",
        },
      ],
      Branches: [
        {
          branchName: "Mouchak",
          startDate: "5-6-18",
          endDate: "9-9-18",
          positions: ["TSO", "JO", "SOE"],
        },
        {
          branchName: "Dhanmondi",
          startDate: "9-9-18",
          endDate: "9-9-19",
          positions: ["VP", "Executive", "SFE"],
        },
      ],
    },
    department: "Accounts",
    branchName: "Badda",
    role: "admin",
    gender: "male",
  },
];
export default employees;
