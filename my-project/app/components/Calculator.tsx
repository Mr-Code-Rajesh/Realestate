"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalculator, FaPercentage, FaHome, FaFileInvoiceDollar } from "react-icons/fa";

type Tab = "emi" | "affordability" | "roi" | "stamp_duty";

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<Tab>("emi");

  // --- EMI State ---
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(6.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    const r = rate / (12 * 100);
    const n = tenure * 12;
    if (r === 0) return principal / n;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  // --- Affordability State ---
  const [monthlyIncome, setMonthlyIncome] = useState(15000);
  const [monthlyDebts, setMonthlyDebts] = useState(2000);
  const [downPayment, setDownPayment] = useState(100000);

  const calculateAffordability = () => {
    // Assume 40% of (Income - Debts) can go to EMI
    const maxEMI = (monthlyIncome - monthlyDebts) * 0.4;
    const r = rate / (12 * 100);
    const n = tenure * 12;
    // Reverse EMI formula to find max loan amount
    const maxLoan = maxEMI > 0 ? (maxEMI * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n)) : 0;
    const maxPropertyPrice = maxLoan + downPayment;
    return {
      maxEMI: Math.round(maxEMI),
      maxLoan: Math.round(maxLoan),
      maxPropertyPrice: Math.round(maxPropertyPrice)
    };
  };

  // --- ROI / Rental Yield State ---
  const [propertyPriceROI, setPropertyPriceROI] = useState(500000);
  const [monthlyRent, setMonthlyRent] = useState(3000);
  const [annualExpenses, setAnnualExpenses] = useState(4000);

  const calculateROI = () => {
    const annualRent = monthlyRent * 12;
    const grossYield = (annualRent / propertyPriceROI) * 100;
    const netYield = ((annualRent - annualExpenses) / propertyPriceROI) * 100;
    return {
      grossYield: grossYield.toFixed(2),
      netYield: netYield.toFixed(2),
      netIncome: annualRent - annualExpenses
    };
  };

  // --- Stamp Duty State ---
  const [propertyValue, setPropertyValue] = useState(500000);
  const [stateRate, setStateRate] = useState(5); // 5% default

  const calculateStampDuty = () => {
    const duty = propertyValue * (stateRate / 100);
    const registration = propertyValue * 0.01; // Assume 1% registration fee
    return {
      duty: Math.round(duty),
      registration: Math.round(registration),
      total: Math.round(duty + registration)
    };
  };

  const tabs = [
    { id: "emi", label: "EMI", icon: <FaCalculator /> },
    { id: "affordability", label: "Affordability", icon: <FaHome /> },
    { id: "roi", label: "ROI", icon: <FaPercentage /> },
    { id: "stamp_duty", label: "Stamp Duty", icon: <FaFileInvoiceDollar /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">Smart Calculators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Make informed decisions with our powerful real estate calculators. Plan your budget and analyze investments instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-earth-50 rounded-3xl overflow-hidden shadow-lg border border-earth-100">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-earth-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex-1 py-4 px-2 text-center font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-white text-forest-700 border-t-4 border-t-forest-600"
                    : "text-gray-500 hover:text-forest-600 hover:bg-white/50"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Calculator Content */}
          <div className="p-8 bg-white min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* --- EMI TAB --- */}
              {activeTab === "emi" && (
                <motion.div
                  key="emi"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Loan Amount</span>
                        <span className="text-forest-700 font-bold">${principal.toLocaleString("en-US")}</span>
                      </label>
                      <input
                        type="range"
                        min="50000"
                        max="5000000"
                        step="10000"
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Interest Rate (%)</span>
                        <span className="text-forest-700 font-bold">{rate}%</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="15"
                        step="0.1"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Loan Tenure (Years)</span>
                        <span className="text-forest-700 font-bold">{tenure} Yrs</span>
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        step="1"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                  </div>

                  <div className="bg-forest-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                    <h3 className="text-earth-200 mb-2">Estimated Monthly EMI</h3>
                    <div className="text-5xl font-bold text-forest-400 mb-4">
                      ${calculateEMI().toLocaleString("en-US")}
                    </div>
                    <div className="w-full border-t border-forest-800 pt-4 mt-4 text-sm text-earth-200">
                      <div className="flex justify-between mb-2">
                        <span>Principal Amount:</span>
                        <span className="font-semibold text-white">${principal.toLocaleString("en-US")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Interest:</span>
                        <span className="font-semibold text-white">${((calculateEMI() * tenure * 12) - principal).toLocaleString("en-US")}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* --- AFFORDABILITY TAB --- */}
              {activeTab === "affordability" && (
                <motion.div
                  key="affordability"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Monthly Income (After Tax)</span>
                        <span className="text-forest-700 font-bold">${monthlyIncome.toLocaleString("en-US")}</span>
                      </label>
                      <input
                        type="range"
                        min="2000"
                        max="100000"
                        step="1000"
                        value={monthlyIncome}
                        onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Monthly Debts (Car, Cards, etc.)</span>
                        <span className="text-forest-700 font-bold">${monthlyDebts.toLocaleString("en-US")}</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="100"
                        value={monthlyDebts}
                        onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Down Payment</span>
                        <span className="text-forest-700 font-bold">${downPayment.toLocaleString("en-US")}</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        step="10000"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                  </div>

                  <div className="bg-forest-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                    <h3 className="text-earth-200 mb-2">You can afford a property up to</h3>
                    <div className="text-5xl font-bold text-forest-400 mb-4">
                      ${calculateAffordability().maxPropertyPrice.toLocaleString("en-US")}
                    </div>
                    <div className="w-full border-t border-forest-800 pt-4 mt-4 text-sm text-earth-200">
                      <div className="flex justify-between mb-2">
                        <span>Max Loan Amount:</span>
                        <span className="font-semibold text-white">${calculateAffordability().maxLoan.toLocaleString("en-US")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Affordable EMI:</span>
                        <span className="font-semibold text-white">${calculateAffordability().maxEMI.toLocaleString("en-US")}/mo</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* --- ROI TAB --- */}
              {activeTab === "roi" && (
                <motion.div
                  key="roi"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Property Price</span>
                        <span className="text-forest-700 font-bold">${propertyPriceROI.toLocaleString("en-US")}</span>
                      </label>
                      <input
                        type="range"
                        min="50000"
                        max="5000000"
                        step="10000"
                        value={propertyPriceROI}
                        onChange={(e) => setPropertyPriceROI(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Expected Monthly Rent</span>
                        <span className="text-forest-700 font-bold">${monthlyRent.toLocaleString("en-US")}</span>
                      </label>
                      <input
                        type="range"
                        min="500"
                        max="20000"
                        step="100"
                        value={monthlyRent}
                        onChange={(e) => setMonthlyRent(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Annual Maintenance/Expenses</span>
                        <span className="text-forest-700 font-bold">${annualExpenses.toLocaleString("en-US")}</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="500"
                        value={annualExpenses}
                        onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                  </div>

                  <div className="bg-forest-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                    <h3 className="text-earth-200 mb-2">Net Rental Yield (ROI)</h3>
                    <div className="text-5xl font-bold text-forest-400 mb-4">
                      {calculateROI().netYield}%
                    </div>
                    <div className="w-full border-t border-forest-800 pt-4 mt-4 text-sm text-earth-200">
                      <div className="flex justify-between mb-2">
                        <span>Gross Yield:</span>
                        <span className="font-semibold text-white">{calculateROI().grossYield}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Net Annual Income:</span>
                        <span className="font-semibold text-white">${calculateROI().netIncome.toLocaleString("en-US")}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* --- STAMP DUTY TAB --- */}
              {activeTab === "stamp_duty" && (
                <motion.div
                  key="stamp_duty"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>Property Value</span>
                        <span className="text-forest-700 font-bold">${propertyValue.toLocaleString("en-US")}</span>
                      </label>
                      <input
                        type="range"
                        min="50000"
                        max="5000000"
                        step="10000"
                        value={propertyValue}
                        onChange={(e) => setPropertyValue(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                        <span>State Stamp Duty Rate (%)</span>
                        <span className="text-forest-700 font-bold">{stateRate}%</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="15"
                        step="0.5"
                        value={stateRate}
                        onChange={(e) => setStateRate(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                    </div>
                  </div>

                  <div className="bg-forest-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                    <h3 className="text-earth-200 mb-2">Total Estimated Duty & Registration</h3>
                    <div className="text-5xl font-bold text-forest-400 mb-4">
                      ${calculateStampDuty().total.toLocaleString("en-US")}
                    </div>
                    <div className="w-full border-t border-forest-800 pt-4 mt-4 text-sm text-earth-200">
                      <div className="flex justify-between mb-2">
                        <span>Stamp Duty:</span>
                        <span className="font-semibold text-white">${calculateStampDuty().duty.toLocaleString("en-US")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Registration Fee (1%):</span>
                        <span className="font-semibold text-white">${calculateStampDuty().registration.toLocaleString("en-US")}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
