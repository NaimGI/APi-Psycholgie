export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "username",
    width: 230,

  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field:"isAdmin",
    headerName:"Role",
    width:150,
  },
 
];
export const parentsColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  {
    field: "first_name",
    headerName: "first_name",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">

        <img className="cellImg" src={params.row.img || "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg"} alt="avatar" />
          {params.row.last_name}
        </div>
      );
    },
  },
 
  {
    field: "email",
    headerName: "email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 130,
   
  },
  
];
export const ChildrenColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "first_name",
    headerName: "first_name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">

        <img className="cellImg" src={params.row.img || "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg"} alt="avatar" />
          {params.row.last_name}
        </div>
      );
    },
  },
 
  {
    field: "last_name",
    headerName: "last_name",
    width: 150,
  },
  {
    field: "birthday_date",
    headerName: "birthday_date",
    width: 160,
   
  },
  
  
];

//temporary data
export const userRows = [
  {
    _id: 1,
    Parent: "Snow",
    Email: "1snow@gmail.com",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ChildrenNumber: "23",
    
  },
  {
    _id: 2,
    Parent: "Snow",
    Email: "1snow@gmail.com",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ChildrenNumber: "23",
   
  },
  {
    _id: 3,
    Parent: "Snow",
    Email: "1snow@gmail.com",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ChildrenNumber: "23",
  
  },
  {
    _id: 4,
    Parent: "Snow",
    Email: "1snow@gmail.com",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ChildrenNumber: "23",
   
  },
  {
    _id: 5,
    Parent: "Snow",
    Email: "1snow@gmail.com",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ChildrenNumber: "23",
  },
  {
    _id: 6,
    Parent: "Snow",
    Email: "1snow@gmail.com",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ChildrenNumber: "23",
    
  },
  {
    _id: 7,
    Parent: "Snow",
    Email: "1snow@gmail.com",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ChildrenNumber: "23",
  },
 
];
