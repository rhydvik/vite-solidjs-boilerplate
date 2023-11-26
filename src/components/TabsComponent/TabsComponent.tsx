import { createSignal, onCleanup, onMount } from 'solid-js';
import { ChevronLeft, ChevronRight } from '@suid/icons-material';
/*eslint-disable */
interface TabsComponentProps {
  tabs: Array<string>;
  activeTab: number;
  onTabClick: (index: number) => void;
}
const TabsComponent = (props: TabsComponentProps) => {
  let containerRef: HTMLDivElement | undefined;
  let contentRef: HTMLDivElement | undefined;
  const [showLeftButton, setShowLeftButton] = createSignal(false);
  const [showRightButton, setShowRightButton] = createSignal(false);
  console.log(props.activeTab === 0 ? "border-blue-600" : "ss");
  const scrollLeft = () => {
    const content: any = contentRef;
    if (content) {
      content.scrollLeft -= 50;
    }
  };

  const scrollRight = () => {
    const content: any = contentRef;
    console.log(content.scrollLeft);
    if (containerRef) {
      containerRef.scrollLeft += 50;
    }
  };

  onCleanup(() => {});

  const checkOverflow = () => {
    const container: any = containerRef;
    const content: any = contentRef;
    console.log(container, content);
    if (container && content) {
      setShowLeftButton(content.scrollLeft > 0);
      setShowRightButton(
        content.scrollLeft + container.clientWidth < content.scrollWidth,
      );
    }
  };

  // Update overflow visibility on content change or resize
  onMount(() => {
    checkOverflow(); // Check overflow initially

    const handleUpdate = () => {
      checkOverflow(); // Update overflow visibility on scroll or resize
    };

    if (contentRef) {
      contentRef.addEventListener("scroll", handleUpdate);
    }

    return () => {
      // Cleanup function to remove event listener on component unmount
      if (contentRef) {
        contentRef.removeEventListener("scroll", handleUpdate);
      }
    };
  });

  return (
    <div class="flex items-center relative">
      {showLeftButton() && (
        <div class="absolute left-0 z-10" onClick={scrollLeft}>
          <ChevronLeft />
        </div>
      )}
      <div class="flex overflow-x-auto" ref={containerRef}>
        <div class="tabs-content flex" ref={contentRef}>
          {props.tabs.map((tab, index) => (
            <div
              class={`flex flex-col items-center justify-center cursor-pointer border-b-2 min-w-[200px] ${
                props.activeTab === index ? "border-blue-600" : ""
              }`}
              onClick={() => props.onTabClick(index)}
            >
              <span class="text-sm">{tab}</span>
              <span class="text-sm">Tab {index}</span>
            </div>
          ))}
        </div>
      </div>
      {showRightButton() && (
        <div class="absolute right-0 z-10" onClick={scrollRight}>
          <ChevronRight />
        </div>
      )}
    </div>
  );
};

export default TabsComponent;
