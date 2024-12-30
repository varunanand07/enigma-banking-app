import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Varun', lastName: 'Anand', email: 'vanand@tcd.ie'};
    
  return (
    <section className="home">
    <div className="home-content">
        <header className="home-header">
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your account and trascations efficiently"
            />

            <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
            />
        </header>

    </div>
    <RightSideBar 
      user = {loggedIn}
      transactions = {[]}
      banks={[{},{}]}/>
    </section>
  )
}

export default Home
