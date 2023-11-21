interface Cls {
  [key: string]: string;
}
export const colors = {
  info: '#468DB5',
  error: '#D32F2F',
  warning: '#F59D25',
};

const notificationClasses: Cls = {
  container:
    'flex items-center px-4 py-2 rounded-md my-2 border-2 rounded-5 shadow-md ',
  icon: 'mr-4 color-[#D32F2F]',
  warning: 'border-[#F59D25]',
  info: 'border-[#468DB5]',
  error: 'border-[#D32F2F]',
};

export default notificationClasses;
