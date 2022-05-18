import { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';
import Header from '../components/Header';
import TrackerContainer from '../containers/TrackerContainer';
import UserContext from '../context/UserContext';
import { useModal } from '../hooks/useModel';

const MainPage = () => {

    const [name, setName] = useState('Stranger');
    const [goal, setGoal] = useState(1);
    const input = useModal()
    

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleGoalChange = (e) => {
        setGoal(parseInt(e.target.value))
    }



    return (
        <>
            <Modal
                isOpen={input.isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
            >
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={name} onChange={handleNameChange} />
                <br></br>
                <label htmlFor='goal'>Your goal: </label>
                <input type="number" min="1" name="goal" defaultValue={goal} onChange={handleGoalChange} />
                <button onClick={input.toggleModal}>OK</button>
            </Modal>

            
            <UserContext.Provider value={{name, setName, goal, setGoal}}>
            <Header/>
            <TrackerContainer/>
            </UserContext.Provider>
        </>
    )
}

export default MainPage;
