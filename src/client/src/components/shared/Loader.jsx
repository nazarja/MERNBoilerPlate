import styled from 'styled-components'
import PulseLoader from "react-spinners/PulseLoader";

const Background = styled.div`
    min-width: 100vw;
    min-height: 100vh;
`;

const PLoader = styled(PulseLoader)`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: transition(-50%, -50%);
    color: black;
`;

const Loader = () => {
    return (
        <Background>
            <PLoader />
        </Background>
    );
};

export default Loader;