import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/Rightsidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn =  {firstName: "Amandi", lastName: 'Nwankwo', email: 'example@yahoo.com'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type = "greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext = "Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance={1250.35}
           />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 253.33}, {currentBalance: 137.300}]}
        />
    </section>
  )
}

export default Home