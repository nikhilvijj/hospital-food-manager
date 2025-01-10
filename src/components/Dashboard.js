import { useEffect, useState } from 'react';
import PatientForm from './PatientForm';
import DietChartForm from './DietChartForm';
import DeliveryStatus from './DeliveryStatus';
import './Dashboard.css'; // Import updated styles

const Dashboard = () => {
    const [role, setRole] = useState('');

    useEffect(() => {
        const userRole = localStorage.getItem('role');
        setRole(userRole);
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Welcome to Your Dashboard</h1>
            {role === 'hospital_manager@xyz.com' && (
                <section>
                    <div className="dashboard-card">
                        <PatientForm />
                    </div>
                    <div className="dashboard-card">
                        <DietChartForm />
                    </div>
                </section>
            )}
            {role === 'hospital_pantry@xyz.com' && (
                <section>
                    <div className="dashboard-card">
                        <h3>Pantry Staff Features Coming Soon</h3>
                    </div>
                </section>
            )}
            {role === 'hospital_delivery@xyz.com' && (
                <section>
                    <div className="dashboard-card">
                        <DeliveryStatus />
                    </div>
                </section>
            )}
        </div>
    );
};

export default Dashboard;
