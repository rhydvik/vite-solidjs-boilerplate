// classes.ts
export default {
  container: 'flex flex-col h-full bg-white',
  toggleButton: 'absolute -right-2 top-2',
  content: (isCollapsed: boolean) =>
    `p-2 py-8 transition-all ease-in-out duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`,
};
