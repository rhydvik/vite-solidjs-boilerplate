import { Grid } from '../../components';
import { DUMMY_DATA } from '../../constants';

const Loadboard = () => {
  return (
    <div class="p-2">
      <Grid data={DUMMY_DATA.data} height="700px" />
    </div>
  );
};

export default Loadboard;
