const data = [
  {
    id: 0,
    name: "Bimal Pandey",
    rating: 1,
    noOfRateing: 12,
    prevPrice: 1000,
    currPrice: 950,
    image:
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    otherImages: [
      "https://images.unsplash.com/photo-1621390166430-2b004f6f4e39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1621433117294-483ab26c0f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    ],
    description: {
      Gender: "Male",
      Age: 19,
      Education: "Just joined bachelor, completed Highschool.",
      Skills: "",
      SkinColor: "Darkish brown",
      HairColor: "Black",
    },
    AboutThisItem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 1,
    name: "Shiva Pandey",
    rating: 4.5,
    noOfRateing: 25,
    prevPrice: 900,
    currPrice: 830,
    image:
      "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    otherImages: [
      "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1621433117294-483ab26c0f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    ],
    description: {
      Gender: "Male",
      Age: 25,
      Education: "",
      Skills: "",
      SkinColor: "Darkish brown",
      HairColor: "Black",
      Height: "5'10\"",
      Weight: "60kg",
    },
    AboutThisItem:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\n There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
  },
  {
    id: 2,
    name: "Binod Pandey",
    rating: 3,
    noOfRateing: 32,
    prevPrice: 970,
    currPrice: 954,
    image:
      "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    otherImages: [
      "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1621433117294-483ab26c0f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    ],
    description: {
      Gender: "Male",
      Age: 24,
      Education: "Waiting result for 4th year's examination",
      Skills: "",
      SkinColor: "light brown",
      HairColor: "Black",
      Height: "5'11\"",
      Weight: "70kg",
      Job: "Flex print operator",
    },
    AboutThisItem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    name: "Purna Bahadur Pandey",
    rating: 3.5,
    noOfRateing: 100,
    prevPrice: 950,
    currPrice: 930,
    image:
      "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    otherImages: [
      "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1621433117294-483ab26c0f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    ],
    description: {
      Gender: "Male",
      Age: 60,
      Education: "",
      Skills: "",
      SkinColor: "light brown",
      HairColor: "bald",
      Height: "5'11\"",
      Weight: "70kg",
      Job: "Businessman",
      MaritalStatus: "Married",
    },
    AboutThisItem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    name: "Dhal Kumari Pandey",
    rating: 3.5,
    noOfRateing: 120,
    prevPrice: 1000,
    currPrice: 1000,
    image:
      "https://images.unsplash.com/photo-1605804097616-ed12e891e514?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    otherImages: [
      "https://images.unsplash.com/photo-1605804097616-ed12e891e514?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1621433117294-483ab26c0f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    ],
    description: {
      Gender: "Female",
      Age: 60,
      Education: "None",
      Skills: "",
      SkinColor: "dark brown",
      HairColor: "black",
      Height: "5'9\"",
      Weight: "60kg",
      Job: "Housewife",
      MaritalStatus: "Married",
    },
    AboutThisItem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    name: "Tejaswi Budathoki",
    rating: 4,
    noOfRateing: 1200,
    prevPrice: 910,
    currPrice: 870,
    image:
      "https://images.unsplash.com/photo-1525969173369-c9d513909d5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDE2JTNBOXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    otherImages: [
      "https://images.unsplash.com/photo-1525969173369-c9d513909d5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDE2JTNBOXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1621433117294-483ab26c0f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    ],
    description: {
      Gender: "Female",
      Age: 13,
      Education: "Grade 6",
      Skills: "",
      SkinColor: "light brown",
      HairColor: "Black",
      Height: "5'0\"",
      Weight: "40kg",
    },
    AboutThisItem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    name: "Hitesh Budathoki",
    rating: 2.5,
    noOfRateing: 12593,
    prevPrice: 1000,
    currPrice: 999,
    image:
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    otherImages: [
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1595835018349-198460e1d309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1621433117294-483ab26c0f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    ],
    description: {
      Gender: "Female",
      Age: 2,
      Education: "Nursery",
      Skills: "None",
      SkinColor: "black",
      HairColor: "bald",
      Height: "1'0\"",
      Weight: "10kg",
      Job: "Toilet Cleaner",
      MaritalStatus: "Married",
      Relationship: "Yes",
    },
    AboutThisItem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default data;
