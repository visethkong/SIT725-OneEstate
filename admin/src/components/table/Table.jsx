import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Villa Queen",
      img: "https://boreylongny.com/wp-content/uploads/2018/04/1-11-4.jpg",
      customer: "San David",
      date: "1 March",
      amount: 785,
      method: "Cash",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Apartment 32",
      img: "https://www.amory.com.kh/wp-content/uploads/2021/01/20201229_VILLA_QUEEN_MERA.webp",
      customer: "Michael Tola",
      date: "12 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "House Sammy",
      img: "https://s3-ap-southeast-1.amazonaws.com/yp-s3-dev/uploads/4/20220520045110/f1.jpg",
      customer: "Smith Garcia",
      date: "5 April",
      amount: 355,
      method: "Cash",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "House Narnia",
      img: "https://boreypenghuoth.com/wp-content/uploads/2020/02/Shop_House_Modern.jpg",
      customer: "Jane",
      date: "15 June",
      amount: 920,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Shop House",
      img: "https://boreypenghuoth.com/wp-content/uploads/2018/07/SHD.jpg",
      customer: "Linney Carol",
      date: "18 August",
      amount: 2000,
      method: "Online Payment",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Properties</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
