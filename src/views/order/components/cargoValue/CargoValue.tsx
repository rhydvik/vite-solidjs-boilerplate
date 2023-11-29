import { Card, Radio } from '../../../../components';

export const CargoValue = () => {
  const radioOptions = [
    { label: 'Yes', value: '1', checked: true },
    { label: 'No', value: '2' },
  ];
  return (
    <>
      <Card startTitle="Cargo Value*">
        <div class="p-4">
          <p>Is the cargo value more than $100,000?</p>
          <p>
            <Radio options={radioOptions} />
          </p>
        </div>
      </Card>
    </>
  );
};
