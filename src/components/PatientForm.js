import { useForm } from 'react-hook-form';
import axios from 'axios';
import './PatientForm.css'; // Importing the PatientForm CSS

const PatientForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/api/patients', data); // Adjust backend URL
            alert('Patient added successfully');
        } catch (err) {
            alert('Error adding patient');
        }
    };

    return (
        <div className="patient-form-container">
            <h3>Add Patient</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} placeholder="Patient Name" required />
                <input {...register('diseases')} placeholder="Diseases" />
                <input {...register('allergies')} placeholder="Allergies" />
                <input {...register('roomNumber')} placeholder="Room Number" />
                <input {...register('bedNumber')} placeholder="Bed Number" />
                <input {...register('floorNumber')} placeholder="Floor Number" />
                <input {...register('age')} placeholder="Age" type="number" />
                <input {...register('gender')} placeholder="Gender" />
                <input {...register('contactInfo')} placeholder="Contact Info" />
                <input {...register('emergencyContact')} placeholder="Emergency Contact" />
                <button type="submit">Add Patient</button>
            </form>
        </div>
    );
};

export default PatientForm;
