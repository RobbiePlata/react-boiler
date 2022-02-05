import { useStateValue } from "state";

const Home = () => {
    const { state: { deviceSize } } = useStateValue();
    return <div>
        {deviceSize}
    </div>
};

export default Home;