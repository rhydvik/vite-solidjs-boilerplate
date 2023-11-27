import { JSX, createSignal, onMount } from 'solid-js';
import { ChevronLeft, ChevronRight } from '@suid/icons-material';
interface TabsComponentProps {
  tabs: Array<string> | Array<JSX.Element>;
  activeTab: number;
  onTabClick: (index: number) => void;
}
const TabsComponent = (props: TabsComponentProps) => {
  let containerRef: HTMLDivElement | undefined;
  let contentRef: HTMLDivElement | undefined;
  const [showLeftButton, setShowLeftButton] = createSignal(false);
  const [showRightButton, setShowRightButton] = createSignal(false);

  const scrollLeft = () => {
    if (!showLeftButton()) return;
    if (containerRef) {
      containerRef.scrollTo({
        left: containerRef.scrollLeft - 500,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (!showRightButton()) return;
    if (containerRef) {
      containerRef.scrollTo({
        left: containerRef.scrollLeft + 500,
        behavior: 'smooth',
      });
    }
  };

  const checkOverflow = () => {
    if (containerRef && contentRef) {
      const isScrolledToLeft = containerRef.scrollLeft === 0;
      const isScrolledToRight =
        containerRef.scrollLeft + containerRef.clientWidth >=
        contentRef.scrollWidth - 1;

      setShowLeftButton(!isScrolledToLeft);
      setShowRightButton(!isScrolledToRight);
    }
  };

  onMount(() => {
    checkOverflow();

    const handleUpdate = () => {
      checkOverflow();
    };

    if (containerRef) {
      containerRef.addEventListener('scroll', handleUpdate);
    }

    return () => {
      if (containerRef) {
        containerRef.removeEventListener('scroll', handleUpdate);
      }
    };
  });

  return (
    <div class="flex items-center relative">
      <div
        class="left-0 z-10"
        onClick={() => scrollLeft()}
        style={{
          color: showLeftButton() ? 'black' : 'grey',
          'pointer-events': showLeftButton() ? 'auto' : 'none',
          cursor: showLeftButton() ? 'pointer' : '',
        }}
      >
        <ChevronLeft />
      </div>
      <div
        class="flex overflow-x-auto no-scrollbar w-[100%] px-4"
        ref={containerRef}
      >
        <div class="tabs-content flex w-[100%]" ref={contentRef}>
          {props.tabs.map((tab, index) => (
            <div
              class={`flex flex-1 flex-col items-center justify-center cursor-pointer border-b-2  min-w-[150px] ${
                props.activeTab === index ? 'border-blue-600' : ''
              }`}
              onClick={() => props.onTabClick(index)}
            >
              <span class="text-sm">{tab}</span>
              <span class="text-sm">Tab {index}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        class=" right-0 z-10"
        onClick={scrollRight}
        style={{
          color: showRightButton() ? 'black' : 'grey',
          'pointer-events': showRightButton() ? 'auto' : 'none',
          cursor: showRightButton() ? 'pointer' : '',
        }}
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default TabsComponent;
