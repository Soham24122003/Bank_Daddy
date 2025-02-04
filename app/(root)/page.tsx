
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggendIn = {firstName : 'soham', lastName : 'Patwari', email : 'sohampatwari144@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggendIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction efficiently"
           />

           <TotalBalanceBox 
              accounts = {[]}
              totalBanks = {1}
              totalCurrentBalance={1250.35}
           />
        </header>
      </div>

      <RightSidebar 
          user = {loggendIn}
          transactions = {[]} 
          banks = {[]}     
      />
    </section>
  )
}

export default Home