import { hosLoginUtils } from "../utils/loginUtils"; 
import DashboardPage from "../pages/DashboardPage"; 

describe("Login and Dashboard Test", () => {
  it("Should log in and click on dashboard icon", () => {
    hosLoginUtils(); 

    DashboardPage.clickDashboardIcon(); 
  });
});
