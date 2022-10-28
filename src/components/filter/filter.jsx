import ApplyButton from './applyButton/applyButton';
import Select from './select/select';
import './filter.css';


export default function Filter() {
    let ageCategories = ['Newborn (0.1 - 0.4)', 'Young (0.5 - 1.5)', 'Old (1.6+)'];
    let weightCategories = ['Small (0.1 - 1)', 'Middle (1.1 - 2)', 'Big (2.1+)'];
    let priceCategories = ['Cheap (1 - 65)', 'Medium (66 - 110)', 'Expensive (110+)'];

    return (
        <div className='filter'>
            <Select id="ageFilter" filterBy='Age' category={ageCategories}/>
            <Select id="weightFilter" filterBy='Weight' category={weightCategories}/>
            <Select id="priceFilter" filterBy='Price' category={priceCategories}/>
            <ApplyButton/>
        </div>
    );
}