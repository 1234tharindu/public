import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ActionAreaCard from "../component/ActionAreaCard";

// Assuming you have the images imported in the relevant file or index
import DWHIcon from "../images/DWH_icon.png";
import AdminIcon from "../images/Admin_icon.png";
import DashboardIcon from "../images/Dashboad_icon.png";
import FinanceIcon from "../images/Finance_icon.png";
//import HRMIcon from '../images/HRM_icon.png';
import IMSIcon from "../images/IMS_icon.png";
import PayrollIcon from "../images/Payroll_icon.png";
import PurchaseIcon from "../images/Purchase_icon.png";
import RaceabilityIcon from "../images/Raceability_icon.png";
import SupplyIcon from "../images/Supply_icon.png";
import WaterQualityIcon from "../images/WQ_icon.png";
import hr from "../images/hr.jpg";
// import Header from '../component/Header';
import Footer from "../component/Footer";
import Menubar from "../component/MenuBar";
import { Box, ThemeProvider } from "@mui/material";
//import Responsebar from '../component/Responsebar';
//new images
import hr1 from "../images/homeCardImages/hrmIcon.png";
import PayrollIcon1 from "../images/homeCardImages/payrollIcon.png";
import PurchaseIcon1 from "../images/homeCardImages/purchasingIcon.png";
import SupplyIcon1 from "../images/homeCardImages/suppliesIcon.png";
import IMSIcon1 from "../images/homeCardImages/inventoryIcon.png";
import WaterQualityIcon1 from "../images/homeCardImages/wqIcon.png";
import FinanceIcon1 from "../images/homeCardImages/financeIcon.png";
import DWHIcon1 from "../images/homeCardImages/dataWareHouseIcon.png";
import AdminIcon1 from "../images/homeCardImages/adminIcon.png";
import DashboardIcon1 from "../images/homeCardImages/erpDashBoardIcon.png";
import RaceabilityIcon1 from "../images/homeCardImages/traceabilityIcon.png";

const cardContent = [
  {
    title: "Human Resources",
    description: "Human Resources",
    image: hr1,
    link: "/hrhome",
    moduleId: 1,
  },
  {
    title: "Payroll",
    description: "Payroll",
    image: PayrollIcon1,
    link: "/homePages/payrollHome",
    moduleId: 2,
  },
  {
    title: "Purchase",
    description: "Purchase",
    image: PurchaseIcon1,
    link: "/homePages/payrollHome",
    moduleId: 3,
  },
  {
    title: "Supply",
    description:
      "Revolutionize your supply chain with our software solution. From inventory tracking to order management, ensure a smooth flow of supplies. Minimize wastage, optimize stock levels, and enhance overall supply chain efficiency for sustained organizational success.",
    image: SupplyIcon1,
    link: "/HRHome",
    moduleId: 4,
  },
  {
    title: "Inventory",
    description:
      "Efficiently manage and monitor your inventory with our software solution. Experience real-time tracking, automated updates, and strategic insights to optimize stock levels. Enhance control, minimize discrepancies, and ensure a seamless flow in your inventory management processes.",
    image: IMSIcon1,
    link: "/HRHome",
    moduleId: 5,
  },
  {
    title: "Water Quality",
    description:
      "Ensure the highest standards in water quality with our software solution. Implement advanced monitoring, data analysis, and reporting tools to safeguard water integrity. Uphold regulatory compliance and swiftly respond to any quality concerns for a healthier water supply system.",
    image: WaterQualityIcon1,
    link: "/HRHome",
    moduleId: 6,
  },
  {
    title: "Finance",
    description:
      "Empower your financial management with our software solution. From budgeting and forecasting to expense tracking, gain comprehensive control and visibility into your financial landscape. Maximize accuracy, reduce manual errors, and drive financial excellence for your organization.",
    image: FinanceIcon1,
    link: "/HRHome",
    moduleId: 7,
  },
  {
    title: "Data Warehouse",
    description:
      "Centralize and optimize your data resources with our software solution. Elevate data accessibility, integrity, and analytical capabilities with a robust data warehouse infrastructure. Unleash the power of organized and insightful data for informed decision-making and strategic planning.",
    image: DWHIcon1,
    link: "/HRHome",
    moduleId: 8,
  },
  {
    title: "Administration",
    description:
      "Simplify administrative tasks with our software solution. From document management to task tracking, enhance organizational efficiency. Streamline workflows, reduce manual efforts, and empower your administration to focus on strategic initiatives for overall operational excellence.",
    image: AdminIcon1,
    link: "/HRHome",
    moduleId: 9,
  },
  {
    title: "ERP Dashboard",
    description:
      "Experience a bird's-eye view of your enterprise with our software solution. The ERP Dashboard provides real-time insights into key performance indicators, fostering informed decision-making. Elevate your business agility and responsiveness with a centralized hub for comprehensive data visualization.",
    image: DashboardIcon1,
    link: "/HRHome",
    moduleId: 10,
  },
  {
    title: "ERP Traceability",
    description:
      "Ensure end-to-end visibility and traceability with our software solution. From production to distribution, track every step of your business processes. Enhance accountability, comply with regulations, and gain confidence in the transparency of your enterprise operations.",
    image: RaceabilityIcon1,
    link: "/HRHome",
    moduleId: 11,
  },
];

function HomeCards() {
  return (
    <>
      {/* <Header/> */}
      <Menubar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "20px 0",
          marginTop: "60px",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            borderRadius: "25px 0 25px 0 ",
            mt: 5,
            padding: "16px",
            flexDirection: "column",
            alignItems: "center",
            // bgcolor: "#F2D7EE",
            bgcolor: "#D0FBE4",
            //   '&:hover': {
            //     bgcolor: 'primary.dark',
            //   },
          }}
        >
          <div>
            <h2>Enterprise Resource Planning (ERP)</h2>
            <p>
              Welcome to the realm of Enterprise Resource Planning (ERP) at the
              National Water Supply &amp; Drainage Board! Our envisioned ERP
              solution is designed to foster cohesive integration among user
              departments, both internally and with external statutory bodies.
              Through the reduction of resource consumption and manual
              interventions, our goal is to not only enhance financial
              efficiency for the organization but also play a pivotal role in
              promoting environmental sustainability for the wider public.
              Embrace the journey towards heightened efficiency and sustainable
              practices with us!
            </p>
          </div>
        </Box>
      </div>
      <Container>
        <Grid container spacing={4}>
          {cardContent.map((content, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <ActionAreaCard
                title={content.title}
                image={content.image}
                description={content.description}
                link={content.link || "#"}
                // link={`${content.link}/${content.moduleId}`}
                moduleId={content.moduleId}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <br></br>
      <Footer />
    </>
  );
}

export default HomeCards;
