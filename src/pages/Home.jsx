import React from 'react'
import Navbar from '../components/Header'
import HeroSections from '../components/HeroSections'
import Footer from '../components/Footer'
import CustomerVerification from './CustomerVerification'
import BankAccountVerification from './BankAccountVerification'
import EKyc from './EKyc'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroSections />
        <CustomerVerification />
        <BankAccountVerification />
        <EKyc />
        <Footer />
      </div>
    )
  }
}

export default Home