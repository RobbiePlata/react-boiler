import { useStateValue } from "state";

const Home = () => {
    const { state: { deviceSize } } = useStateValue();
    return <>{deviceSize}</>
};

export default Home;