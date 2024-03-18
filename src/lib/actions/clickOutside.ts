/** Dispatch event on click or tap outside of node */
export function clickOutside(node: HTMLElement): { destroy: () => void } {
  
  const handleOutsideInteraction = (event: MouseEvent | TouchEvent) => {
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside', { detail: node })
      )
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    handleOutsideInteraction(event);
  };

  // const handleDocumentTouchStart = (event: TouchEvent) => {
  //   handleOutsideInteraction(event);
  // };

  document.addEventListener('click', handleDocumentClick, true);
  // document.addEventListener('touchstart', handleDocumentTouchStart, true);

  return {
    destroy() {
      document.removeEventListener('click', handleDocumentClick, true);
      // document.removeEventListener('touchstart', handleDocumentTouchStart, true);
    }
  };
}