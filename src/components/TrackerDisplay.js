import UserContext from '../context/UserContext';
import PieChart from './PieChart';
import { useContext } from 'react';

const TrackerDisplay = ({glasses}) => {

    const value = useContext(UserContext);

    return (
        <>
        
            <p>{value.name}'s daily goal: {value.goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={value.goal} />
            { glasses >= value.goal ? "Goal reached! 🥳" : null }
            <br></br>
        
        </>
    )
}

export default TrackerDisplay;
