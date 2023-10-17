import "./App.css";
import Pricecart from "./components/pricecard";

function App() {
  const data = [
    {
      plan: "FREE",
      price: "$0",
      user: "Single User",
      highlight: false,
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      subDomainHighlight: false,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,
    },
    {
      plan: "PLUS",
      price: "$9",
      user: "5 User",
      highlight: true,
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      subDomainHighlight: true,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,
    },
    {
      plan: "PRO",
      price: "$49",
      user: "Unlimited User",
      highlight: true,
      userEnabler: true,
      storage: "150GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Unlimited Free Subdomain",
      subDomainEnabler: true,
      subDomainHighlight: true,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: true,
    },
  ];
  return (
    <> 
      <div className="container">
       
        
       
          <div className="d-flex flex-wrap gap-3 justify-content-evenly">
          {
              data.map((e, i) => (
                 
                  <Pricecart value={e} key={i}/>
                
              ))
            }
          </div>
        
        
        </div>
    </>
  );
}

export default App;