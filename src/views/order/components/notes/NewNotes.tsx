import { Card, RichTextEditor } from '../../../../components';

export const NewATGOnlyNote = () => {
  return (
    <Card startTitle="New ATG Only Note">
      <div class="p-2">
        <RichTextEditor content={'<strong><p>Hello</p><p>World</p></strong>'} />
      </div>
    </Card>
  );
};
