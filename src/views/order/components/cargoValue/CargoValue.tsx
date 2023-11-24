import { Card, Radio } from '../../../../components';

export const CargoValue = () => {
  return (
    <>
      <Card startTitle="Cargo Value*">
        <div class="p-4">
          <p>Is the cargo value more than $100,000?</p>
          <p>
            <Radio label={'Yes'} checked={true} value={'yes'} />
            <Radio label={'No'} value={'no'} />
          </p>
        </div>
      </Card>
    </>
  );
};
