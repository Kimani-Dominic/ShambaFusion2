import { useState } from 'react';
import PersonalInfo from './BuyerPersonalInfo';
import AddressBook from './BuyerAddressBook';
import SecuritySettings from './BuyerSecuritySettings';

const ProfileManagement = () => {
  const [activeTab, setActiveTab] = useState('personalInfo'); // default tab

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Profile Management</h2>

      {/* Tabs Navigation */}
      <div className="flex space-x-4 mb-8">
        <button
          className={`py-2 px-4 font-semibold rounded-full ${
            activeTab === 'personalInfo'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('personalInfo')}
        >
          Personal Info
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-full ${
            activeTab === 'addressBook'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('addressBook')}
        >
          Address Book
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-full ${
            activeTab === 'securitySettings'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('securitySettings')}
        >
          Security Settings
        </button>
      </div>

      {/* Render Active Tab */}
      <div className="mt-6">
        {activeTab === 'personalInfo' && <PersonalInfo />}
        {activeTab === 'addressBook' && <AddressBook />}
        {activeTab === 'securitySettings' && <SecuritySettings />}
      </div>
    </div>
  );
};



export default ProfileManagement;
