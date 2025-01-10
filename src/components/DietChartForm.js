import { useForm } from 'react-hook-form';
import axios from 'axios';
import './DietChartForm.css'; // Importing the DietChartForm CSS

const DietChartForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/api/diet-charts', data); // Adjust backend URL
            alert('Diet chart created successfully');
        } catch (err) {
            alert('Error creating diet chart');
        }
    };

    return (
        <div className="diet-chart-form-container">
            <h3>Create Diet Chart</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('patientId')} placeholder="Patient ID" required />
                <input {...register('morningMeal')} placeholder="Morning Meal" />
                <input {...register('eveningMeal')} placeholder="Evening Meal" />
                <input {...register('nightMeal')} placeholder="Night Meal" />
                <textarea {...register('instructions')} placeholder="Instructions"></textarea>
                <button type="submit">Create Chart</button>
            </form>
        </div>
    );
};

export default DietChartForm;
