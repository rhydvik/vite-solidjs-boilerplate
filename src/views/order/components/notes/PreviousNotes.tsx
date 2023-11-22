import { Card } from '../../../../components';

export const PreviousNotes = () => {
  return (
    <Card
      startTitle="Previous Notes"
      endTitle="Add New Note"
      startIcon={<span>📝</span>}
      raised={true}
    >
      <div>
        <h1>PreviousNotes</h1>
      </div>
    </Card>
  );
};
