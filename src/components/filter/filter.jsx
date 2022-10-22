import ApplyButton from './applyButton/applyButton';
import Select from './select/select';
import './filter.css';


export default function Filter() {
    let ageCategories = ['Newborn', 'Young', 'Old'];
    let weightCategories = ['Small', 'Middle', 'Big'];
    let priceCategories = ['Cheap', 'Medium', 'Expensive'];

    return (
        <div className='filter'>
            <Select filterBy='Age' category={ageCategories}/>
            <Select filterBy='Weight' category={weightCategories}/>
            <Select filterBy='Price' category={priceCategories}/>
            <ApplyButton/>
        </div>
    );
}