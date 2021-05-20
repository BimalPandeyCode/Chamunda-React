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
  },
];

export default data;
