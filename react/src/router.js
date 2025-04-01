import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import YearlyReport from "./yearlyReport";
import ClientBooking from "./ClientBooking";
import ClientTransaction from "./clientTransaction";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: '/yearlyreport', element: <YearlyReport/> },
    { path: '/clientbooking', element: <ClientBooking/> },
    { path: '/clienttransaction', element: <ClientTransaction/> },
   
]);

export default router;